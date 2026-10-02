import { describe, expect, it } from 'vitest';
import { TIPOS, type RelacionTipo } from '../../src/dominio/tipos/tipo';
import { calcularDanioFinal } from '../../src/motor/reglas/danio';
import { calcularEfectividad, obtenerRelacion } from '../../src/motor/reglas/tablaTipos';

function relacionInversa(relacion: RelacionTipo): RelacionTipo {
  if (relacion === 'VENTAJA') return 'DESVENTAJA';
  if (relacion === 'DESVENTAJA') return 'VENTAJA';
  return 'NEUTRAL';
}

describe('TablaTipos', () => {
  it('contiene exactamente los 18 tipos oficiales sin duplicados', () => {
    expect(TIPOS).toHaveLength(18);
    expect(new Set(TIPOS).size).toBe(18);
  });

  it('mantiene simetría entre tipos distintos', () => {
    for (const atacante of TIPOS) {
      for (const defensor of TIPOS) {
        if (atacante === defensor) continue;

        const ida = obtenerRelacion(atacante, defensor);
        const vuelta = obtenerRelacion(defensor, atacante);

        expect(vuelta).toBe(relacionInversa(ida));
      }
    }
  });

  it.each(['ECLIPSE', 'MENTE', 'ESPECTRO', 'ENJAMBRE', 'DRAGON'] as const)(
    '%s tiene ventaja ofensiva contra sí mismo',
    (tipo) => {
      expect(obtenerRelacion(tipo, tipo)).toBe('VENTAJA');
    },
  );

  it('Normal contra Normal es neutral', () => {
    expect(obtenerRelacion('NORMAL', 'NORMAL')).toBe('NEUTRAL');
  });

  it('doble neutral provoca fallo automático', () => {
    expect(calcularEfectividad('MAREA', 'AURA', 'MENTE')).toEqual({
      multiplicador: 0,
      fallaAutomaticamente: true,
    });
  });

  it('ventaja y desventaja se cancelan a x1', () => {
    expect(calcularEfectividad('BRASA', 'RAIZ', 'MAREA')).toEqual({
      multiplicador: 1,
      fallaAutomaticamente: false,
    });
  });

  it('doble ventaja aplica x2', () => {
    expect(calcularEfectividad('BRASA', 'RAIZ', 'ESCARCHA')).toEqual({
      multiplicador: 2,
      fallaAutomaticamente: false,
    });
  });

  it('redondea .5 hacia arriba', () => {
    const efectividad = calcularEfectividad('BRASA', 'RAIZ');
    expect(calcularDanioFinal(5, efectividad)).toBe(8);
  });
});
