import type { Tipo } from '../tipos/tipo';

export const CATEGORIAS_MOVIMIENTO = ['OFENSIVO', 'CURATIVO', 'INSTANTANEO'] as const;
export type CategoriaMovimiento = (typeof CATEGORIAS_MOVIMIENTO)[number];

export const PROCEDENCIAS_MOVIMIENTO = ['PROPIO', 'EQUIPABLE', 'MAESTRIA'] as const;
export type ProcedenciaMovimiento = (typeof PROCEDENCIAS_MOVIMIENTO)[number];

export const OBJETIVOS_MOVIMIENTO = [
  'RIVAL_ACTIVO',
  'PROPIA_CARTA',
  'ALIADO_VIVO',
  'CUALQUIER_CARTA_VIVA',
] as const;
export type ObjetivoMovimiento = (typeof OBJETIVOS_MOVIMIENTO)[number];

export const REGLAS_REAPLICACION = ['REINICIAR', 'ACUMULAR', 'IGNORAR'] as const;
export type ReglaReaplicacion = (typeof REGLAS_REAPLICACION)[number];

export interface AplicacionEstadoMovimiento {
  readonly estadoId: string;
  readonly probabilidadPorcentaje: number;
  readonly duracionTurnos?: number;
  readonly intensidad?: number;
  readonly reaplicacion?: ReglaReaplicacion;
}

export interface Movimiento {
  readonly id: string;
  readonly nombre: string;
  readonly tipo: Tipo;
  readonly categoria: CategoriaMovimiento;
  readonly procedencia: ProcedenciaMovimiento;
  readonly costeEnergia: number;
  readonly danioBase?: number;
  readonly curacionBase?: number;
  readonly usosMaximos: number | null;
  readonly objetivo: ObjetivoMovimiento;
  readonly esContacto: boolean;
  readonly estadosQuePuedeAplicar?: readonly AplicacionEstadoMovimiento[];
}

export interface MovimientoEnPartida {
  readonly movimiento: Movimiento;
  readonly usosRestantes: number | null;
  readonly modificadorDanioTemporal: number;
}

export function crearMovimientoEnPartida(movimiento: Movimiento): MovimientoEnPartida {
  return {
    movimiento,
    usosRestantes: movimiento.usosMaximos,
    modificadorDanioTemporal: 0,
  };
}

export function tieneUsosDisponibles(movimiento: MovimientoEnPartida): boolean {
  return movimiento.usosRestantes === null || movimiento.usosRestantes > 0;
}

export function consumirUsoMovimiento(movimiento: MovimientoEnPartida): MovimientoEnPartida {
  if (movimiento.usosRestantes === null) {
    return movimiento;
  }

  if (movimiento.usosRestantes <= 0) {
    throw new Error(`El movimiento ${movimiento.movimiento.nombre} no tiene usos restantes.`);
  }

  return {
    ...movimiento,
    usosRestantes: movimiento.usosRestantes - 1,
  };
}
