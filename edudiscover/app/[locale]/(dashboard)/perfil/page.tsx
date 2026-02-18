'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/contexts/AuthContext';
import { User, Mail, Phone, MapPin, Calendar, DollarSign, Heart, GitCompare, LogOut, Plus, Settings } from 'lucide-react';
import Link from 'next/link';
import { schools } from '@/lib/data/schools';
import ChildCard from '@/components/profile/ChildCard';
import ScholarshipCard from '@/components/profile/ScholarshipCard';
import MultiSelectChips from '@/components/profile/MultiSelectChips';
import type { Child, ScholarshipAid } from '@/lib/contexts/AuthContext';

type TabType = 'personal' | 'family' | 'preferences' | 'financial';

const RELIGIOUS_OPTIONS = ['Católico', 'Laico', 'Aconfesional', 'Protestante', 'Judío', 'Musulmán', 'Otro'];
const SCHOOL_TYPE_OPTIONS = ['Público', 'Privado', 'Concertado', 'Internacional'];
const EXTRACURRICULAR_OPTIONS = ['Deportes', 'Música', 'Arte', 'Idiomas', 'Ciencias', 'Tecnología', 'Teatro', 'Danza'];
const BUDGET_OPTIONS = [
    { value: 'free', label: 'Gratuito' },
    { value: '0-300', label: '0-300€/mes' },
    { value: '300-600', label: '300-600€/mes' },
    { value: '600-1000', label: '600-1000€/mes' },
    { value: '1000+', label: 'Más de 1000€/mes' }
];

