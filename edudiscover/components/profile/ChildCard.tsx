'use client';

import { useState } from 'react';
import { Edit2, Trash2, Save, X } from 'lucide-react';
import { Child } from '@/lib/contexts/AuthContext';

interface ChildCardProps {
    child: Child;
    onUpdate: (childId: string, updates: Partial<Child>) => void;
    onRemove: (childId: string) => void;
}

export default function ChildCard({ child, onUpdate, onRemove }: ChildCardProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: child.name,
        birthDate: child.birthDate,
        currentSchool: child.currentSchool || '',
        grade: child.grade || '',
    });

    const handleSave = () => {
        onUpdate(child.id, formData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData({
            name: child.name,
            birthDate: child.birthDate,
            currentSchool: child.currentSchool || '',
            grade: child.grade || '',
        });
        setIsEditing(false);
    };

    const calculateAge = (birthDate: string) => {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    };

    return (
        <div className="card p-4 hover:shadow-md transition-shadow">
            {isEditing ? (
                <div className="space-y-3">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nombre
                        </label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="input w-full"
                            placeholder="Nombre del hijo/a"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Fecha de nacimiento
                        </label>
                        <input
                            type="date"
                            value={formData.birthDate}
                            onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                            className="input w-full"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Colegio actual (opcional)
                        </label>
                        <input
                            type="text"
                            value={formData.currentSchool}
                            onChange={(e) => setFormData({ ...formData, currentSchool: e.target.value })}
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
                            value={formData.grade}
                            onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                            className="input w-full"
                            placeholder="Ej: 3º Primaria"
                        />
                    </div>

                    <div className="flex gap-2 pt-2">
                        <button
                            onClick={handleSave}
                            className="btn-primary flex items-center gap-2"
                        >
                            <Save size={16} />
                            Guardar
                        </button>
                        <button
                            onClick={handleCancel}
                            className="btn-secondary flex items-center gap-2"
                        >
                            <X size={16} />
                            Cancelar
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <h4 className="font-semibold text-lg">{child.name}</h4>
                            <p className="text-sm text-gray-600">
                                {calculateAge(child.birthDate)} años
                                {child.birthDate && (
                                    <span className="text-gray-400 ml-1">
                                        ({new Date(child.birthDate).toLocaleDateString('es-ES')})
                                    </span>
                                )}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setIsEditing(true)}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                title="Editar"
                            >
                                <Edit2 size={16} className="text-gray-600" />
                            </button>
                            <button
                                onClick={() => {
                                    if (confirm(`¿Eliminar a ${child.name}?`)) {
                                        onRemove(child.id);
                                    }
                                }}
                                className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                                title="Eliminar"
                            >
                                <Trash2 size={16} className="text-red-600" />
                            </button>
                        </div>
                    </div>

                    {(child.currentSchool || child.grade) && (
                        <div className="space-y-1 text-sm">
                            {child.currentSchool && (
                                <p className="text-gray-700">
                                    <span className="font-medium">Colegio:</span> {child.currentSchool}
                                </p>
                            )}
                            {child.grade && (
                                <p className="text-gray-700">
                                    <span className="font-medium">Curso:</span> {child.grade}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
