export default function Modality({formData, setFormData}: {formData: any, setFormData: (data: any) => void}) {
    return (
        <div className="space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Modalidad</label>
            <div className="flex flex-wrap gap-4">
                {['Presencial', 'Virtual', 'Híbrido'].map(mode => (
                    <label key={mode} className={`flex items-center gap-2 px-6 py-2.5 rounded-full border cursor-pointer transition-all ${formData.modalidad === mode
                            ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 ring-2 ring-emerald-500/20'
                            : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                        }`}>
                        <input type="radio" className="hidden" checked={formData.modalidad === mode} onChange={() => setFormData({ ...formData, modalidad: mode })} />
                        <div className={`w-3 h-3 rounded-full border ${formData.modalidad === mode ? 'bg-emerald-500 border-white/20' : 'bg-transparent border-gray-600'}`}></div>
                        <span className="text-sm font-medium">{mode}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}