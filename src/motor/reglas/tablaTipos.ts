import type { RelacionTipo, Tipo } from '../../dominio/tipos/tipo';

const VENTAJAS: Record<Tipo, readonly Tipo[]> = {
  NORMAL: [],
  BRASA: ['NORMAL', 'RAIZ', 'ESCARCHA', 'METAL', 'IMPACTO', 'ENJAMBRE'],
  MAREA: ['NORMAL', 'BRASA', 'ROCA', 'METAL', 'DUNA', 'ENJAMBRE'],
  RAIZ: ['NORMAL', 'MAREA', 'ROCA', 'DUNA'],
  CHISPA: ['NORMAL', 'MAREA', 'ESCARCHA', 'VENDAVAL', 'IMPACTO'],
  ESCARCHA: ['NORMAL', 'MAREA', 'RAIZ', 'TOXINA', 'DUNA', 'ENJAMBRE', 'DRAGON'],
  ROCA: ['NORMAL', 'BRASA', 'CHISPA', 'VENDAVAL', 'METAL', 'IMPACTO', 'ENJAMBRE'],
  VENDAVAL: ['NORMAL', 'BRASA', 'RAIZ', 'DUNA', 'IMPACTO', 'ENJAMBRE'],
  ECLIPSE: ['NORMAL', 'CHISPA', 'ECLIPSE', 'ESPECTRO'],
  AURA: ['NORMAL', 'ESCARCHA', 'ECLIPSE', 'DRAGON'],
  METAL: ['NORMAL', 'VENDAVAL', 'MENTE', 'TOXINA', 'ENJAMBRE'],
  MENTE: ['NORMAL', 'ECLIPSE', 'AURA', 'MENTE'],
  TOXINA: ['NORMAL', 'MAREA', 'AURA', 'MENTE', 'IMPACTO'],
  DUNA: ['NORMAL', 'BRASA', 'CHISPA', 'ROCA', 'METAL', 'TOXINA'],
  IMPACTO: ['NORMAL', 'METAL'],
  ESPECTRO: ['NORMAL', 'CHISPA', 'AURA', 'MENTE', 'ESPECTRO'],
  ENJAMBRE: ['NORMAL', 'RAIZ', 'AURA', 'MENTE', 'DUNA', 'IMPACTO', 'ENJAMBRE', 'DRAGON'],
  DRAGON: ['NORMAL', 'BRASA', 'TOXINA', 'DRAGON'],
};

