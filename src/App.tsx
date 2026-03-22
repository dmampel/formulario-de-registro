import { useState, useEffect } from 'react'
import type { Participant } from './types/types'
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';
import ParticipantCard from './components/ParticipantCard';

function App() {
  const [participants, setParticipants] = useState<Participant[]>(() => {
    const saved = localStorage.getItem('participants');
    return saved ? JSON.parse(saved) : [];
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [filterModality, setFilterModality] = useState('Todas');
  const [filterLevel, setFilterLevel] = useState('Todos');

  useEffect(() => {
    localStorage.setItem('participants', JSON.stringify(participants));
  }, [participants]);

  const addParticipant = (participant: Omit<Participant, 'id'>) => {
    const newParticipant = {
      ...participant,
      id: Date.now(),
    };
    setParticipants([...participants, newParticipant]);
  };

  const deleteParticipant = (id: number) => {
    setParticipants(participants.filter(p => p.id !== id));
  };

  const filteredParticipants = participants.filter(p => {
    const matchesSearch = p.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesModality = filterModality === 'Todas' || p.modalidad === filterModality;
    const matchesLevel = filterLevel === 'Todos' || p.nivel === filterLevel;
    return matchesSearch && matchesModality && matchesLevel;
  });

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      {/* Header Section */}
      <Header participants={participants.length} />

      <main className="space-y-16">
        {/* Registration Form */}
        <div className="glass-card p-10">
          <RegistrationForm onAdd={addParticipant} />
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
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Filtrar por modalidad</label>
                <select 
                  className="glass-input w-full appearance-none cursor-pointer"
                  value={filterModality}
                  onChange={(e) => setFilterModality(e.target.value)}
                >
                  <option className="bg-[#050b1a]">Todas</option>
                  <option className="bg-[#050b1a]">Presencial</option>
                  <option className="bg-[#050b1a]">Virtual</option>
                  <option className="bg-[#050b1a]">Híbrido</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Filtrar por nivel</label>
                <select 
                  className="glass-input w-full appearance-none cursor-pointer"
                  value={filterLevel}
                  onChange={(e) => setFilterLevel(e.target.value)}
                >
                  <option className="bg-[#050b1a]">Todos</option>
                  <option className="bg-[#050b1a]">Principiante</option>
                  <option className="bg-[#050b1a]">Intermedio</option>
                  <option className="bg-[#050b1a]">Avanzado</option>
                </select>
              </div>
            </div>
          </div>

          {/* List */}  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredParticipants.map(participant => (
              <ParticipantCard 
                key={participant.id} 
                participant={participant} 
                onDelete={deleteParticipant} 
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