export default function ProfilePage() {
    const router = useRouter();
    const {
        user,
        isAuthenticated,
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
        unsaveSchool
    } = useAuth();

    const [activeTab, setActiveTab] = useState<TabType>('personal');
    const [showAddChild, setShowAddChild] = useState(false);
    const [showAddScholarship, setShowAddScholarship] = useState(false);

    // Personal info form
    const [personalForm, setPersonalForm] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        birthDate: '',
        address: {
            street: '',
            city: '',
            postalCode: '',
            province: '',
            country: 'España'
        }
    });

    // New child form
    const [newChildForm, setNewChildForm] = useState({
        name: '',
        birthDate: '',
        currentSchool: '',
        grade: ''
    });

    // New scholarship form
    const [newScholarshipForm, setNewScholarshipForm] = useState({
        name: '',
        type: 'scholarship' as 'scholarship' | 'grant' | 'subsidy' | 'other',
        amount: '',
        startDate: '',
        endDate: ''
    });

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/iniciar-sesion?redirect=/perfil');
            return;
        }

        if (user) {
            setPersonalForm({
                firstName: user.profile.firstName,
                lastName: user.profile.lastName,
                phone: user.profile.phone || '',
                birthDate: user.profile.birthDate || '',
                address: user.profile.address || {
                    street: '',
                    city: '',
                    postalCode: '',
                    province: '',
                    country: 'España'
                }
            });
        }
    }, [isAuthenticated, user, router]);

    const handlePersonalSave = () => {
        updateProfile({
            firstName: personalForm.firstName,
            lastName: personalForm.lastName,
            phone: personalForm.phone,
            birthDate: personalForm.birthDate,
            address: personalForm.address
        });
    };

    const handleAddChild = () => {
        if (!newChildForm.name || !newChildForm.birthDate) return;

        addChild({
            name: newChildForm.name,
            birthDate: newChildForm.birthDate,
            currentSchool: newChildForm.currentSchool || undefined,
            grade: newChildForm.grade || undefined
        });

        setNewChildForm({ name: '', birthDate: '', currentSchool: '', grade: '' });
        setShowAddChild(false);
    };

    const handleAddScholarship = () => {
        if (!newScholarshipForm.name || !newScholarshipForm.startDate) return;

        addScholarship({
            name: newScholarshipForm.name,
            type: newScholarshipForm.type,
            amount: newScholarshipForm.amount ? parseFloat(newScholarshipForm.amount) : undefined,
            startDate: newScholarshipForm.startDate,
            endDate: newScholarshipForm.endDate || undefined
        });

        setNewScholarshipForm({ name: '', type: 'scholarship', amount: '', startDate: '', endDate: '' });
        setShowAddScholarship(false);
    };

    if (!user) {
        return null;
    }

    const savedSchoolsList = schools.filter(school => user.savedSchools.includes(school.id));

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b">
                <div className="container-custom py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Mi Perfil</h1>
                            <p className="text-gray-600 mt-1">{user.email}</p>
                        </div>
                        <button
                            onClick={logout}
                            className="btn-secondary flex items-center gap-2"
                        >
                            <LogOut size={16} />
                            Cerrar sesión
                        </button>
                    </div>
                </div>
            </div>

            <div className="container-custom py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="card p-4 space-y-2">
                            <button
                                onClick={() => setActiveTab('personal')}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeTab === 'personal'
                                    ? 'bg-primary-100 text-primary-700 font-medium'
                                    : 'hover:bg-gray-100'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <User size={18} />
                                    <span>Información Personal</span>
                                </div>
                            </button>

                            <button
                                onClick={() => setActiveTab('family')}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeTab === 'family'
                                    ? 'bg-primary-100 text-primary-700 font-medium'
                                    : 'hover:bg-gray-100'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Heart size={18} />
                                    <span>Familia</span>
                                </div>
                            </button>

                            <button
                                onClick={() => setActiveTab('preferences')}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeTab === 'preferences'
                                    ? 'bg-primary-100 text-primary-700 font-medium'
                                    : 'hover:bg-gray-100'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Settings size={18} />
                                    <span>Preferencias</span>
                                </div>
                            </button>

                            <button
                                onClick={() => setActiveTab('financial')}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeTab === 'financial'
                                    ? 'bg-primary-100 text-primary-700 font-medium'
                                    : 'hover:bg-gray-100'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <DollarSign size={18} />
                                    <span>Información Financiera</span>
                                </div>
                            </button>
                        </div>

                        {/* Quick Stats */}
                        <div className="card p-4 mt-4 space-y-3">
                            <h3 className="font-semibold text-gray-900">Resumen</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Colegios guardados</span>
                                    <span className="font-semibold">{user.savedSchools.length}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Hijos</span>
                                    <span className="font-semibold">{user.family.numberOfChildren}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {/* Personal Information Tab */}
                        {activeTab === 'personal' && (
                            <div className="card p-6">
                                <h2 className="text-2xl font-bold mb-6">Información Personal</h2>

                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Nombre
                                            </label>
                                            <input
                                                type="text"
                                                value={personalForm.firstName}
                                                onChange={(e) => setPersonalForm({ ...personalForm, firstName: e.target.value })}
                                                className="input w-full"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Apellidos
                                            </label>
                                            <input
                                                type="text"
                                                value={personalForm.lastName}
                                                onChange={(e) => setPersonalForm({ ...personalForm, lastName: e.target.value })}
                                                className="input w-full"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-lg">
                                            <Mail size={18} className="text-gray-400" />
                                            <span className="text-gray-600">{user.email}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">El email no se puede modificar</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Teléfono
                                            </label>
                                            <input
                                                type="tel"
                                                value={personalForm.phone}
                                                onChange={(e) => setPersonalForm({ ...personalForm, phone: e.target.value })}
                                                className="input w-full"
                                                placeholder="+34 600 000 000"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Fecha de nacimiento
                                            </label>
                                            <input
                                                type="date"
                                                value={personalForm.birthDate}
                                                onChange={(e) => setPersonalForm({ ...personalForm, birthDate: e.target.value })}
                                                className="input w-full"
                                            />
                                        </div>
                                    </div>

                                    <div className="border-t pt-6">
                                        <h3 className="text-lg font-semibold mb-4">Dirección</h3>

                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Calle y número
                                                </label>
                                                <input
                                                    type="text"
                                                    value={personalForm.address.street}
                                                    onChange={(e) => setPersonalForm({
                                                        ...personalForm,
                                                        address: { ...personalForm.address, street: e.target.value }
                                                    })}
                                                    className="input w-full"
                                                    placeholder="Calle Principal, 123"
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Ciudad
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={personalForm.address.city}
                                                        onChange={(e) => setPersonalForm({
                                                            ...personalForm,
                                                            address: { ...personalForm.address, city: e.target.value }
                                                        })}
                                                        className="input w-full"
                                                        placeholder="Madrid"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Código Postal
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={personalForm.address.postalCode}
                                                        onChange={(e) => setPersonalForm({
                                                            ...personalForm,
                                                            address: { ...personalForm.address, postalCode: e.target.value }
                                                        })}
                                                        className="input w-full"
                                                        placeholder="28001"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Provincia
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={personalForm.address.province}
                                                        onChange={(e) => setPersonalForm({
                                                            ...personalForm,
                                                            address: { ...personalForm.address, province: e.target.value }
                                                        })}
                                                        className="input w-full"
                                                        placeholder="Madrid"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end pt-4">
                                        <button
                                            onClick={handlePersonalSave}
                                            className="btn-primary"
                                        >
                                            Guardar cambios
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Family Tab */}
                        {activeTab === 'family' && (
                            <div className="space-y-6">
                                <div className="card p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-2xl font-bold">Familia</h2>
                                        <button
                                            onClick={() => setShowAddChild(!showAddChild)}
                                            className="btn-primary flex items-center gap-2"
                                        >
                                            <Plus size={16} />
                                            Añadir hijo/a
                                        </button>
                                    </div>

                                    {showAddChild && (
                                        <div className="card p-4 mb-6 bg-gray-50">
                                            <h3 className="font-semibold mb-4">Nuevo hijo/a</h3>
                                            <div className="space-y-3">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Nombre *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={newChildForm.name}
                                                        onChange={(e) => setNewChildForm({ ...newChildForm, name: e.target.value })}
                                                        className="input w-full"
                                                        placeholder="Nombre del hijo/a"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Fecha de nacimiento *
                                                    </label>
                                                    <input
                                                        type="date"
                                                        value={newChildForm.birthDate}
                                                        onChange={(e) => setNewChildForm({ ...newChildForm, birthDate: e.target.value })}
                                                        className="input w-full"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Colegio actual (opcional)
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={newChildForm.currentSchool}
                                                        onChange={(e) => setNewChildForm({ ...newChildForm, currentSchool: e.target.value })}
                                                        className="input w-full"
                                                        placeholder="Nombre del colegio"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Curso (opcional)
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={newChildForm.grade}
                                                        onChange={(e) => setNewChildForm({ ...newChildForm, grade: e.target.value })}
                                                        className="input w-full"
                                                        placeholder="Ej: 3º Primaria"
                                                    />
                                                </div>

                                                <div className="flex gap-2 pt-2">
                                                    <button
                                                        onClick={handleAddChild}
                                                        className="btn-primary"
                                                        disabled={!newChildForm.name || !newChildForm.birthDate}
                                                    >
                                                        Añadir
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setShowAddChild(false);
                                                            setNewChildForm({ name: '', birthDate: '', currentSchool: '', grade: '' });
                                                        }}
                                                        className="btn-secondary"
                                                    >
                                                        Cancelar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {user.family.children.length === 0 ? (
                                        <div className="text-center py-12">
                                            <Heart size={48} className="mx-auto text-gray-300 mb-4" />
                                            <p className="text-gray-600">No has añadido ningún hijo/a todavía</p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Añade información sobre tus hijos para recibir mejores recomendaciones
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {user.family.children.map(child => (
                                                <ChildCard
                                                    key={child.id}
                                                    child={child}
                                                    onUpdate={updateChild}
                                                    onRemove={removeChild}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Saved Schools */}
                                <div className="card p-6">
                                    <h3 className="text-xl font-bold mb-4">Colegios Guardados</h3>
                                    {savedSchoolsList.length === 0 ? (
                                        <p className="text-gray-600">No has guardado ningún colegio todavía</p>
                                    ) : (
                                        <div className="space-y-3">
                                            {savedSchoolsList.map(school => (
                                                <div key={school.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                    <Link href={`/${school.slug}`} className="flex-1 hover:text-primary-600">
                                                        <p className="font-medium">{school.name}</p>
                                                        <p className="text-sm text-gray-600">{school.city}</p>
                                                    </Link>
                                                    <button
                                                        onClick={() => unsaveSchool(school.id)}
                                                        className="text-red-600 hover:text-red-700 text-sm"
                                                    >
                                                        Eliminar
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Preferences Tab */}
                        {activeTab === 'preferences' && (
                            <div className="card p-6">
                                <h2 className="text-2xl font-bold mb-6">Preferencias Educativas</h2>

                                <div className="space-y-6">
                                    <MultiSelectChips
                                        label="Ideario religioso/filosófico"
                                        options={RELIGIOUS_OPTIONS}
                                        selected={user.preferences.religiousPreferences || []}
                                        onChange={(selected) => updatePreferences({ religiousPreferences: selected })}
                                        placeholder="Selecciona tus preferencias religiosas o filosóficas"
                                    />

                                    <MultiSelectChips
                                        label="Tipos de colegio preferidos"
                                        options={SCHOOL_TYPE_OPTIONS}
                                        selected={user.preferences.preferredSchoolTypes || []}
                                        onChange={(selected) => updatePreferences({ preferredSchoolTypes: selected })}
                                        placeholder="Selecciona los tipos de colegio que te interesan"
                                    />

                                    <MultiSelectChips
                                        label="Actividades extracurriculares importantes"
                                        options={EXTRACURRICULAR_OPTIONS}
                                        selected={user.preferences.importantExtracurriculars || []}
                                        onChange={(selected) => updatePreferences({ importantExtracurriculars: selected })}
                                        placeholder="Selecciona las actividades que son importantes para ti"
                                    />

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Rango de presupuesto mensual
                                        </label>
                                        <select
                                            value={user.preferences.budgetRange || ''}
                                            onChange={(e) => updatePreferences({ budgetRange: e.target.value })}
                                            className="input w-full"
                                        >
                                            <option value="">Selecciona un rango</option>
                                            {BUDGET_OPTIONS.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Distancia máxima al colegio (km)
                                        </label>
                                        <div className="space-y-2">
                                            <input
                                                type="range"
                                                min="0"
                                                max="50"
                                                step="1"
                                                value={user.preferences.maxDistanceKm || 10}
                                                onChange={(e) => updatePreferences({ maxDistanceKm: parseInt(e.target.value) })}
                                                className="w-full"
                                            />
                                            <div className="flex justify-between text-sm text-gray-600">
                                                <span>0 km</span>
                                                <span className="font-semibold text-primary-600">
                                                    {user.preferences.maxDistanceKm || 10} km
                                                </span>
                                                <span>50 km</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Financial Tab */}
                        {activeTab === 'financial' && (
                            <div className="space-y-6">
                                <div className="card p-6">
                                    <h2 className="text-2xl font-bold mb-6">Información Financiera</h2>

                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Presupuesto mensual para educación
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    value={user.financial.monthlyBudget || ''}
                                                    onChange={(e) => updateFinancial({
                                                        monthlyBudget: e.target.value ? parseFloat(e.target.value) : undefined
                                                    })}
                                                    className="input w-full pr-12"
                                                    placeholder="0"
                                                    min="0"
                                                    step="50"
                                                />
                                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                                                    €/mes
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                id="eligibleForAid"
                                                checked={user.financial.eligibleForAid}
                                                onChange={(e) => updateFinancial({ eligibleForAid: e.target.checked })}
                                                className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                                            />
                                            <label htmlFor="eligibleForAid" className="text-sm font-medium text-gray-700">
                                                Soy elegible para ayudas o becas
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="card p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-bold">Becas y Ayudas Recibidas</h3>
                                        <button
                                            onClick={() => setShowAddScholarship(!showAddScholarship)}
                                            className="btn-primary flex items-center gap-2"
                                        >
                                            <Plus size={16} />
                                            Añadir beca/ayuda
                                        </button>
                                    </div>

                                    {showAddScholarship && (
                                        <div className="card p-4 mb-6 bg-gray-50">
                                            <h4 className="font-semibold mb-4">Nueva beca/ayuda</h4>
                                            <div className="space-y-3">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Nombre *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={newScholarshipForm.name}
                                                        onChange={(e) => setNewScholarshipForm({ ...newScholarshipForm, name: e.target.value })}
                                                        className="input w-full"
                                                        placeholder="Nombre de la beca o ayuda"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Tipo *
                                                    </label>
                                                    <select
                                                        value={newScholarshipForm.type}
                                                        onChange={(e) => setNewScholarshipForm({
                                                            ...newScholarshipForm,
                                                            type: e.target.value as any
                                                        })}
                                                        className="input w-full"
                                                    >
                                                        <option value="scholarship">Beca</option>
                                                        <option value="grant">Subvención</option>
                                                        <option value="subsidy">Ayuda</option>
                                                        <option value="other">Otro</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Importe (opcional)
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            type="number"
                                                            value={newScholarshipForm.amount}
                                                            onChange={(e) => setNewScholarshipForm({ ...newScholarshipForm, amount: e.target.value })}
                                                            className="input w-full pr-8"
                                                            placeholder="0"
                                                            min="0"
                                                        />
                                                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">€</span>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-3">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                                            Fecha de inicio *
                                                        </label>
                                                        <input
                                                            type="date"
                                                            value={newScholarshipForm.startDate}
                                                            onChange={(e) => setNewScholarshipForm({ ...newScholarshipForm, startDate: e.target.value })}
                                                            className="input w-full"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                                            Fecha de fin (opcional)
                                                        </label>
                                                        <input
                                                            type="date"
                                                            value={newScholarshipForm.endDate}
                                                            onChange={(e) => setNewScholarshipForm({ ...newScholarshipForm, endDate: e.target.value })}
                                                            className="input w-full"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex gap-2 pt-2">
                                                    <button
                                                        onClick={handleAddScholarship}
                                                        className="btn-primary"
                                                        disabled={!newScholarshipForm.name || !newScholarshipForm.startDate}
                                                    >
                                                        Añadir
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setShowAddScholarship(false);
                                                            setNewScholarshipForm({ name: '', type: 'scholarship', amount: '', startDate: '', endDate: '' });
                                                        }}
                                                        className="btn-secondary"
                                                    >
                                                        Cancelar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {user.financial.scholarshipsAndAid.length === 0 ? (
                                        <div className="text-center py-12">
                                            <DollarSign size={48} className="mx-auto text-gray-300 mb-4" />
                                            <p className="text-gray-600">No has añadido ninguna beca o ayuda</p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Registra las becas y ayudas que recibes para un mejor seguimiento
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            {user.financial.scholarshipsAndAid.map(scholarship => (
                                                <ScholarshipCard
                                                    key={scholarship.id}
                                                    scholarship={scholarship}
                                                    onRemove={removeScholarship}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
