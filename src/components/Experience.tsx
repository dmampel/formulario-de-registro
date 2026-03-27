export default function Experience({formData, setFormData}: {formData: any, setFormData: (data: any) => void}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Nivel de experiencia</label>
                <select
                    className="glass-input w-full appearance-none cursor-pointer"
                    value={formData.nivel}
                    onChange={e => setFormData({ ...formData, nivel: e.target.value })}
                >
                    {['Principiante', 'Intermedio', 'Avanzado'].map(n => (
                        <option key={n} value={n} className="bg-[#050b1a]">{n}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}