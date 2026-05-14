import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Listado', path: '/' },
        { name: 'Nuevo Participante', path: '/nuevo' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 w-full z-50 glass-card !rounded-none border-t-0 border-x-0 bg-[#050b1a]/80 backdrop-blur-xl">
            <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <span className="text-[#050b1a] font-black text-xl tracking-tighter">G</span>
                    </div>
                    <span className="text-white font-bold tracking-tight hidden sm:block group-hover:text-emerald-400 transition-colors duration-300">
                        Gentleman <span className="text-emerald-500/50 group-hover:text-emerald-500 transition-colors duration-300">Eventos</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ease-in-out border ${
                                isActive(link.path)
                                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_15px_-5px_rgba(16,185,129,0.3)]'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5 border-transparent'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Burger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                    >
                        {isOpen ? (
                            <path d="M18 6L6 18M6 6l12 12" />
                        ) : (
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-16 left-0 w-full glass-card !rounded-none border-x-0 bg-[#050b1a]/95 backdrop-blur-2xl transition-[max-height,border-color] duration-500 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-64 border-b border-white/10' : 'max-h-0 border-b-transparent'
                }`}
            >
                <div className="flex flex-col p-4 gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-300 border ${
                                isActive(link.path)
                                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5 border-transparent'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
