import { createContext, useState, useEffect, type ReactNode } from 'react';
import type { Participant } from '../types/types';

interface ContextType {
  participantes: Participant[];
  agregar: (p: Omit<Participant, 'id'>) => void;
  eliminar: (id: number) => void;
  resetear: () => void;
}

export const ParticipantesContext = createContext<ContextType | undefined>(undefined);

const API_URL = 'http://localhost:3000/participantes';

export function ParticipantesProvider({ children }: { children: ReactNode }) {
  const [participantes, setParticipantes] = useState<Participant[]>([]);

  // Cargar participantes iniciales desde la BD
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setParticipantes(data))
      .catch((err) => console.error('Error fetching participants:', err));
  }, []);

  const agregar = async (p: Omit<Participant, 'id'>) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(p),
      });
      if (response.ok) {
        const newParticipant = await response.json();
        setParticipantes((prev) => [...prev, newParticipant]);
      } else {
        const errorData = await response.json();
        alert(`Error al guardar: ${errorData.error || 'Error desconocido'}`);
      }
    } catch (error) {
      console.error('Error adding participant:', error);
      alert('Error de conexión con el servidor.');
    }
  };

  const eliminar = async (id: number) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setParticipantes((prev) => prev.filter((p) => p.id !== id));
      }
    } catch (error) {
      console.error('Error deleting participant:', error);
    }
  };

  const resetear = async () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar todos los datos de la base de datos? Esta acción no se puede deshacer.')) {
      try {
        const response = await fetch(API_URL, {
          method: 'DELETE',
        });
        if (response.ok) {
          setParticipantes([]);
        }
      } catch (error) {
        console.error('Error resetting participants:', error);
      }
    }
  };

  return (
    <ParticipantesContext.Provider value={{ participantes, agregar, eliminar, resetear }}>
      {children}
    </ParticipantesContext.Provider>
  );
}
