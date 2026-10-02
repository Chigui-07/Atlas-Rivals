import type { ResultadoEfectividad } from './tablaTipos';

export function redondearDanio(valor: number): number {
  return Math.floor(valor + 0.5);
}

export function calcularDanioFinal(
  danioBase: number,
  efectividad: ResultadoEfectividad,
): number {
  if (danioBase < 0) {
    throw new Error('El daño base no puede ser negativo.');
  }

  if (efectividad.fallaAutomaticamente) {
    return 0;
  }

  return redondearDanio(danioBase * efectividad.multiplicador);
}
