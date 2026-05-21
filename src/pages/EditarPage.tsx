import { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm";
import { ParticipantesContext } from "../context/ParticipantesContext";

const EditarPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const context = useContext(ParticipantesContext);

    if (!context) return null;
    const { state, dispatch } = context;
    const { participantes } = state;

    useEffect(() => {
        const participant = participantes.find(p => p.id === Number(id));
        if (participant) {
            dispatch({ type: 'SELECT_PARTICIPANTE', payload: participant });
        } else {
            // Si no se encuentra, volvemos al listado o manejamos el error
            // Podríamos mostrar un mensaje, pero por ahora volvemos
            // navigate('/');
        }

        // Cleanup: Deseleccionar al salir de la página
        return () => {
            dispatch({ type: 'SELECT_PARTICIPANTE', payload: null });
        };
    }, [id, participantes, dispatch]);

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <button 
                    onClick={() => navigate('/lista')}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                </button>
                <h2 className="text-2xl font-bold text-white/90">Editar Participante</h2>
            </div>

            <div className="glass-card p-10">
                <RegistrationForm onSuccess={() => navigate('/lista')} />
            </div>
        </div>
    );
};

export default EditarPage;
