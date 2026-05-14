import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PublicaPage = () => {
    const { isAuthenticated } = useAuth();

    return (
        <div className="flex flex-col items-center justify-center min-h-[85vh] text-center p-6 max-w-5xl mx-auto animate-fadeIn mt-4">
            {/* Icono de Impacto - Más sutil */}
            <div className="w-20 h-20 rounded-[1.75rem] bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center mx-auto mb-14 shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)] rotate-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#050b1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>

            {/* Texto Principal - Escala reducida para elegancia */}
            <h1 className="text-5xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-[1.1]">
                Gentleman <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    Eventos 2026
                </span>
            </h1>

            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-16 max-w-xl font-medium">
                La plataforma definitiva para la gestión de participantes en eventos de alta tecnología. 
                <span className="text-gray-400"> Acceso libre para información general.</span>
            </p>
            
            {/* Stats Sueltos - Más minimalistas */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-20 w-full max-w-2xl opacity-80">
                <div className="flex flex-col items-center">
                    <span className="text-white font-black text-3xl mb-1 tracking-tight">24</span>
                    <span className="text-emerald-500/40 text-[10px] uppercase font-black tracking-[0.3em]">Speakers</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-white font-black text-3xl mb-1 tracking-tight">500+</span>
                    <span className="text-cyan-500/40 text-[10px] uppercase font-black tracking-[0.3em]">Asistentes</span>
                </div>
                <div className="flex flex-col items-center col-span-2 md:col-span-1">
                    <span className="text-white font-black text-3xl mb-1 tracking-tight">3 Días</span>
                    <span className="text-emerald-500/40 text-[10px] uppercase font-black tracking-[0.3em]">Duración</span>
                </div>
            </div>

            {/* CTA Principal - Con más aire interno */}
            <Link 
                to={isAuthenticated ? "/lista" : "/login"}
                className="group relative inline-flex items-center gap-4 px-14 py-6 rounded-2xl text-sm font-black bg-white text-[#050b1a] hover:bg-emerald-400 transition-all duration-300 uppercase tracking-widest shadow-[0_30px_60px_-20px_rgba(255,255,255,0.15)]"
            >
                {isAuthenticated ? 'Explorar Participantes' : 'Ingresar al Sistema'}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </Link>

            <p className="mt-12 text-gray-700 text-[10px] font-black uppercase tracking-[0.4em]">
                UTN • Programación IV
            </p>
        </div>
    );
};

export default PublicaPage;
