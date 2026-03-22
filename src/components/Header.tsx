export default function Header({ participants }: { participants: number }) {
    return (
        <header className="space-y-6">
            <div className="flex items-center justify-center p-6 border-2 border-emerald-500/30 rounded-3xl bg-emerald-500/5 backdrop-blur-sm shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)]">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" /></svg>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-white">Registro de Participantes</h1>
                </div>
            </div>

            <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-2xl text-sm font-medium text-gray-400">
                Participantes registrados: <span className="ml-2 text-emerald-400">{participants}</span>
            </div>
        </header>
    )
}