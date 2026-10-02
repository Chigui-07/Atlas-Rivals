# Guatemala 1.0 — Alcance de versión

## Objetivo

Guatemala 1.0 es la primera versión formal de Atlas Rivals y funciona como set piloto para validar el núcleo del juego antes de añadir más países.

## Plataforma objetivo

Guatemala 1.0 se desarrollará inicialmente como **juego web adaptable**.

La misma aplicación deberá poder utilizarse desde un navegador en:

- teléfonos;
- computadoras.

Toda decisión de código, interfaz y arquitectura debe tomar como referencia principal:

- diseño responsive/adaptable;
- controles táctiles en móvil;
- interacción mediante clic en computadora;
- disposición vertical como referencia en teléfonos;
- aprovechamiento de pantallas más anchas en computadora sin crear una versión separada;
- rendimiento razonable en teléfonos modestos y computadoras comunes;
- partidas online relativamente cortas;
- cuenta y progreso persistente compartidos entre dispositivos.

No se requiere una aplicación Android nativa ni una publicación inicial en Google Play Store.

La dirección completa está documentada en `PLATAFORMA_WEB.md`.

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
18. Interfaz web responsive para móvil y computadora.
19. Persistencia de cuenta, colección y progreso.
20. Rendimiento adecuado en navegadores de teléfonos y computadoras.

## Fuera de alcance por ahora

- Desarrollar varios países al mismo tiempo.
- Dar por terminada toda la colección de Guatemala.
- Mantener clientes separados para móvil y computadora cuando la misma aplicación web pueda resolver ambos casos.
- Crear una aplicación Android nativa como requisito de Guatemala 1.0.
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

### Gate 3 — Dirección web

La dirección base queda definida:

- plataforma principal: Web;
- acceso desde teléfono y computadora;
- una sola aplicación responsive/adaptable;
- disposición vertical como referencia móvil;
- soporte de toque y clic;
- misma cuenta, progreso y reglas en ambos tipos de dispositivo.

Todavía deben definirse durante el diseño técnico/UI:

- tecnología concreta del cliente web;
- tamaños cómodos de interacción para cartas y botones;
- puntos de adaptación responsive;
- distribución exacta del combate en móvil y computadora;
- compatibilidad mínima de navegadores;
- objetivos medibles de rendimiento web.

### Gate 4 — Modelo técnico

El siguiente paso es diseñar las entidades y estructuras principales: Carta, Movimiento, Tipo, Objeto, Mazo, Jugador, Partida y Estado.

El modelo debe:

- separar datos de contenido de lógica de combate;
- mantenerse independiente de la distribución visual responsive;
- poder ser consumido por el cliente web tanto en móvil como en computadora;
- contemplar desde el principio que el juego tendrá cuenta y progreso persistente;
- permitir probar tipos, daño, Energía, objetos, estados, mazos y condición de victoria de forma aislada.

## Monetización

La monetización se estudiará durante el desarrollo, pero no es una prioridad previa al núcleo.

Primero deben validarse:

1. jugabilidad;
2. balance;
3. estabilidad;
4. experiencia web en móvil y computadora;
5. rendimiento;
6. progresión y economía.

Solo después deberá evaluarse una estrategia de ingresos que no perjudique esos principios.

## Estado actual

**Fase:** listo para comenzar el diseño técnico del núcleo de combate.

Ya están documentados la tabla de tipos, el mazo inicial, los estados principales, la dirección web adaptable y los objetos de la primera prueba. El siguiente objetivo formal es diseñar el modelo técnico de `Carta`, `Movimiento`, `Tipo`, `Objeto`, `Estado`, `Mazo`, `Jugador` y `Partida` antes del primer `Feat:` de código.
