export const TIPOS = [
  'NORMAL',
  'BRASA',
  'MAREA',
  'RAIZ',
  'CHISPA',
  'ESCARCHA',
  'ROCA',
  'VENDAVAL',
  'ECLIPSE',
  'AURA',
  'METAL',
  'MENTE',
  'TOXINA',
  'DUNA',
  'IMPACTO',
  'ESPECTRO',
  'ENJAMBRE',
  'DRAGON',
] as const;

export type Tipo = (typeof TIPOS)[number];

export const RELACIONES_TIPO = ['VENTAJA', 'NEUTRAL', 'DESVENTAJA'] as const;

export type RelacionTipo = (typeof RELACIONES_TIPO)[number];

export const NOMBRES_TIPO: Record<Tipo, string> = {
  NORMAL: 'Normal',
  BRASA: 'Brasa',
  MAREA: 'Marea',
  RAIZ: 'Raíz',
  CHISPA: 'Chispa',
  ESCARCHA: 'Escarcha',
  ROCA: 'Roca',
  VENDAVAL: 'Vendaval',
  ECLIPSE: 'Eclipse',
  AURA: 'Aura',
  METAL: 'Metal',
  MENTE: 'Mente',
  TOXINA: 'Toxina',
  DUNA: 'Duna',
  IMPACTO: 'Impacto',
  ESPECTRO: 'Espectro',
  ENJAMBRE: 'Enjambre',
  DRAGON: 'Dragón',
};
