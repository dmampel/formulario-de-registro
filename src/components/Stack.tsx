export default function Stack({formData, handleTechChange, techOptions}: {formData: any, handleTechChange: (tech: string) => void, techOptions: string[]}) {
  return (
    <div className="space-y-4">
      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
        Tecnologías Conocidas
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {techOptions.map((tech) => (
          <label
            key={tech}
            className={`flex items-center gap-3 px-5 py-3 rounded-xl border cursor-pointer transition-all ${
              formData.tecnologias.includes(tech)
                ? "bg-white/10 border-white/30 text-white"
                : "bg-white/5 border-white/10 text-gray-500 hover:bg-white/10"
            }`}
          >
            <div
              className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                formData.tecnologias.includes(tech)
                  ? "bg-emerald-500 border-emerald-400"
                  : "border-gray-600"
              }`}
            >
              {formData.tecnologias.includes(tech) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </div>
            <span className="text-sm font-medium">{tech}</span>
            <input
              type="checkbox"
              className="hidden"
              checked={formData.tecnologias.includes(tech)}
              onChange={() => handleTechChange(tech)}
            />
          </label>
        ))}
      </div>
    </div>
  );
}
