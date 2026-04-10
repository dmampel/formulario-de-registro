import { useState, useContext } from 'react'
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';
import ParticipantCard from './components/ParticipantCard';
import { ParticipantesContext } from './context/ParticipantesContext';
import Filter from './components/Filter';

function App() {
  const context = useContext(ParticipantesContext);
  
  if (!context) return null;

  const { participantes, resetear } = context;

  const [searchTerm, setSearchTerm] = useState('');
  const [filterModality, setFilterModality] = useState('Todas');
  const [filterLevel, setFilterLevel] = useState('Todos');

  const filteredParticipants = participantes.filter(p => {
    const matchesSearch = p.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesModality = filterModality === 'Todas' || p.modalidad === filterModality;
    const matchesLevel = filterLevel === 'Todos' || p.nivel === filterLevel;
    return matchesSearch && matchesModality && matchesLevel;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setFilterModality('Todas');
    setFilterLevel('Todos');
  };

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      {/* Header Section */}
      <Header participants={participantes.length} />

      <main className="space-y-16">
        {/* Registration Form */}
        <div className="glass-card p-10">
          <RegistrationForm />
        </div>

      
        <div className="space-y-8">

          {/* Filters */}
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Buscar por nombre</label>
                <input 
                  type="text" 
                  placeholder="Nombre..."
                  className="glass-input w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Filter label="Filtrar por modalidad" content={['Todas','Presencial', 'Virtual', 'Híbrido']} filter={filterModality} setFilter={setFilterModality} />
              <Filter label="Filtrar por nivel" content={['Todos','Principiante', 'Intermedio', 'Avanzado']} filter={filterLevel} setFilter={setFilterLevel} />
            </div>
            <div className="mt-8 flex justify-end gap-4">
              <button 
                onClick={clearFilters}
                className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all duration-300 cursor-pointer"
              >
                Limpiar filtros
              </button>
              <button 
                onClick={resetear}
                className="px-6 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 text-sm font-medium transition-all duration-300 cursor-pointer"
              >
                Resetear datos
              </button>
            </div>
          </div>

          {/* List */}  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredParticipants.map(participant => (
              <ParticipantCard 
                key={participant.id} 
                participant={participant} 
              />
            ))}
          </div>
          
          {filteredParticipants.length === 0 && (
            <div className="text-center py-20 glass-card bg-white/2">
              <p className="text-gray-500 text-lg font-medium italic">No se encontraron participantes.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}





export default App
