import { describe, expect, it } from 'vitest';
import {
  KAKIK,
  RECADO_ARDIENTE,
  SAZON_INCANDESCENTE,
} from '../../src/datos/guatemala/cartas/kakik';

describe("Kak'ik", () => {
  it('conserva los datos confirmados de la carta', () => {
    expect(KAKIK.nombre).toBe("Kak'ik");
    expect(KAKIK.tipoPrincipal).toBe('BRASA');
    expect(KAKIK.rareza).toBe('COMUN');
    expect(KAKIK.vidaMaxima).toBe(20);
    expect(KAKIK.movimientosPropios).toHaveLength(2);
  });

  it('define Recado Ardiente correctamente', () => {
    expect(RECADO_ARDIENTE.rareza).toBe('COMUN');
    expect(RECADO_ARDIENTE.danioBase).toBe(3);
    expect(RECADO_ARDIENTE.costeEnergia).toBe(2);
    expect(RECADO_ARDIENTE.usosMaximos).toBeNull();
  });

  it('define Sazón Incandescente y su Quemadura garantizada', () => {
    expect(SAZON_INCANDESCENTE.rareza).toBe('SUPERRARA');
    expect(SAZON_INCANDESCENTE.danioBase).toBe(8);
    expect(SAZON_INCANDESCENTE.costeEnergia).toBe(6);
    expect(SAZON_INCANDESCENTE.usosMaximos).toBe(2);

    const quemadura = SAZON_INCANDESCENTE.estadosQuePuedeAplicar?.[0];
    expect(quemadura?.estadoId).toBe('quemadura');
    expect(quemadura?.probabilidadPorcentaje).toBe(100);
    expect(quemadura?.duracionTurnos).toBe(3);
    expect(quemadura?.intensidad).toBe(1);
  });
});
