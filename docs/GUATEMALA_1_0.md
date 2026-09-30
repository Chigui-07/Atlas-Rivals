# Guatemala 1.0 — Alcance de versión

## Objetivo

Guatemala 1.0 es la primera versión formal de Atlas Rivals y funciona como set piloto para validar el núcleo del juego antes de añadir más países.

## Alcance de contenido

- Guatemala es el único país del set piloto inicial.
- Las cartas pueden representar lugares, animales, cultura, gastronomía y otros elementos vinculados con Guatemala.
- No es necesario representar todo Guatemala en esta versión.
- Futuras actualizaciones podrán añadir más cartas de Guatemala y, al mismo tiempo, comenzar a incorporar otros países.
- Existe un mazo inicial fijo de seis cartas para el tutorial, documentado en `STARTER_DECK.md`.
- El catálogo adicional de Guatemala 1.0 se definirá durante esta rama.

## Sistemas que Guatemala 1.0 debe validar

1. Construcción de mazos.
2. Combate por rondas y turnos.
3. Vida, daño y Energía.
4. Movimientos limitados e ilimitados.
5. Movimientos propios y equipables.
6. Sistema de uno o dos tipos por carta.
7. Objetos de partida.
8. Estados y efectos especiales.
9. Apertura de sobres y colección.
10. Rarezas y progresión cosmética por repetidas.
11. Camino de Estrellas.
12. Maestría de cartas.
13. Misiones diarias y semanales.
14. Pase de Batalla.
15. Tienda y regalos.
16. Tutorial y navegación principal.
17. Temporizador, desconexiones, rendición y antifarmeo.

## Fuera de alcance por ahora

- Desarrollar varios países al mismo tiempo.
- Dar por terminada toda la colección de Guatemala.
- Programar la matriz de tipos antes de transcribir y validar la tabla v0.2 completa.
- Fijar nuevos valores de cartas, movimientos u objetos sin documentarlos primero.

## Puertas antes de empezar a programar

### Gate 1 — Reglas

Las reglas esenciales deben estar documentadas sin contradicciones.

### Gate 2 — Datos de balance

Antes de codificar valores duros, deben quedar preparados:

- tabla de tipos v0.2 completa;
- mazo inicial fijo;
- valores de Vida y movimientos del mazo inicial;
- costes de Energía y usos;
- estados confirmados;
- objetos que entren en la primera implementación y sus valores definitivos.

### Gate 3 — Modelo técnico

Después se diseñarán las entidades y estructuras principales: Carta, Movimiento, Tipo, Objeto, Mazo, Jugador, Partida, Estado y sistemas de progresión.

## Estado actual

**Fase:** documentación previa a programación.

Ya existe suficiente especificación para comenzar el diseño técnico, pero la matriz completa de tipos y los valores definitivos de objetos deben quedar versionados antes de implementar balance de combate.
