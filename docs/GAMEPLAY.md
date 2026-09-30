# Gameplay — Guatemala 1.0

Este documento recoge las reglas de combate confirmadas para la primera versión. Cuando un valor siga abierto, se marca como pendiente en lugar de asumirlo.

## 1. Mazo

- Cada jugador entra a la partida con **6 cartas**.
- No se permiten **copias exactas repetidas** de una misma carta dentro del mazo.
- Cada carta puede tener **1 o 2 tipos**.
- Una carta también puede ser únicamente de tipo **Normal**.
- Cada carta prepara **2 movimientos activos**.
- Cada mazo puede llevar **hasta 3 objetos** elegidos antes de la partida.

## 2. Movimientos

- Cada carta dispone de 2 espacios de movimientos activos.
- Debe existir **al menos 1 movimiento ilimitado** entre los movimientos activos de la carta.
- Los movimientos pueden tener coste de Energía, usos limitados o ilimitados, daño y/o efectos.
- Los movimientos propios/originales de una carta se pueden desequipar, pero **no se transfieren a otras cartas**.
- Los movimientos equipables pueden intercambiarse entre cartas compatibles.
- Los movimientos ofensivos equipables requieren compatibilidad de tipo con la carta.
- Los movimientos curativos son de tipo Normal y solo pueden equiparse en cartas compatibles con curación.
- En cartas de un solo tipo, normalmente ambos movimientos ofensivos pertenecen a ese tipo.
- En cartas de dos tipos, normalmente se distribuyen entre ambos tipos, salvo habilidades especiales como curación.

## 3. Estadísticas base

La escala aceptada como base de balance para probar es:

- Vida habitual aproximada: **12–20**.
- Daño base aproximado de movimientos: **3–10**.

Estos rangos no son una obligación rígida para todas las cartas; sirven como punto de partida de balance.

Reglas:

- una carta que llega a **0 Vida** queda fuera de la partida;
- una carta eliminada no puede curarse ni revivir;
- el daño recibido persiste mientras la carta siga viva;
- la curación nunca puede superar la Vida máxima de la carta.

## 4. Energía

- Energía inicial por jugador: **3**.
- Al inicio de cada ronda: **+2 Energía**.
- Máximo: **10**.
- Un movimiento no puede utilizarse si el jugador no tiene la Energía necesaria.

## 5. Rondas y turnos

Una ronda funciona así:

1. Ambos jugadores reciben la recuperación de Energía correspondiente, sin superar 10.
2. Ambos jugadores lanzan un dado.
3. El resultado más alto obtiene el primer turno de esa ronda.
4. Si hay empate en el dado, se vuelve a lanzar.
5. Cada jugador realiza una sola acción en su turno.
6. Tras las acciones de ambos jugadores, comienza una nueva ronda y se vuelve a lanzar el dado.

### Acciones disponibles

En un turno se puede realizar una acción principal:

- usar un movimiento;
- cambiar la carta activa;
- usar un objeto;
- usar el Poder de Maestría, si está desbloqueado y disponible.

Cambiar de carta **consume el turno**.  
Usar un objeto **consume el turno**.

## 6. Carta activa inicial

En una partida normal, ambos jugadores seleccionan en secreto su primera carta activa y la revelan simultáneamente antes de comenzar el combate.

Para la primera partida guiada del tutorial, la selección exacta de la carta inicial puede quedar predeterminada por el propio tutorial.

## 7. Objetos

Base confirmada de objetos considerados para el sistema:

- Vendaje.
- Botiquín.
- Protector.
- Impulso.

También se propuso **Kit de recuperación**, pero sus valores y su incorporación definitiva deben cerrarse antes de implementarlo.

Reglas confirmadas:

- usar un objeto consume el turno;
- se pueden llevar hasta 3 objetos por partida;
- un objeto no puede revivir una carta eliminada;
- cualquier curación respeta la Vida máxima.

Los valores numéricos exactos de curación, reducción de daño o aumento de ataque de los objetos deben cerrarse en balance antes de programarlos.

## 8. Estados confirmados

### Quemadura

- Dura **2 turnos**.
- Inflige **1 de daño adicional al final de cada uno de los próximos 2 turnos**.
- No se acumula consigo misma.
- Si se reaplica antes de terminar, reinicia su duración.

### Parálisis

- Tiene **15% de probabilidad** cuando la aplica el movimiento correspondiente.
- La carta afectada pierde su **próxima acción**.
- Después de provocar esa pérdida de acción, el estado desaparece.

## 9. Tipos y daño

La efectividad de tipos modifica el daño de los movimientos. Los multiplicadores y reglas están en [`TYPES.md`](TYPES.md).

### Redondeo

Después de aplicar multiplicadores, todo resultado decimal se redondea al entero más cercano. Los resultados terminados en `.5` se redondean hacia arriba.

## 10. Temporizador

- Cada turno dispone de **20 segundos**.
- Si el tiempo termina sin ejecutar una acción válida, la acción del turno se anula/omite.

## 11. Desconexiones

- Si un jugador se desconecta, la partida se pausa.
- Se conceden hasta **2 minutos** para reconectarse.
- Si vuelve, la partida puede reanudarse y el turno afectado se reinicia según la lógica de reconexión.
- Si no regresa dentro del tiempo, recibe **derrota automática**.

## 12. Rendición, abandono y empates

- Rendirse equivale a derrota.
- Abandonar equivale a derrota.
- Una desconexión no recuperada equivale a derrota.
- **No existen empates.**

## 13. Condición de victoria

Gana el jugador que consigue dejar al rival sin cartas vivas disponibles.

## 14. Reputación y antifarmeo

Reglas confirmadas:

- un patrón de victorias beneficiadas por abandonos/desconexiones debe vigilarse si ocurre **2 veces seguidas** o con una frecuencia aproximada de **cada 3 partidas**;
- la reputación disminuye cuando existen demasiadas incidencias sospechosas;
- las recompensas pueden reducirse o desaparecer temporalmente;
- la penalización de recompensas se centra principalmente en el jugador que se está beneficiando repetidamente del patrón, no únicamente en quien abandona/desconecta;
- el resultado de la partida puede seguir registrándose como victoria aunque sus recompensas se bloqueen.

Pendiente antes de implementar:

- fórmula exacta de reputación;
- ventana temporal/de partidas usada para el análisis;
- duración de bloqueos;
- recuperación de reputación;
- reducción exacta de Oro, estrellas, sobres, misiones y fichas.
