import { useNavigate } from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm";

const FormularioPage = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <button 
                    onClick={() => navigate('/lista')}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                </button>
                <h2 className="text-2xl font-bold text-white/90">Registro de Participante</h2>
            </div>

            <div className="glass-card p-10">
                <RegistrationForm onSuccess={() => navigate('/lista')} />
            </div>
        </div>
    );
};

export default FormularioPage;
