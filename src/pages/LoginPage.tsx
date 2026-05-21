import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            await login(username, password);
            navigate('/');
        } catch (err: any) {
            setError(err.message || 'Error al iniciar sesión');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4 mt-4">
            <div className="glass-card max-w-md w-full p-8 space-y-6 animate-fadeIn">
                <div className="text-center">
                    <h2 className="text-2xl font-black text-white tracking-tight">Iniciar Sesión</h2>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm font-medium animate-shake">
                            {error}
                        </div>
                    )}

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-400 mb-2 ml-1">Usuario</label>
                            <input
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="glass-input w-full px-5 py-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-500/50 transition-all"
                                placeholder="Tu nombre de usuario"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-400 mb-2 ml-1">Contraseña</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="glass-input w-full px-5 py-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-500/50 transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-black rounded-2xl text-[#050b1a] bg-gradient-to-r from-emerald-400 to-cyan-500 hover:from-emerald-300 hover:to-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300 shadow-lg shadow-emerald-500/30 disabled:opacity-50"
                    >
                        {isLoading ? (
                            <svg className="animate-spin h-5 w-5 text-[#050b1a]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                            'INGRESAR'
                        )}
                    </button>
                </form>

                <div className="pt-4 flex flex-col gap-2">
                    <p className="text-center text-xs text-gray-500 font-medium mb-1">Cuentas de prueba rápida:</p>
                    <div className="flex gap-2 justify-center">
                        <button
                            type="button"
                            onClick={() => { setUsername('admin'); setPassword('admin123'); }}
                            className="px-4 py-2 text-xs font-bold rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-emerald-400 cursor-pointer"
                        >
                            Admin
                        </button>
                        <button
                            type="button"
                            onClick={() => { setUsername('consulta'); setPassword('user123'); }}
                            className="px-4 py-2 text-xs font-bold rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-cyan-400 cursor-pointer"
                        >
                            Consulta
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
