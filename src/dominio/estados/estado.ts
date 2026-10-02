export interface EstadoAplicado {
  readonly estadoId: string;
  readonly turnosRestantes?: number;
  readonly intensidad?: number;
  readonly fuenteMovimientoId?: string;
  readonly fuenteCartaId?: string;
}
