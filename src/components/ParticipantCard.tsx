import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import type { Participant } from "../models/Participante";
import { COUNTRY_FLAGS } from "../models/Participante";
import { ParticipantesContext } from "../context/ParticipantesContext";

export default function ParticipantCard({ participant }: { participant: Participant }) {
    const navigate = useNavigate();
    const context = useContext(ParticipantesContext);
    if (!context) return null;
    const { eliminar } = context;

    const getStyle = (level: string) => {
        switch (level) {
            case 'Principiante': return { color: 'text-emerald-400', glow: 'glow-emerald', avatar: 'bg-emerald-500 text-emerald-950' };
            case 'Intermedio': return { color: 'text-amber-400', glow: 'glow-orange', avatar: 'bg-amber-400 text-amber-950' };
            case 'Avanzado': return { color: 'text-pink-400', glow: 'glow-magenta', avatar: 'bg-pink-500 text-pink-950' };
            default: return { color: 'text-white', glow: '', avatar: 'bg-gray-500 text-white' };
        }
    };

    const style = getStyle(participant.nivel);
    
    const formatName = (name: string) => {
        return name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    };

    const initials = participant.nombre.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

    return (
        <div className={`glass-card p-8 flex flex-col h-full hover:bg-white/[0.08] transition-all group ${style.glow}`}>
            <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold ${style.avatar} shadow-lg ring-4 ring-white/5`}>
                    {initials}
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight">
                        {formatName(participant.nombre)}
                    </h3>
                    <p className={`text-sm font-bold flex items-center gap-1.5 ${style.color}`}>
                        <span className="opacity-70">{COUNTRY_FLAGS[participant.pais] || '📍'}</span>
                        {participant.pais}
                    </p>
                </div>
            </div>

            <div className="space-y-5 flex-grow">
                <div className="h-px bg-white/10 w-full mb-2"></div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-medium uppercase tracking-wider text-[10px]">Modalidad</span>
                    <span className="text-gray-300 font-semibold">{participant.modalidad}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-medium uppercase tracking-wider text-[10px]">Nivel</span>
                    <span className={`font-bold ${style.color}`}>{participant.nivel}</span>
                </div>
                <div className="space-y-3">
                    <span className="text-gray-500 font-medium uppercase tracking-wider text-[10px]">Tecnologías</span>
                    <div className="flex flex-wrap gap-2">
                        {participant.tecnologias.map(t => (
                            <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-gray-400 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 pt-6 flex gap-3">
                <button 
                  onClick={() => navigate(`/editar/${participant.id}`)} 
                  className="btn-edit flex-1 font-bold uppercase tracking-widest text-[11px]"
                >
                    Editar
                </button>
                <button 
                  onClick={() => eliminar(participant.id)} 
                  className="btn-delete flex-1 font-bold uppercase tracking-widest text-[11px]"
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}