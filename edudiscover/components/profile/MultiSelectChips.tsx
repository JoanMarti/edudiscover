'use client';

import { X } from 'lucide-react';

interface MultiSelectChipsProps {
    label: string;
    options: string[];
    selected: string[];
    onChange: (selected: string[]) => void;
    placeholder?: string;
}

export default function MultiSelectChips({
    label,
    options,
    selected,
    onChange,
    placeholder = 'Selecciona opciones...'
}: MultiSelectChipsProps) {
    const toggleOption = (option: string) => {
        if (selected.includes(option)) {
            onChange(selected.filter(item => item !== option));
        } else {
            onChange([...selected, option]);
        }
    };

    return (
        <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">{label}</label>

            {/* Selected chips */}
            {selected.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {selected.map(item => (
                        <div
                            key={item}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                        >
                            <span>{item}</span>
                            <button
                                type="button"
                                onClick={() => toggleOption(item)}
                                className="hover:bg-primary-200 rounded-full p-0.5 transition-colors"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Available options */}
            <div className="flex flex-wrap gap-2">
                {options.filter(opt => !selected.includes(opt)).map(option => (
                    <button
                        key={option}
                        type="button"
                        onClick={() => toggleOption(option)}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                        + {option}
                    </button>
                ))}
            </div>

            {selected.length === 0 && (
                <p className="text-sm text-gray-500">{placeholder}</p>
            )}
        </div>
    );
}
