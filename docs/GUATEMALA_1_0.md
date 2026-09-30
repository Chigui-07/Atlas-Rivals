# Guatemala 1.0 — Alcance de versión

## Objetivo

Guatemala 1.0 es la primera versión formal de Atlas Rivals y funciona como set piloto para validar el núcleo del juego antes de añadir más países.

## Alcance de contenido

- Guatemala es el único país del set piloto inicial.
- Las cartas pueden representar lugares, animales, cultura, gastronomía y otros elementos vinculados con Guatemala.
- No es necesario representar todo Guatemala en esta versión.
- Futuras actualizaciones podrán añadir más cartas de Guatemala y, al mismo tiempo, comenzar a incorporar otros países.
- El roster concreto de cartas se definirá dentro de esta rama.

## Sistemas que Guatemala 1.0 debe validar

1. Construcción de mazos.
2. Combate por turnos.
3. Vida, daño y Energía.
4. Movimientos limitados e ilimitados.
5. Sistema de uno o dos tipos por carta.
6. Objetos de partida.
7. Estados y efectos especiales.
8. Apertura de sobres y colección.
9. Rarezas y progresión cosmética por repetidas.
10. Camino de Estrellas.
11. Maestría de cartas.
12. Misiones diarias y semanales.
13. Pase de Batalla.
14. Tienda y regalos.
15. Tutorial y navegación principal.
16. Temporizador, desconexiones, rendición y antifarmeo.

## Fuera de alcance por ahora

- Desarrollar varios países al mismo tiempo.
- Dar por terminada toda la colección de Guatemala.
- Programar una tabla de tipos que todavía tenga relaciones contradictorias.
- Fijar cartas, movimientos o Poderes de Maestría concretos sin documentarlos primero.

## Puertas antes de empezar a programar

### Gate 1 — Reglas

Las reglas esenciales deben estar documentadas sin contradicciones.

### Gate 2 — Balance de datos

Antes de codificar valores duros, deben quedar definidos:

- tabla de tipos final;
- cartas iniciales;
- Vida y movimientos de cada carta;
- costes de Energía y usos;
- objetos disponibles;
- efectos y probabilidades definitivas.

### Gate 3 — Modelo técnico

Después del balance se diseñarán las entidades y estructuras del juego: Carta, Movimiento, Tipo, Objeto, Mazo, Jugador, Partida y progresión.

## Estado actual

**Fase:** documentación previa a programación.

La prioridad no es escribir código todavía, sino convertir las decisiones del diseño en una especificación que podamos implementar y probar sin depender de recuerdos del chat.
