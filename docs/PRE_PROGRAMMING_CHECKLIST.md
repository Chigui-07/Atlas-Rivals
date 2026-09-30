# Checklist previa a programación — Guatemala 1.0

Esta lista convierte las decisiones abiertas de la documentación en tareas concretas. No reemplaza los documentos de diseño: sirve para saber cuándo Guatemala 1.0 está suficientemente definida para comenzar a implementar el núcleo sin inventar reglas en el código.

## 1. Reglas base

- [x] Mazo de 6 cartas distintas.
- [x] 2 movimientos activos por carta.
- [x] Al menos 1 movimiento ilimitado por carta.
- [x] 3 objetos por mazo.
- [x] Máximo 2 copias del mismo objeto.
- [x] Energía: 3 inicial, +2 por ronda, máximo 10.
- [x] Cambio de carta consume turno.
- [x] Uso de objeto consume turno.
- [x] Temporizador de 20 segundos.
- [x] Pausa por desconexión y límite de 2 minutos.
- [x] Rendición, abandono o desconexión no recuperada = derrota.
- [x] Sin empates.

## 2. Sistema de tipos — bloqueante

- [x] Definir los 18 tipos oficiales.
- [x] Definir multiplicadores de efectividad.
- [x] Definir redondeo del daño.
- [ ] Auditar completamente la matriz v0.2.
- [ ] Resolver las interacciones especiales del mismo tipo señaladas en `TYPES.md`.
- [ ] Confirmar que cada relación final sea inequívoca y consistente.
- [ ] Preparar la matriz como única fuente de verdad para combate y AYUDA/TABLA.

**Criterio de cierre:** ninguna relación puede quedar contradictoria o depender de recuerdos del chat.

## 3. Cartas de Guatemala — bloqueante

- [ ] Definir el tamaño del roster inicial.
- [ ] Elegir las cartas que formarán Guatemala 1.0.
- [ ] Asignar nombre y categoría temática a cada carta.
- [ ] Asignar rareza.
- [ ] Asignar 1 o 2 tipos.
- [ ] Asignar Vida dentro de la escala acordada.
- [ ] Definir los movimientos propios/originales de cada carta.

**Criterio de cierre:** debe existir un conjunto inicial completo que permita construir al menos un mazo válido de 6 cartas distintas y probar el combate.

## 4. Movimientos — bloqueante

- [ ] Definir catálogo inicial de movimientos.
- [ ] Definir tipo de cada movimiento.
- [ ] Definir daño base cuando corresponda.
- [ ] Definir coste de Energía.
- [ ] Definir usos limitados o ilimitados.
- [ ] Definir compatibilidades para movimientos equipables.
- [ ] Verificar que cada carta pueda equipar 2 movimientos y conservar al menos 1 ilimitado.

## 5. Estados y efectos

- [x] Quemadura dura 2 turnos.
- [ ] Definir daño periódico de Quemadura.
- [ ] Definir qué ocurre al reaplicar Quemadura.
- [x] Parálisis debe tener probabilidad baja.
- [ ] Definir porcentaje exacto de Parálisis.
- [ ] Definir efecto exacto de Parálisis sobre la acción afectada.

## 6. Objetos

- [x] Vendaje: +2 Vida.
- [x] Botiquín: +4 Vida.
- [x] Kit de recuperación: +6 Vida.
- [x] Protector: reduce en 2 el próximo daño recibido.
- [x] Impulso: +2 al próximo ataque.
- [x] Máximo 2 copias del mismo objeto dentro de los 3 espacios.

## 7. Progresión y economía

- [x] Rarezas y principio de que rareza no equivale a poder.
- [x] Progresión cosmética por repetidas.
- [x] Oro por victoria.
- [x] Sobre Atlas y probabilidades base.
- [x] Sobres diarios por victoria.
- [x] Sobre de Movimientos y probabilidades base.
- [x] Camino de Estrellas base.
- [x] Misiones diarias y semanales base.
- [x] Pase de Batalla base.
- [x] Estructura general de tienda.
- [ ] Definir función de copias posteriores a 10, si entra en Guatemala 1.0.
- [ ] Cerrar los valores provisionales de Maestría antes de implementarla.
- [ ] Definir el modificador de Movimiento Estelar usado por Carta Estelar.

## 8. Reputación y antifarmeo

- [x] Detectar patrones repetidos de abandono/desconexión.
- [x] Considerar patrones de al menos 2 seguidos o una frecuencia de cada 3 partidas.
- [x] Permitir reducción o bloqueo temporal de recompensas ante abuso.
- [ ] Definir fórmula de reputación.
- [ ] Definir ventana de análisis.
- [ ] Definir duración de sanciones.
- [ ] Definir recuperación de reputación.
- [ ] Definir reducción exacta de Oro, sobres y progreso de misiones.

## 9. Interfaz y tutorial

- [x] Flujo inicial del tutorial.
- [x] Secciones del menú principal.
- [x] Validaciones mínimas antes de entrar a partida.
- [x] Información mínima de la interfaz de combate.
- [x] Pestaña AYUDA/TABLA.
- [x] UI de temporizador y reconexión.
- [ ] Diseñar visualmente las pantallas durante la fase de UI.

## 10. Modelo técnico — último paso antes del primer código del núcleo

Una vez cerrados tipos, roster y movimientos:

- [ ] Diseñar entidad `Carta`.
- [ ] Diseñar entidad `Movimiento`.
- [ ] Diseñar entidad `Tipo` y matriz de efectividad.
- [ ] Diseñar entidad `Objeto`.
- [ ] Diseñar entidad `Mazo` y sus validaciones.
- [ ] Diseñar estado de `Jugador` dentro de partida.
- [ ] Diseñar estado y flujo de `Partida`.
- [ ] Separar datos de contenido de la lógica de combate.
- [ ] Definir pruebas mínimas para tipos, daño, Energía, mazos y condición de victoria.

## Orden recomendado de cierre

1. Tabla de tipos.
2. Roster inicial de Guatemala.
3. Movimientos y compatibilidades.
4. Estados pendientes.
5. Modelo técnico del combate.
6. Primer código del núcleo.

Los sistemas de progresión, tienda, Pase y Maestría pueden implementarse después del núcleo de combate, respetando siempre sus documentos antes de codificar cada sistema.
