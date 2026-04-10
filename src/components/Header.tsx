export default function Header({ participants }: { participants: number }) {
    return (
        <header className="space-y-6">
            <div className="flex items-center justify-center p-6 border-2 border-emerald-500/30 rounded-3xl bg-emerald-500/5 backdrop-blur-sm shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)]">
                <div className="flex items-center gap-4">
                    <h1 className="text-3xl font-bold tracking-tight text-white">Registro de Participantes</h1>
                </div>
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-2xl text-sm font-medium text-gray-400">
                Participantes registrados: <span className="ml-2 text-emerald-400">{participants}</span>
            </div>
        </header>
    )
}