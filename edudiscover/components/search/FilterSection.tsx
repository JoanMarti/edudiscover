'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FilterSectionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export default function FilterSection({ title, children, defaultOpen = true }: FilterSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-gray-200 pb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full text-left mb-3 hover:text-primary-600 transition-colors"
            >
                <span className="text-sm font-semibold text-gray-900">{title}</span>
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {isOpen && <div className="space-y-2">{children}</div>}
        </div>
    );
}
