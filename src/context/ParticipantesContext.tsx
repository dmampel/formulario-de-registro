import { createContext, useReducer, useEffect, type ReactNode } from 'react';
import type { Participant } from '../models/Participante';
import { participantesReducer, initialState, type Action, type State } from '../reducers/participantesReducer';
import { useAuth } from './AuthContext';

interface ContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
  agregar: (p: Omit<Participant, 'id'>) => Promise<void>;
  eliminar: (id: number) => Promise<void>;
  editar: (p: Participant) => Promise<void>;
  resetear: () => Promise<void>;
}

export const ParticipantesContext = createContext<ContextType | undefined>(undefined);

const API_URL = 'http://localhost:3000/participantes';

export function ParticipantesProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(participantesReducer, initialState);
  const { token } = useAuth();

  // Cargar participantes iniciales desde la BD
  useEffect(() => {
    if (!token) return;

    fetch(API_URL, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          dispatch({ type: 'SET', payload: data });
        }
      })
      .catch((err) => console.error('Error fetching participants:', err));
  }, [token]);

  const agregar = async (p: Omit<Participant, 'id'>) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(p),
      });
      if (response.ok) {
        const newParticipant = await response.json();
        dispatch({ type: 'AGREGAR', payload: newParticipant });
      } else {
        const errorData = await response.json();
        alert(`Error al guardar: ${errorData.error || 'Error desconocido'}`);
      }
    } catch (error) {
      console.error('Error adding participant:', error);
      alert('Error de conexión con el servidor.');
    }
  };

  const editar = async (p: Participant) => {
    try {
      const response = await fetch(`${API_URL}/${p.id}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(p),
      });
      if (response.ok) {
        const updatedParticipant = await response.json();
        dispatch({ type: 'EDITAR', payload: updatedParticipant });
      } else {
        const errorData = await response.json();
        alert(`Error al editar: ${errorData.error || 'Error desconocido'}`);
      }
    } catch (error) {
      console.error('Error editing participant:', error);
      alert('Error de conexión con el servidor.');
    }
  };

  const eliminar = async (id: number) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        dispatch({ type: 'ELIMINAR', payload: id });
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
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.ok) {
          dispatch({ type: 'RESET' });
        }
      } catch (error) {
        console.error('Error resetting participants:', error);
      }
    }
  };

  return (
    <ParticipantesContext.Provider value={{ state, dispatch, agregar, editar, eliminar, resetear }}>
      {children}
    </ParticipantesContext.Provider>
  );
}
