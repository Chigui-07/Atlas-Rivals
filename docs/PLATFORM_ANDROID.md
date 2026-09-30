# Plataforma objetivo — Android

## Decisión principal

Atlas Rivals se desarrollará inicialmente como un juego **mobile-first para teléfonos Android**.

La primera plataforma de publicación objetivo será **Google Play Store**. Guatemala 1.0 debe diseñarse y desarrollarse tomando Android como referencia principal desde el inicio, en lugar de crear primero una versión de escritorio y adaptarla después.

## Principios de desarrollo móvil

Todo código, interfaz y decisión técnica de Guatemala 1.0 debe considerar:

- controles completamente táctiles;
- botones, cartas y zonas interactivas cómodas de pulsar en pantallas pequeñas;
- menús adaptados a teléfonos;
- información legible sin depender de cursor, teclado o ratón;
- rendimiento razonable en celulares modestos;
- consumo de recursos controlado;
- partidas online pensadas para sesiones relativamente cortas;
- sistema de cuenta y progreso persistente.

La duración objetivo exacta de una partida y los presupuestos técnicos de rendimiento se definirán y medirán durante el desarrollo.

## Orientación de pantalla

La orientación definitiva todavía no está cerrada.

Opciones a evaluar:

- vertical;
- horizontal.

La decisión debe tomarse según cuál permita representar mejor el combate, las cartas, los movimientos y los menús sin sacrificar comodidad táctil ni legibilidad.

Hasta cerrar esta decisión, no debe diseñarse una interfaz cuya estructura dependa innecesariamente de una sola orientación.

## Interacción

La experiencia principal no debe requerir periféricos externos.

Las acciones principales deben poder realizarse mediante toque, incluyendo como mínimo:

- seleccionar cartas;
- seleccionar movimientos;
- cambiar de carta activa;
- usar objetos;
- navegar menús;
- consultar AYUDA/TABLA;
- reclamar recompensas y gestionar colección/mazos.

Las zonas táctiles deben evitar elementos demasiado pequeños o demasiado juntos que provoquen pulsaciones accidentales.

## Rendimiento

Guatemala 1.0 debe priorizar estabilidad y fluidez sobre efectos visuales costosos.

Durante el diseño técnico deberán definirse objetivos concretos para:

- tiempo de carga;
- memoria utilizada;
- consumo de batería;
- uso de red durante partidas;
- rendimiento en dispositivos Android de gama modesta.

Las animaciones y efectos cosméticos no deben comprometer el funcionamiento del combate.

## Juego online, cuenta y progreso

Atlas Rivals está planteado como un juego con partidas online y progresión persistente.

El diseño técnico deberá contemplar desde el principio:

- identificación/cuenta del jugador;
- colección y mazos persistentes;
- progreso de Camino de Estrellas, Pase, misiones y Maestría;
- Oro y recompensas;
- manejo de conexión, reconexión y abandono en combate.

La arquitectura concreta de autenticación, backend y almacenamiento se decidirá durante el diseño técnico; este documento fija la necesidad, no una tecnología específica.

## PC y otras plataformas

Una versión para PC queda **fuera del alcance inicial** de Guatemala 1.0.

Podrá considerarse en el futuro cuando Atlas Rivals tenga más experiencia de desarrollo, recursos y una comunidad suficientemente estable. La posible versión futura de PC no debe aumentar innecesariamente la complejidad de la primera versión Android.

## Monetización

La monetización no es la prioridad del núcleo inicial.

El orden de prioridades es:

1. juego funcional;
2. combate divertido;
3. balance razonable;
4. experiencia móvil cómoda;
5. estabilidad y rendimiento;
6. progresión/economía saludable;
7. monetización, cuando el proyecto esté preparado para diseñarla con cuidado.

No se debe forzar una decisión de monetización que perjudique el balance o la experiencia de juego.

## Regla para Guatemala 1.0

Toda decisión de arquitectura, interfaz, rendimiento o flujo del jugador debe responder primero a esta pregunta:

> ¿Funciona bien como experiencia táctil en un teléfono Android?

Si una solución funciona bien en PC pero resulta incómoda o demasiado pesada en móvil, no es la solución principal para Guatemala 1.0.