const NEUTRALES: Record<Tipo, readonly Tipo[]> = {
  NORMAL: ['NORMAL'],
  BRASA: ['BRASA', 'CHISPA', 'ECLIPSE', 'AURA', 'MENTE', 'TOXINA', 'ESPECTRO'],
  MAREA: ['MAREA', 'VENDAVAL', 'ECLIPSE', 'AURA', 'MENTE', 'IMPACTO', 'ESPECTRO', 'DRAGON'],
  RAIZ: ['RAIZ', 'CHISPA', 'ECLIPSE', 'AURA', 'METAL', 'MENTE', 'TOXINA', 'IMPACTO', 'ESPECTRO', 'DRAGON'],
  CHISPA: ['BRASA', 'RAIZ', 'CHISPA', 'AURA', 'METAL', 'MENTE', 'TOXINA', 'ENJAMBRE', 'DRAGON'],
  ESCARCHA: ['ESCARCHA', 'ROCA', 'VENDAVAL', 'ECLIPSE', 'METAL', 'MENTE', 'IMPACTO', 'ESPECTRO'],
  ROCA: ['ESCARCHA', 'ROCA', 'ECLIPSE', 'AURA', 'MENTE', 'TOXINA', 'ESPECTRO', 'DRAGON'],
  VENDAVAL: ['MAREA', 'ESCARCHA', 'VENDAVAL', 'ECLIPSE', 'AURA', 'MENTE', 'TOXINA', 'ESPECTRO', 'DRAGON'],
  ECLIPSE: ['BRASA', 'MAREA', 'RAIZ', 'ESCARCHA', 'ROCA', 'VENDAVAL', 'METAL', 'TOXINA', 'DUNA', 'IMPACTO', 'ENJAMBRE', 'DRAGON'],
  AURA: ['BRASA', 'MAREA', 'RAIZ', 'CHISPA', 'ROCA', 'VENDAVAL', 'AURA', 'METAL', 'DUNA', 'IMPACTO'],
  METAL: ['RAIZ', 'CHISPA', 'ESCARCHA', 'ECLIPSE', 'AURA', 'METAL', 'ESPECTRO', 'DRAGON'],
  MENTE: ['BRASA', 'MAREA', 'RAIZ', 'CHISPA', 'ESCARCHA', 'ROCA', 'VENDAVAL', 'DUNA', 'IMPACTO', 'DRAGON'],
  TOXINA: ['BRASA', 'RAIZ', 'CHISPA', 'ROCA', 'VENDAVAL', 'ECLIPSE', 'TOXINA', 'ESPECTRO', 'ENJAMBRE'],
  DUNA: ['ECLIPSE', 'AURA', 'MENTE', 'DUNA', 'IMPACTO', 'ESPECTRO', 'DRAGON'],
  IMPACTO: ['MAREA', 'RAIZ', 'ESCARCHA', 'ECLIPSE', 'AURA', 'MENTE', 'DUNA', 'IMPACTO', 'ESPECTRO', 'DRAGON'],
  ESPECTRO: ['BRASA', 'MAREA', 'RAIZ', 'ESCARCHA', 'ROCA', 'VENDAVAL', 'METAL', 'TOXINA', 'DUNA', 'IMPACTO', 'ENJAMBRE', 'DRAGON'],
  ENJAMBRE: ['CHISPA', 'ECLIPSE', 'TOXINA', 'ESPECTRO'],
  DRAGON: ['MAREA', 'RAIZ', 'CHISPA', 'ROCA', 'VENDAVAL', 'ECLIPSE', 'METAL', 'MENTE', 'DUNA', 'IMPACTO', 'ESPECTRO'],
};

export interface ResultadoEfectividad {
  multiplicador: number;
  fallaAutomaticamente: boolean;
}

export function obtenerRelacion(tipoMovimiento: Tipo, tipoDefensor: Tipo): RelacionTipo {
  if (VENTAJAS[tipoMovimiento].includes(tipoDefensor)) {
    return 'VENTAJA';
  }

  if (NEUTRALES[tipoMovimiento].includes(tipoDefensor)) {
    return 'NEUTRAL';
  }

  return 'DESVENTAJA';
}

export function calcularEfectividad(
  tipoMovimiento: Tipo,
  tipoDefensorPrincipal: Tipo,
  tipoDefensorSecundario?: Tipo,
): ResultadoEfectividad {
  const primera = obtenerRelacion(tipoMovimiento, tipoDefensorPrincipal);

  if (!tipoDefensorSecundario) {
    return {
      multiplicador: multiplicadorSimple(primera),
      fallaAutomaticamente: false,
    };
  }

  const segunda = obtenerRelacion(tipoMovimiento, tipoDefensorSecundario);

  if (primera === 'NEUTRAL' && segunda === 'NEUTRAL') {
    return { multiplicador: 0, fallaAutomaticamente: true };
  }

  const relaciones = [primera, segunda] as const;
  const ventajas = relaciones.filter((relacion) => relacion === 'VENTAJA').length;
  const neutrales = relaciones.filter((relacion) => relacion === 'NEUTRAL').length;
  const desventajas = relaciones.filter((relacion) => relacion === 'DESVENTAJA').length;

  if (ventajas === 2) return { multiplicador: 2, fallaAutomaticamente: false };
  if (ventajas === 1 && neutrales === 1) return { multiplicador: 1.5, fallaAutomaticamente: false };
  if (ventajas === 1 && desventajas === 1) return { multiplicador: 1, fallaAutomaticamente: false };
  if (neutrales === 1 && desventajas === 1) return { multiplicador: 0.75, fallaAutomaticamente: false };

  return { multiplicador: 0.5, fallaAutomaticamente: false };
}

function multiplicadorSimple(relacion: RelacionTipo): number {
  switch (relacion) {
    case 'VENTAJA':
      return 1.5;
    case 'NEUTRAL':
      return 1;
    case 'DESVENTAJA':
      return 0.75;
  }
}
