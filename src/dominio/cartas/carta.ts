import type { EstadoAplicado } from '../estados/estado';
import type { Movimiento, MovimientoEnPartida } from '../movimientos/movimiento';
import { crearMovimientoEnPartida } from '../movimientos/movimiento';
import type { Tipo } from '../tipos/tipo';

export const RAREZAS_CARTA = [
  'COMUN',
  'RARA',
  'SUPERRARA',
  'EPICA',
  'MITICA',
  'LEGENDARIA',
  'ESTELAR',
] as const;

export type RarezaCarta = (typeof RAREZAS_CARTA)[number];

export interface HabilidadPasiva {
  readonly id: string;
  readonly nombre: string;
  readonly descripcion: string;
}

export interface CartaBase {
  readonly id: string;
  readonly codigo: string;
  readonly nombre: string;
  readonly pais: string;
  readonly rareza: RarezaCarta;
  readonly vidaMaxima: number;
  readonly tipoPrincipal: Tipo;
  readonly tipoSecundario?: Tipo;
  readonly movimientosPropios: readonly Movimiento[];
  readonly habilidadPasiva?: HabilidadPasiva;
  readonly poderMaestria?: Movimiento;
}

export interface EfectoTemporalCarta {
  readonly id: string;
  readonly valor?: number;
  readonly fuenteId?: string;
}

export interface CartaEnPartida {
  readonly carta: CartaBase;
  readonly vidaActual: number;
  readonly movimientosActivos: readonly [MovimientoEnPartida, MovimientoEnPartida];
  readonly estadosActivos: readonly EstadoAplicado[];
  readonly efectosTemporales: readonly EfectoTemporalCarta[];
  readonly maestriaUsada: boolean;
}

export function crearCartaEnPartida(
  carta: CartaBase,
  movimientosSeleccionados: readonly [Movimiento, Movimiento],
): CartaEnPartida {
  return {
    carta,
    vidaActual: carta.vidaMaxima,
    movimientosActivos: [
      crearMovimientoEnPartida(movimientosSeleccionados[0]),
      crearMovimientoEnPartida(movimientosSeleccionados[1]),
    ],
    estadosActivos: [],
    efectosTemporales: [],
    maestriaUsada: false,
  };
}

export function estaDerrotada(carta: CartaEnPartida): boolean {
  return carta.vidaActual <= 0;
}

export function establecerVida(carta: CartaEnPartida, nuevaVida: number): CartaEnPartida {
  return {
    ...carta,
    vidaActual: Math.max(0, Math.min(nuevaVida, carta.carta.vidaMaxima)),
  };
}

export function modificarVida(carta: CartaEnPartida, cambio: number): CartaEnPartida {
  return establecerVida(carta, carta.vidaActual + cambio);
}
