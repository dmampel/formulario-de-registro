import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
    children: JSX.Element;
    rol?: 'ADMIN' | 'CONSULTA';
}

const PrivateRoute = ({ children, rol }: PrivateRouteProps) => {
    const { user, isAuthenticated } = useAuth();

    // Si no está autenticado, al login
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Si requiere un rol específico y no lo tiene, al listado
    if (rol && user?.rol !== rol) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default PrivateRoute;
