import type { Participant } from '../models/Participante';

export type Action =
  | { type: 'GET_PARTICIPANTES'; payload: Participant[] }
  | { type: 'AGREGAR'; payload: Participant }
  | { type: 'ELIMINAR'; payload: number }
  | { type: 'RESET' }
  | { type: 'EDITAR'; payload: Participant }
  | { type: 'SELECT_PARTICIPANTE'; payload: Participant | null }
  | { type: 'SET'; payload: Participant[] };

export interface State {
  participantes: Participant[];
  selectedParticipant: Participant | null;
}

export const initialState: State = {
  participantes: [],
  selectedParticipant: null,
};

export function participantesReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'GET_PARTICIPANTES':
    case 'SET':
      return { ...state, participantes: action.payload };

    case 'AGREGAR':
      return { ...state, participantes: [...state.participantes, action.payload] };

    case 'ELIMINAR':
      return { ...state, participantes: state.participantes.filter(p => p.id !== action.payload) };

    case 'SELECT_PARTICIPANTE':
      return { ...state, selectedParticipant: action.payload };

    case 'EDITAR':
      return {
        ...state,
        participantes: state.participantes.map(p => p.id === action.payload.id ? action.payload : p),
        selectedParticipant: null, // Limpiamos la selección después de editar
      };

    case 'RESET':
      return { ...state, participantes: [], selectedParticipant: null };

    default:
      return state;
  }
}
