# Mazo inicial fijo — Guatemala 1.0

Este es el mazo inicial definido para el tutorial. Todos los jugadores lo reciben al comenzar y lo conservan después de completar la partida guiada.

## Cartas

| Carta | Rareza | Tipo(s) | Vida |
|---|---|---|---:|
| Kak'ik | Común | Brasa | 15 |
| Lago de Atitlán | Común | Marea | 17 |
| Ceiba Sagrada | Rara | Raíz / Duna | 18 |
| Antigua Guatemala | Común | Normal / Roca | 19 |
| Ciudad de Guatemala | Rara | Chispa / Metal | 15 |
| Juego de Pelota Maya | Común | Impacto | 16 |

Resultado del mazo: **4 Comunes y 2 Raras**.

## Movimientos iniciales

### Kak'ik

**Calor del Kak'ik**

- Daño: 4.
- Energía: 1.
- Usos: ilimitados.

**Hervor Intenso**

- Daño: 7.
- Energía: 4.
- Usos: 3.
- Aplica Quemadura: 1 de daño adicional al final de los próximos 2 turnos; no se acumula y reaplicarla reinicia la duración.

### Lago de Atitlán

**Oleaje del Lago**

- Daño: 4.
- Energía: 1.
- Usos: ilimitados.

**Corriente Profunda**

- Daño: 6.
- Energía: 3.
- Usos: 5.

### Ceiba Sagrada

**Raíces Ancestrales**

- Daño: 4.
- Energía: 2.
- Usos: ilimitados.

**Savia Restauradora**

- Curación: 4 de Vida.
- Objetivo: Ceiba Sagrada u otra carta aliada viva compatible.
- Energía: 3.
- Usos: 3.
- No inflige daño.

### Antigua Guatemala

**Herencia Colonial**

- Daño: 4.
- Energía: 1.
- Usos: ilimitados.

**Muros de Antigua**

- Daño: 7.
- Energía: 4.
- Usos: 3.

### Ciudad de Guatemala

**Pulso Urbano**

- Daño: 4.
- Energía: 2.
- Usos: ilimitados.

**Fuerza Metropolitana**

- Daño: 6.
- Energía: 3.
- Usos: 4.

### Juego de Pelota Maya

**Golpe Ceremonial**

- Daño: 5.
- Energía: 2.
- Usos: ilimitados.
- 15% de probabilidad de Parálisis; la carta afectada pierde su próxima acción.

**Lanzamiento de Poder**

- Daño: 7.
- Energía: 4.
- Usos: 3.

## Notas de implementación

- Cada carta ya cumple la regla de tener al menos un movimiento ilimitado.
- Estos son movimientos propios de las cartas: pueden desequiparse de sus espacios activos, pero no transferirse a otras cartas.
- Los movimientos equipables que el jugador obtenga posteriormente podrán sustituir movimientos activos siempre que la carta sea compatible.
- Los tipos concretos de cada movimiento deben almacenarse explícitamente en los datos cuando se prepare el modelo técnico; no deben inferirse únicamente por el nombre de la carta.
