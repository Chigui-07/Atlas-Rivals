# Guatemala 1.0 — Alcance de versión

## Objetivo

Guatemala 1.0 es la primera versión formal de Atlas Rivals y funciona como set piloto para validar el núcleo del juego antes de añadir más países.

## Plataforma objetivo

Guatemala 1.0 se desarrollará inicialmente para **teléfonos Android** con enfoque mobile-first.

La primera plataforma de publicación objetivo será **Google Play Store**.

Toda decisión de código, interfaz y arquitectura debe tomar como referencia principal:

- controles táctiles;
- pantallas pequeñas;
- orientación vertical (portrait);
- menús adaptados a móvil;
- rendimiento en celulares modestos;
- partidas online relativamente cortas;
- cuenta y progreso persistente.

Una versión para PC está fuera del alcance inicial y podrá evaluarse en el futuro.

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
18. Interfaz táctil vertical y navegación mobile-first.
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

### Gate 2 — Datos de balance para la primera prueba

Antes de codificar valores de la primera prueba deben quedar preparados:

- tabla de tipos v0.2 completa;
- mazo inicial fijo;
- valores de Vida y movimientos del mazo inicial;
- costes de Energía y usos;
- estados confirmados;
- catálogo de objetos de primera prueba con sus valores provisionales.

La tabla completa de tipos ya está transcrita y auditada en `TYPES.md`.

Los objetos de la primera prueba ya están documentados en `OBJECTS_FIRST_TEST.md`. Sus valores son provisionales y podrán ajustarse posteriormente mediante balance.

### Gate 3 — Dirección móvil

La dirección base ya está cerrada:

- plataforma principal: Android;
- orientación principal: vertical (portrait);
- interacción completamente táctil;
- estructura de combate y menús pensada para pantallas pequeñas.

Todavía deben definirse durante el diseño de UI:

- tamaños cómodos de interacción para cartas y botones;
- distribución exacta de la interfaz vertical;
- objetivos medibles de rendimiento para celulares modestos.

### Gate 4 — Modelo técnico

El siguiente paso es diseñar las entidades y estructuras principales: Carta, Movimiento, Tipo, Objeto, Mazo, Jugador, Partida y Estado.

El modelo debe:

- separar datos de contenido de lógica de combate;
- evitar dependencias innecesarias de escritorio;
- asumir Android vertical y entrada táctil para el cliente;
- contemplar desde el principio que la aplicación tendrá cuenta y progreso persistente;
- permitir probar tipos, daño, Energía, objetos, estados, mazos y condición de victoria de forma aislada.

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

**Fase:** listo para comenzar el diseño técnico del núcleo de combate.

Ya están documentados la tabla de tipos, el mazo inicial, los estados principales, la dirección Android vertical y los objetos de la primera prueba. El siguiente objetivo formal es diseñar el modelo técnico de `Carta`, `Movimiento`, `Tipo`, `Objeto`, `Estado`, `Mazo`, `Jugador` y `Partida` antes del primer `Feat:` de código.
