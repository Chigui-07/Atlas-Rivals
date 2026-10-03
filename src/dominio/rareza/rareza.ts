export const RAREZAS = [
  'COMUN',
  'RARA',
  'SUPERRARA',
  'EPICA',
  'MITICA',
  'LEGENDARIA',
  'ESTELAR',
] as const;

export type Rareza = (typeof RAREZAS)[number];

export const NOMBRES_RAREZA: Record<Rareza, string> = {
  COMUN: 'Común',
  RARA: 'Rara',
  SUPERRARA: 'Superrara',
  EPICA: 'Épica',
  MITICA: 'Mítica',
  LEGENDARIA: 'Legendaria',
  ESTELAR: 'Estelar',
};
