export default function Filter({label, content, filter, setFilter}: {label: string, content: string[], filter: string, setFilter: (value: string) => void}) {
    return (
        <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">{label}</label>
            <select
                className="glass-input w-full appearance-none cursor-pointer"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            >
                {content.map(c => (
                    <option key={c} value={c} className="bg-[#050b1a]">{c}</option>
                ))}
            </select>
        </div>
    )
}
