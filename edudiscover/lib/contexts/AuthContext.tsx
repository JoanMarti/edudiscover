'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';

export interface Child {
    id: string;
    name: string;
    birthDate: string;
    currentSchool?: string;
    grade?: string;
}

export interface Address {
    street: string;
    city: string;
    postalCode: string;
    province: string;
    country: string;
}

export interface ScholarshipAid {
    id: string;
    name: string;
    amount?: number;
    type: 'scholarship' | 'grant' | 'subsidy' | 'other';
    startDate: string;
    endDate?: string;
}

export interface User {
    id: string;
    email: string;
    profile: {
        firstName: string;
        lastName: string;
        phone?: string;
        avatar?: string;
        birthDate?: string; // ISO date string
        address?: Address;
    };
    family: {
        numberOfChildren: number;
        children: Child[];
    };
    preferences: {
        notifications: boolean;
        newsletter: boolean;
        religiousPreferences?: string[]; // e.g., ['Catholic', 'Secular', 'Non-denominational']
        preferredSchoolTypes?: string[]; // e.g., ['public', 'private', 'charter', 'international']
        importantExtracurriculars?: string[]; // e.g., ['Sports', 'Music', 'Arts', 'Languages']
        budgetRange?: string; // e.g., 'free', '0-300', '300-600', '600+'
        maxDistanceKm?: number; // Maximum distance from home to school
    };
    financial: {
        scholarshipsAndAid: ScholarshipAid[];
        eligibleForAid: boolean;
        monthlyBudget?: number;
    };
    savedSchools: string[];
    comparisons: string[][];
    createdAt: string;
    lastLogin: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    register: (email: string, password: string, firstName: string, lastName: string) => Promise<boolean>;
    logout: () => void;
    updateProfile: (updates: Partial<User['profile']>) => void;
    updateFamily: (updates: Partial<User['family']>) => void;
    updatePreferences: (updates: Partial<User['preferences']>) => void;
    updateFinancial: (updates: Partial<User['financial']>) => void;
    addChild: (child: Omit<Child, 'id'>) => void;
    updateChild: (childId: string, updates: Partial<Child>) => void;
    removeChild: (childId: string) => void;
    addScholarship: (scholarship: Omit<ScholarshipAid, 'id'>) => void;
    removeScholarship: (scholarshipId: string) => void;
    saveSchool: (schoolId: string) => void;
    unsaveSchool: (schoolId: string) => void;
    isSchoolSaved: (schoolId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Simple hash function for demo purposes (NOT SECURE - only for demonstration)
function simpleHash(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash.toString(36);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [users, setUsers] = useLocalStorage<Record<string, User & { password: string }>>('edudiscover_users', {});
    const [currentUserId, setCurrentUserId] = useLocalStorage<string | null>('edudiscover_session', null);
    const [user, setUser] = useState<User | null>(null);

    // Load user on mount
    useEffect(() => {
        if (currentUserId && users[currentUserId]) {
            const { password, ...userData } = users[currentUserId];
            setUser(userData);
        }
    }, [currentUserId, users]);

    const register = async (email: string, password: string, firstName: string, lastName: string): Promise<boolean> => {
        // Check if user already exists
        const existingUser = Object.values(users).find(u => u.email === email);
        if (existingUser) {
            return false;
        }

        const userId = `user_${Date.now()}`;
        const hashedPassword = simpleHash(password);

        const newUser: User & { password: string } = {
            id: userId,
            email,
            password: hashedPassword,
            profile: {
                firstName,
                lastName,
            },
            family: {
                numberOfChildren: 0,
                children: [],
            },
            preferences: {
                notifications: true,
                newsletter: false,
            },
            financial: {
                scholarshipsAndAid: [],
                eligibleForAid: false,
            },
            savedSchools: [],
            comparisons: [],
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString(),
        };

        setUsers({ ...users, [userId]: newUser });
        setCurrentUserId(userId);

        const { password: _, ...userData } = newUser;
        setUser(userData);

        return true;
    };

    const login = async (email: string, password: string): Promise<boolean> => {
        const hashedPassword = simpleHash(password);
        const foundUser = Object.values(users).find(
            u => u.email === email && u.password === hashedPassword
        );

        if (!foundUser) {
            return false;
        }

        // Update last login
        const updatedUser = {
            ...foundUser,
            lastLogin: new Date().toISOString(),
        };
        setUsers({ ...users, [foundUser.id]: updatedUser });
        setCurrentUserId(foundUser.id);

        const { password: _, ...userData } = updatedUser;
        setUser(userData);

        return true;
    };

    const logout = () => {
        setCurrentUserId(null);
        setUser(null);
    };

    const updateProfile = (updates: Partial<User['profile']>) => {
        if (!user || !currentUserId) return;

        const updatedUser = {
            ...users[currentUserId],
            profile: {
                ...users[currentUserId].profile,
                ...updates,
            },
        };

        setUsers({ ...users, [currentUserId]: updatedUser });

        const { password: _, ...userData } = updatedUser;
        setUser(userData);
    };

    const saveSchool = (schoolId: string) => {
        if (!user || !currentUserId) return;

        const updatedUser = {
            ...users[currentUserId],
            savedSchools: [...users[currentUserId].savedSchools, schoolId],
        };

        setUsers({ ...users, [currentUserId]: updatedUser });

        const { password: _, ...userData } = updatedUser;
        setUser(userData);
    };

    const unsaveSchool = (schoolId: string) => {
        if (!user || !currentUserId) return;

        const updatedUser = {
            ...users[currentUserId],
            savedSchools: users[currentUserId].savedSchools.filter(id => id !== schoolId),
        };

        setUsers({ ...users, [currentUserId]: updatedUser });

        const { password: _, ...userData } = updatedUser;
        setUser(userData);
    };

    const isSchoolSaved = (schoolId: string): boolean => {
        return user?.savedSchools.includes(schoolId) || false;
    };

    const updateFamily = (updates: Partial<User['family']>) => {
        if (!user || !currentUserId) return;

        const updatedUser = {
            ...users[currentUserId],
            family: {
                ...users[currentUserId].family,
                ...updates,
            },
        };

        setUsers({ ...users, [currentUserId]: updatedUser });
        const { password: _, ...userData } = updatedUser;
        setUser(userData);
    };

    const updatePreferences = (updates: Partial<User['preferences']>) => {
        if (!user || !currentUserId) return;

        const updatedUser = {
            ...users[currentUserId],
            preferences: {
                ...users[currentUserId].preferences,
                ...updates,
            },
        };

        setUsers({ ...users, [currentUserId]: updatedUser });
        const { password: _, ...userData } = updatedUser;
        setUser(userData);
    };

    const updateFinancial = (updates: Partial<User['financial']>) => {
        if (!user || !currentUserId) return;

        const updatedUser = {
            ...users[currentUserId],
            financial: {
                ...users[currentUserId].financial,
                ...updates,
            },
        };

        setUsers({ ...users, [currentUserId]: updatedUser });
        const { password: _, ...userData } = updatedUser;
        setUser(userData);
    };

    const addChild = (child: Omit<Child, 'id'>) => {
        if (!user || !currentUserId) return;

        const newChild: Child = {
            ...child,
            id: `child_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        };

        const updatedUser = {
            ...users[currentUserId],
            family: {
                ...users[currentUserId].family,
                children: [...users[currentUserId].family.children, newChild],
                numberOfChildren: users[currentUserId].family.children.length + 1,
            },
        };

        setUsers({ ...users, [currentUserId]: updatedUser });
        const { password: _, ...userData } = updatedUser;
        setUser(userData);
    };

    const updateChild = (childId: string, updates: Partial<Child>) => {
        if (!user || !currentUserId) return;

        const updatedChildren = users[currentUserId].family.children.map(child =>
            child.id === childId ? { ...child, ...updates } : child
        );

        const updatedUser = {
            ...users[currentUserId],
            family: {
                ...users[currentUserId].family,
                children: updatedChildren,
            },
        };

        setUsers({ ...users, [currentUserId]: updatedUser });
        const { password: _, ...userData } = updatedUser;
        setUser(userData);
    };

    const removeChild = (childId: string) => {
        if (!user || !currentUserId) return;

        const updatedChildren = users[currentUserId].family.children.filter(
            child => child.id !== childId
        );

        const updatedUser = {
            ...users[currentUserId],
            family: {
                ...users[currentUserId].family,
                children: updatedChildren,
                numberOfChildren: updatedChildren.length,
            },
        };

        setUsers({ ...users, [currentUserId]: updatedUser });
        const { password: _, ...userData } = updatedUser;
        setUser(userData);
    };

    const addScholarship = (scholarship: Omit<ScholarshipAid, 'id'>) => {
        if (!user || !currentUserId) return;

        const newScholarship: ScholarshipAid = {
            ...scholarship,
            id: `scholarship_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        };

        const updatedUser = {
            ...users[currentUserId],
            financial: {
                ...users[currentUserId].financial,
                scholarshipsAndAid: [
                    ...users[currentUserId].financial.scholarshipsAndAid,
                    newScholarship,
                ],
            },
        };

        setUsers({ ...users, [currentUserId]: updatedUser });
        const { password: _, ...userData } = updatedUser;
        setUser(userData);
    };

    const removeScholarship = (scholarshipId: string) => {
        if (!user || !currentUserId) return;

        const updatedScholarships = users[currentUserId].financial.scholarshipsAndAid.filter(
            scholarship => scholarship.id !== scholarshipId
        );

        const updatedUser = {
            ...users[currentUserId],
            financial: {
                ...users[currentUserId].financial,
                scholarshipsAndAid: updatedScholarships,
            },
        };

        setUsers({ ...users, [currentUserId]: updatedUser });
        const { password: _, ...userData } = updatedUser;
        setUser(userData);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                login,
                register,
                logout,
                updateProfile,
                updateFamily,
                updatePreferences,
                updateFinancial,
                addChild,
                updateChild,
                removeChild,
                addScholarship,
                removeScholarship,
                saveSchool,
                unsaveSchool,
                isSchoolSaved,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
