# Mazo inicial fijo — Guatemala 1.0

Este es el mazo inicial definido para el tutorial. Todos los jugadores lo reciben al comenzar y lo conservan después de completar la partida guiada.

> El mazo se está redefiniendo carta por carta. **Kak'ik ya está confirmada con su nueva versión**. Las demás cartas conservan temporalmente sus valores anteriores hasta que sean revisadas.

## Cartas

| Carta | Rareza | Tipo(s) | Vida | Estado |
|---|---|---|---:|---|
| Kak'ik | Común | Brasa | 20 | Confirmada |
| Lago de Atitlán | Común | Marea | 17 | Pendiente de revisión |
| Ceiba Sagrada | Rara | Raíz / Duna | 18 | Pendiente de revisión |
| Antigua Guatemala | Común | Normal / Roca | 19 | Pendiente de revisión |
| Ciudad de Guatemala | Rara | Chispa / Metal | 15 | Pendiente de revisión |
| Juego de Pelota Maya | Común | Impacto | 16 | Pendiente de revisión |

## Movimientos iniciales

### Kak'ik — confirmada

**Recado Ardiente**

- Rareza: Común.
- Tipo: Brasa.
- Categoría: Ofensivo.
- Daño: 3.
- Energía: 2.
- Usos: ilimitados.
- Descripción: *Lanza una chispa del hirviente caldo rojo que quema al objetivo al contacto.*

**Sazón Incandescente**

- Rareza: Superrara.
- Tipo: Brasa.
- Categoría: Ofensivo.
- Daño: 8.
- Energía: 6.
- Usos: 2.
- Habilidad: garantiza aplicar Quemadura durante 3 rondas, causando 1 de daño adicional en cada aplicación del estado.
- Descripción: *Un estallido especiado abrasador que envuelve al rival en llamas intensas.*

### Lago de Atitlán — pendiente de revisión

**Oleaje del Lago**

- Daño: 4.
- Energía: 1.
- Usos: ilimitados.

**Corriente Profunda**

- Daño: 6.
- Energía: 3.
- Usos: 5.

### Ceiba Sagrada — pendiente de revisión

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

### Antigua Guatemala — pendiente de revisión

**Herencia Colonial**

- Daño: 4.
- Energía: 1.
- Usos: ilimitados.

**Muros de Antigua**

- Daño: 7.
- Energía: 4.
- Usos: 3.

### Ciudad de Guatemala — pendiente de revisión

**Pulso Urbano**

- Daño: 4.
- Energía: 2.
- Usos: ilimitados.

**Fuerza Metropolitana**

- Daño: 6.
- Energía: 3.
- Usos: 4.

### Juego de Pelota Maya — pendiente de revisión

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

- Cada carta debe tener al menos un movimiento ilimitado.
- Los movimientos propios pueden desequiparse de sus espacios activos, pero no transferirse a otras cartas.
- Los movimientos equipables obtenidos posteriormente podrán sustituir movimientos activos siempre que la carta sea compatible.
- El tipo, rareza y descripción de cada movimiento se almacenan explícitamente en los datos del juego.
- La versión confirmada de Kak'ik ya existe en código como `GUA-001`.
