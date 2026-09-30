# Gameplay — Guatemala 1.0

Este documento recoge las reglas de combate confirmadas para la primera versión. Cuando un valor siga abierto, se marca como pendiente en lugar de asumirlo.

## 1. Mazo

- Cada jugador entra a la partida con **6 cartas distintas**.
- Cada carta puede tener **1 o 2 tipos**.
- Una carta también puede ser únicamente de tipo **Normal**.
- Cada carta prepara **2 movimientos activos**.
- Cada mazo lleva **3 objetos** elegidos antes de la partida.

### Movimientos

- Cada carta dispone de 2 espacios de movimientos activos.
- Debe existir **al menos 1 movimiento ilimitado** entre los movimientos activos de la carta.
- Los movimientos pueden tener:
  - coste de Energía;
  - usos limitados o ilimitados;
  - daño y/o efectos.
- Los movimientos propios/originales de una carta pueden desequiparse, pero **no se transfieren a otras cartas**.
- Los movimientos obtenidos como equipables pueden intercambiarse entre cartas compatibles y ocupan uno de los 2 espacios activos.

## 2. Estadísticas base

- **Vida:** escala base de 12 a 20.
- **Daño base de movimientos:** escala aproximada de 3 a 10 antes de modificadores.
- Una carta que llega a **0 Vida** queda fuera de la partida.
- Una carta eliminada no puede curarse ni revivir.
- La curación nunca puede superar la Vida máxima de la carta.

Los valores concretos de cada carta y movimiento se definirán en los datos de Guatemala 1.0.

## 3. Energía

Cada jugador administra Energía durante la partida.

- Energía inicial: **3**.
- Recuperación: **+2 por ronda**.
- Máximo: **10**.
- Cada movimiento puede requerir una cantidad concreta de Energía.
- No se puede utilizar un movimiento si no se dispone de la Energía necesaria.

## 4. Inicio de partida

1. Cada jugador llega con su mazo preparado.
2. Cada jugador elige su carta inicial en secreto.
3. Se lanza un dado para decidir quién realiza la primera acción.
4. Comienza el combate por turnos.

## 5. Acciones de turno

En su turno, el jugador realiza una acción principal. Las acciones contempladas son:

- usar un movimiento/ataque;
- cambiar la carta activa;
- usar un objeto;
- usar el Poder de Maestría, si está desbloqueado y disponible.

### Cambio de carta

Cambiar la carta activa **consume el turno**.

### Objetos

Usar un objeto **consume el turno**.

## 6. Objetos base confirmados

- **Vendaje:** cura 2 de Vida.
- **Botiquín:** cura 4 de Vida.
- **Kit de recuperación:** cura 6 de Vida.
- **Protector:** reduce en 2 el próximo daño recibido.
- **Impulso:** suma +2 de ataque al próximo ataque.

Reglas generales:

- se llevan 3 objetos por partida;
- se eligen antes de iniciar;
- se permiten como máximo **2 copias del mismo objeto** dentro de los 3 espacios;
- no reviven cartas eliminadas;
- una curación no supera la Vida máxima.

## 7. Estados

### Quemadura

Confirmado:

- dura **2 turnos**.

Base de diseño previamente propuesta, aún por fijar como valor técnico definitivo:

- daño periódico exacto;
- comportamiento al reaplicar el estado.

### Parálisis

Confirmado:

- tiene una **probabilidad baja** de activarse.

Pendiente antes de programar:

- porcentaje exacto;
- efecto exacto sobre la siguiente acción.

## 8. Tipos y daño

La efectividad de tipos modifica el daño de los movimientos. Los multiplicadores y reglas están en [`TYPES.md`](TYPES.md).

La matriz completa de relaciones no se implementará hasta terminar su auditoría.

## 9. Temporizador

- Cada turno dispone de **20 segundos** para ejecutar una acción.
- Si el tiempo termina, la acción del turno se anula/omite.
- El temporizador evita que una ronda quede bloqueada indefinidamente por inactividad.

## 10. Desconexiones

- Si un jugador se desconecta, la partida se pausa.
- Se conceden hasta **2 minutos** para reconectarse.
- Si no vuelve dentro del tiempo, recibe **derrota automática**.

## 11. Rendición, abandono y empates

- Rendirse equivale a derrota.
- Abandonar equivale a derrota.
- Una desconexión no recuperada equivale a derrota.
- **No existen empates.**

## 12. Condición de victoria

Gana el jugador que consigue eliminar todas las cartas del rival.

## 13. Reputación y antifarmeo

Base confirmada:

- abandonos/desconexiones repetidos deben activar controles automáticos de recompensas;
- el patrón señalado para vigilancia es al menos **2 seguidos** o una frecuencia de **cada 3 partidas**;
- la reputación debe detectar victorias sospechosas obtenidas repetidamente por abandonos o desconexiones del rival;
- una reputación baja puede reducir o retirar temporalmente recompensas, especialmente al jugador que se está beneficiando del patrón.

Pendiente:

- fórmula exacta de reputación;
- ventanas de análisis;
- duración de bloqueos;
- recuperación de reputación;
- reducción exacta de Oro, sobres y progreso de misiones.

Estas cifras deben cerrarse antes de implementar el sistema competitivo/recompensas.
