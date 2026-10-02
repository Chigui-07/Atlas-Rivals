import { describe, expect, it } from 'vitest';
import type { CartaBase } from '../../src/dominio/cartas/carta';
import {
  crearCartaEnPartida,
  estaDerrotada,
  modificarVida,
} from '../../src/dominio/cartas/carta';
import type { Movimiento } from '../../src/dominio/movimientos/movimiento';

const movimientoBasico: Movimiento = {
  id: 'mov-basico',
  nombre: 'Movimiento básico',
  tipo: 'NORMAL',
  categoria: 'OFENSIVO',
  procedencia: 'PROPIO',
  costeEnergia: 1,
  danioBase: 4,
  usosMaximos: null,
  objetivo: 'RIVAL_ACTIVO',
  esContacto: false,
};

const movimientoLimitado: Movimiento = {
  ...movimientoBasico,
  id: 'mov-limitado',
  nombre: 'Movimiento limitado',
  costeEnergia: 4,
  danioBase: 7,
  usosMaximos: 3,
};

const cartaBase: CartaBase = {
  id: 'carta-prueba',
  codigo: 'GUA-TEST',
  nombre: 'Carta de prueba',
  pais: 'Guatemala',
  rareza: 'COMUN',
  vidaMaxima: 15,
  tipoPrincipal: 'BRASA',
  movimientosPropios: [movimientoBasico, movimientoLimitado],
};

describe('CartaEnPartida', () => {
  it('inicia con Vida máxima y sin estados temporales', () => {
    const carta = crearCartaEnPartida(cartaBase, [movimientoBasico, movimientoLimitado]);

    expect(carta.vidaActual).toBe(15);
    expect(carta.estadosActivos).toHaveLength(0);
    expect(carta.efectosTemporales).toHaveLength(0);
    expect(carta.maestriaUsada).toBe(false);
  });

  it('crea contadores independientes para los movimientos seleccionados', () => {
    const carta = crearCartaEnPartida(cartaBase, [movimientoBasico, movimientoLimitado]);

    expect(carta.movimientosActivos[0].usosRestantes).toBeNull();
    expect(carta.movimientosActivos[1].usosRestantes).toBe(3);
  });

  it('considera derrotada una carta con Vida cero', () => {
    const carta = crearCartaEnPartida(cartaBase, [movimientoBasico, movimientoLimitado]);
    const derrotada = modificarVida(carta, -15);

    expect(estaDerrotada(derrotada)).toBe(true);
  });

  it('no permite que la Vida baje de cero', () => {
    const carta = crearCartaEnPartida(cartaBase, [movimientoBasico, movimientoLimitado]);
    expect(modificarVida(carta, -99).vidaActual).toBe(0);
  });

  it('no permite curar por encima de la Vida máxima', () => {
    const carta = crearCartaEnPartida(cartaBase, [movimientoBasico, movimientoLimitado]);
    const herida = modificarVida(carta, -5);
    const curada = modificarVida(herida, 99);

    expect(curada.vidaActual).toBe(15);
  });
});
