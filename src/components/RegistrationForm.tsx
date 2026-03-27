import { useState } from "react";
import type { Participant } from "../types/types";
import Stack from "./Stack";
import Modality from "./Modality";
import Experience from "./Experience";
import { techOptions } from "../types/types";

export default function RegistrationForm({ onAdd }: { onAdd: (p: Omit<Participant, 'id'>) => void }) {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        edad: '',
        pais: 'Argentina',
        modalidad: 'Presencial',
        tecnologias: [] as string[],
        nivel: 'Principiante',
        aceptaTerminos: false
    });

    const formatName = (name: string) => {
        return name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.aceptaTerminos) return;
        onAdd({
            ...formData,
            nombre: formatName(formData.nombre),
            edad: Number(formData.edad),
            tecnologias: [...formData.tecnologias]
        });
        setFormData({
            nombre: '', email: '', edad: '', pais: 'Argentina',
            modalidad: 'Presencial', tecnologias: [], nivel: 'Principiante', aceptaTerminos: false
        });
    };

    const handleTechChange = (tech: string) => {
        setFormData(prev => ({
            ...prev,
            tecnologias: prev.tecnologias.includes(tech)
                ? prev.tecnologias.filter(t => t !== tech)
                : [...prev.tecnologias, tech]
        }));
    };


    return (
        <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Nombre</label>
                    <input
                        required
                        type="text"
                        placeholder="Tu nombre completo"
                        className="glass-input w-full"
                        value={formData.nombre}
                        onChange={e => setFormData({ ...formData, nombre: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                    <input
                        required
                        type="email"
                        placeholder="correo@ejemplo.com"
                        className="glass-input w-full"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Edad</label>
                    <input
                        required
                        type="number"
                        placeholder="25"
                        className="glass-input w-full"
                        value={formData.edad}
                        onChange={e => setFormData({ ...formData, edad: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">País</label>
                    <select
                        className="glass-input w-full appearance-none"
                        value={formData.pais}
                        onChange={e => setFormData({ ...formData, pais: e.target.value })}
                    >
                        {['Argentina', 'Chile', 'Uruguay', 'México', 'España'].map(c => (
                            <option key={c} value={c} className="bg-[#050b1a]">{c}</option>
                        ))}
                    </select>
                </div>
            </div>

            <Modality formData={formData} setFormData={setFormData} />

            <Stack formData={formData} handleTechChange={handleTechChange} techOptions={techOptions} />

            <Experience formData={formData} setFormData={setFormData} />

            <div className="pt-4">
                <label className="flex items-center gap-3 glass-card bg-transparent border-white/5 p-4 cursor-pointer group hover:bg-white/[0.02] transition-all">
                    <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${formData.aceptaTerminos ? 'bg-emerald-500 border-emerald-400 shadow-[0_0_15px_-3px_rgba(16,185,129,0.5)]' : 'border-white/20 group-hover:border-white/40'
                        }`}>
                        {formData.aceptaTerminos && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        )}
                    </div>
                    <span className="text-sm font-medium text-gray-400 group-hover:text-gray-300">Acepto los términos y condiciones del evento</span>
                    <input type="checkbox" className="hidden" required checked={formData.aceptaTerminos} onChange={e => setFormData({ ...formData, aceptaTerminos: e.target.checked })} />
                </label>
            </div>

            <button type="submit" className="btn-gradient w-auto min-w-[240px] text-lg py-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Registrar Participante
            </button>
        </form>
    );
}