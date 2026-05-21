import { useState, useContext, useEffect, useId, useRef } from "react";
import { ParticipantesContext } from "../context/ParticipantesContext";
import { useToast } from "../context/ToastContext";
import Stack from "./Stack";
import Modality from "./Modality";
import Experience from "./Experience";
import { techOptions } from "../models/Participante";

export default function RegistrationForm({ onSuccess }: { onSuccess?: () => void }) {
    const { addToast } = useToast();
    const context = useContext(ParticipantesContext);
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
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    if (!context) return null;
    const { state, agregar, editar, dispatch } = context;
    const { selectedParticipant } = state;
    const baseId = useId();
    const nombreRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        nombreRef.current?.focus();
    }, []);

    useEffect(() => {
        if (selectedParticipant) {
            setFormData({
                nombre: selectedParticipant.nombre,
                email: selectedParticipant.email,
                edad: String(selectedParticipant.edad),
                pais: selectedParticipant.pais,
                modalidad: selectedParticipant.modalidad,
                tecnologias: selectedParticipant.tecnologias,
                nivel: selectedParticipant.nivel,
                aceptaTerminos: selectedParticipant.aceptaTerminos
            });
            setErrors({});
        } else {
            setFormData({
                nombre: '', email: '', edad: '', pais: 'Argentina',
                modalidad: 'Presencial', tecnologias: [], nivel: 'Principiante', aceptaTerminos: false
            });
            setErrors({});
        }
    }, [selectedParticipant]);

    const formatName = (name: string) => {
        return name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
        if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) newErrors.email = "Email inválido";
        const edadNum = Number(formData.edad);
        if (!formData.edad || edadNum < 13 || edadNum > 100) newErrors.edad = "Edad inválida (13-100 años)";
        if (formData.tecnologias.length === 0) newErrors.tecnologias = "Elegí al menos una tecnología";
        if (!formData.aceptaTerminos) newErrors.aceptaTerminos = "Debés aceptar los términos para continuar";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        const data = {
            ...formData,
            nombre: formatName(formData.nombre),
            edad: Number(formData.edad),
            tecnologias: [...formData.tecnologias]
        };

        if (selectedParticipant) {
            await editar({ ...data, id: selectedParticipant.id });
            addToast(`Participante actualizado correctamente`, 'success');
        } else {
            await agregar(data);
            addToast(`Participante registrado correctamente`, 'success');
        }

        dispatch({ type: 'SELECT_PARTICIPANTE', payload: null });
        
        if (onSuccess) {
            onSuccess();
        }
    };

    const handleTechChange = (tech: string) => {
        const newTechs = formData.tecnologias.includes(tech)
            ? formData.tecnologias.filter(t => t !== tech)
            : [...formData.tecnologias, tech];
        
        setFormData(prev => ({ ...prev, tecnologias: newTechs }));
        if (newTechs.length > 0) setErrors(prev => ({ ...prev, tecnologias: '' }));
    };

    const ErrorMsg = ({ name }: { name: string }) => (
        errors[name] ? <span className="text-red-400 text-[11px] font-medium mt-1 animate-pulse">{errors[name]}</span> : null
    );

    return (
        <form onSubmit={handleSubmit} className="space-y-10" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <div className="flex flex-col">
                    <label htmlFor={`${baseId}-nombre`} className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Nombre</label>
                    <input
                        id={`${baseId}-nombre`}
                        ref={nombreRef}
                        type="text"
                        placeholder="Tu nombre completo"
                        className={`glass-input w-full ${errors.nombre ? 'border-red-500/50 bg-red-500/5' : ''}`}
                        value={formData.nombre}
                        onChange={e => {
                            setFormData({ ...formData, nombre: e.target.value });
                            if (errors.nombre) setErrors({ ...errors, nombre: '' });
                        }}
                    />
                    <ErrorMsg name="nombre" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor={`${baseId}-email`} className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                    <input
                        id={`${baseId}-email`}
                        type="email"
                        placeholder="correo@ejemplo.com"
                        className={`glass-input w-full ${errors.email ? 'border-red-500/50 bg-red-500/5' : ''}`}
                        value={formData.email}
                        onChange={e => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                    />
                    <ErrorMsg name="email" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor={`${baseId}-edad`} className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Edad</label>
                    <input
                        id={`${baseId}-edad`}
                        type="number"
                        placeholder="25"
                        className={`glass-input w-full ${errors.edad ? 'border-red-500/50 bg-red-500/5' : ''}`}
                        value={formData.edad}
                        onChange={e => {
                            setFormData({ ...formData, edad: e.target.value });
                            if (errors.edad) setErrors({ ...errors, edad: '' });
                        }}
                    />
                    <ErrorMsg name="edad" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor={`${baseId}-pais`} className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">País</label>
                    <select
                        id={`${baseId}-pais`}
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

            <div className="flex flex-col gap-2">
                <Modality formData={formData} setFormData={setFormData} />
            </div>

            <div className="flex flex-col gap-2">
                <Stack formData={formData} handleTechChange={handleTechChange} techOptions={techOptions} />
                <ErrorMsg name="tecnologias" />
            </div>

            <div className="flex flex-col gap-2">
                <Experience formData={formData} setFormData={setFormData} />
            </div>

            <div className="pt-4 flex flex-col gap-2">
                <label htmlFor={`${baseId}-terminos`} className={`flex items-center gap-3 glass-card bg-transparent p-4 cursor-pointer group hover:bg-white/[0.02] transition-all ${errors.aceptaTerminos ? 'border-red-500/30 bg-red-500/5' : 'border-white/5'}`}>
                    <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${formData.aceptaTerminos ? 'bg-emerald-500 border-emerald-400 shadow-[0_0_15px_-3px_rgba(16,185,129,0.5)]' : 'border-white/20 group-hover:border-white/40'
                        }`}>
                        {formData.aceptaTerminos && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        )}
                    </div>
                    <span className="text-sm font-medium text-gray-400 group-hover:text-gray-300">Acepto los términos y condiciones del evento</span>
                    <input id={`${baseId}-terminos`} type="checkbox" className="hidden" checked={formData.aceptaTerminos} onChange={e => {
                        setFormData({ ...formData, aceptaTerminos: e.target.checked });
                        if (errors.aceptaTerminos) setErrors({ ...errors, aceptaTerminos: '' });
                    }} />
                </label>
                <ErrorMsg name="aceptaTerminos" />
            </div>

            <button type="submit" className="btn-gradient w-auto min-w-[240px] text-lg py-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {selectedParticipant ? (
                        <path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16" />
                    ) : (
                        <polyline points="20 6 9 17 4 12"></polyline>
                    )}
                </svg>
                {selectedParticipant ? 'Actualizar Participante' : 'Registrar Participante'}
            </button>
        </form>
    );
}