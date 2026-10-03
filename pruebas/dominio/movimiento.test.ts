import { describe, expect, it } from 'vitest';
import type { Movimiento } from '../../src/dominio/movimientos/movimiento';
import {
  consumirUsoMovimiento,
  crearMovimientoEnPartida,
  tieneUsosDisponibles,
} from '../../src/dominio/movimientos/movimiento';

const movimientoLimitado: Movimiento = {
  id: 'prueba-limitado',
  nombre: 'Movimiento limitado',
  descripcion: 'Movimiento limitado usado para pruebas.',
  rareza: 'COMUN',
  tipo: 'BRASA',
  categoria: 'OFENSIVO',
  procedencia: 'PROPIO',
  costeEnergia: 4,
  danioBase: 7,
  usosMaximos: 3,
  objetivo: 'RIVAL_ACTIVO',
  esContacto: false,
};

const movimientoIlimitado: Movimiento = {
  ...movimientoLimitado,
  id: 'prueba-ilimitado',
  nombre: 'Movimiento ilimitado',
  descripcion: 'Movimiento ilimitado usado para pruebas.',
  costeEnergia: 1,
  danioBase: 4,
  usosMaximos: null,
};

describe('MovimientoEnPartida', () => {
  it('inicia un movimiento limitado con todos sus usos', () => {
    expect(crearMovimientoEnPartida(movimientoLimitado).usosRestantes).toBe(3);
  });

  it('representa un movimiento ilimitado con usos nulos', () => {
    expect(crearMovimientoEnPartida(movimientoIlimitado).usosRestantes).toBeNull();
  });

  it('consume un uso sin modificar la definición permanente', () => {
    const inicial = crearMovimientoEnPartida(movimientoLimitado);
    const despues = consumirUsoMovimiento(inicial);

    expect(despues.usosRestantes).toBe(2);
    expect(inicial.usosRestantes).toBe(3);
    expect(movimientoLimitado.usosMaximos).toBe(3);
  });

  it('no consume usos de movimientos ilimitados', () => {
    const inicial = crearMovimientoEnPartida(movimientoIlimitado);
    expect(consumirUsoMovimiento(inicial)).toBe(inicial);
  });

  it('detecta cuando un movimiento limitado ya no puede usarse', () => {
    const agotado = {
      ...crearMovimientoEnPartida(movimientoLimitado),
      usosRestantes: 0,
    };

    expect(tieneUsosDisponibles(agotado)).toBe(false);
    expect(() => consumirUsoMovimiento(agotado)).toThrow();
  });
});
