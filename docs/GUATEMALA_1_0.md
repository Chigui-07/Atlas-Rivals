# Guatemala 1.0 — Alcance de versión

## Objetivo

Guatemala 1.0 es la primera versión formal de Atlas Rivals y funciona como set piloto para validar el núcleo del juego antes de añadir más países.

## Plataforma objetivo

Guatemala 1.0 se desarrollará inicialmente para **teléfonos Android** con enfoque mobile-first.

La primera plataforma de publicación objetivo será **Google Play Store**.

Toda decisión de código, interfaz y arquitectura debe tomar como referencia principal:

- controles táctiles;
- pantallas pequeñas;
- menús adaptados a móvil;
- rendimiento en celulares modestos;
- partidas online relativamente cortas;
- cuenta y progreso persistente.

La orientación definitiva de pantalla —vertical u horizontal— queda pendiente de decisión de UI. Una versión para PC está fuera del alcance inicial y podrá evaluarse en el futuro.

La dirección completa está documentada en `PLATFORM_ANDROID.md`.

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
18. Interfaz táctil y navegación mobile-first.
19. Persistencia de cuenta, colección y progreso.
20. Rendimiento adecuado para dispositivos Android modestos.

## Fuera de alcance por ahora

- Desarrollar varios países al mismo tiempo.
- Dar por terminada toda la colección de Guatemala.
- Desarrollar una versión para PC en paralelo con la primera versión Android.
- Elegir tecnologías de backend o monetización antes de necesitar esa decisión técnicamente.
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

La tabla completa de tipos ya está transcrita y auditada en `TYPES.md`.

### Gate 3 — Dirección móvil

Antes de construir la interfaz definitiva deben quedar definidos:

- orientación principal: vertical u horizontal;
- estructura táctil de combate y menús;
- tamaños cómodos de interacción para cartas y botones;
- objetivos medibles de rendimiento para celulares modestos.

No es necesario cerrar estos valores para diseñar las entidades puras del modelo de combate, pero toda arquitectura de cliente debe asumir Android como plataforma principal.

### Gate 4 — Modelo técnico

Después se diseñarán las entidades y estructuras principales: Carta, Movimiento, Tipo, Objeto, Mazo, Jugador, Partida, Estado y sistemas de progresión.

El modelo debe evitar dependencias innecesarias de escritorio y contemplar desde el principio que la aplicación tendrá cuenta y progreso persistente.

## Monetización

La monetización se estudiará durante el desarrollo, pero no es una prioridad previa al núcleo.

Primero deben validarse:

1. jugabilidad;
2. balance;
3. estabilidad;
4. experiencia móvil;
5. rendimiento;
6. progresión y economía.

Solo después deberá evaluarse una estrategia de ingresos que no perjudique esos principios.

## Estado actual

**Fase:** documentación previa a programación.

La tabla de tipos y el mazo inicial ya permiten avanzar hacia el diseño técnico. Los siguientes cierres inmediatos son los objetos de la primera prueba y la dirección de UI móvil, mientras el modelo de combate se diseña con Android como referencia principal.
