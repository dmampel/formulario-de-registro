export interface Participant {
  id: number;
  nombre: string;
  email: string;
  edad: number;
  pais: string;
  modalidad: string;
  tecnologias: string[];
  nivel: string;
  aceptaTerminos: boolean;
}

export const COUNTRY_FLAGS: Record<string, string> = {
  'Argentina': '🇦🇷',
  'Chile': '🇨🇱',
  'Uruguay': '🇺🇾',
  'México': '🇲🇽',
  'España': '🇪🇸'
}

export const techOptions = ['React', 'Angular', 'Vue', 'Node', 'Python', 'Java'];
