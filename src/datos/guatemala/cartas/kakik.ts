import type { CartaBase } from '../../../dominio/cartas/carta';
import type { Movimiento } from '../../../dominio/movimientos/movimiento';

export const RECADO_ARDIENTE: Movimiento = {
  id: 'gua-kakik-recado-ardiente',
  nombre: 'Recado Ardiente',
  descripcion: 'Lanza una chispa del hirviente caldo rojo que quema al objetivo al contacto.',
  rareza: 'COMUN',
  tipo: 'BRASA',
  categoria: 'OFENSIVO',
  procedencia: 'PROPIO',
  costeEnergia: 2,
  danioBase: 3,
  usosMaximos: null,
  objetivo: 'RIVAL_ACTIVO',
  esContacto: false,
};

export const SAZON_INCANDESCENTE: Movimiento = {
  id: 'gua-kakik-sazon-incandescente',
  nombre: 'Sazón Incandescente',
  descripcion: 'Un estallido especiado abrasador que envuelve al rival en llamas intensas.',
  rareza: 'SUPERRARA',
  tipo: 'BRASA',
  categoria: 'OFENSIVO',
  procedencia: 'PROPIO',
  costeEnergia: 6,
  danioBase: 8,
  usosMaximos: 2,
  objetivo: 'RIVAL_ACTIVO',
  esContacto: false,
  estadosQuePuedeAplicar: [
    {
      estadoId: 'quemadura',
      probabilidadPorcentaje: 100,
      duracionTurnos: 3,
      intensidad: 1,
    },
  ],
};

export const KAKIK: CartaBase = {
  id: 'gua-kakik',
  codigo: 'GUA-001',
  nombre: "Kak'ik",
  pais: 'Guatemala',
  rareza: 'COMUN',
  vidaMaxima: 20,
  tipoPrincipal: 'BRASA',
  movimientosPropios: [RECADO_ARDIENTE, SAZON_INCANDESCENTE],
};
