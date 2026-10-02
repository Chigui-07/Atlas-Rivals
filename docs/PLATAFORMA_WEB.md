# Plataforma objetivo — Web adaptable

## Decisión principal

Atlas Rivals se desarrollará inicialmente como un **juego web adaptable**, accesible desde un navegador tanto en **teléfonos** como en **computadoras**.

Guatemala 1.0 tendrá una única experiencia web capaz de adaptarse al tamaño y forma de la pantalla, en lugar de mantener versiones separadas para Android y PC.

No se requiere una aplicación nativa de Android ni una publicación inicial en Google Play Store.

## Tecnología inicial confirmada

La base técnica para comenzar Guatemala 1.0 será:

- **Node.js 24 LTS** como entorno de desarrollo;
- **npm** como gestor de paquetes;
- **TypeScript** como lenguaje principal;
- **React** para la interfaz;
- **Vite** para desarrollo y compilación;
- **Vitest** para pruebas automáticas;
- **CSS/CSS Modules** para estilos iniciales.

El motor de combate se implementará como lógica TypeScript independiente de React. React consumirá el estado y las acciones del motor para representarlos visualmente, pero no será responsable de decidir las reglas de combate.

La estructura completa está documentada en `ARQUITECTURA_TECNICA.md`.

## Principios de desarrollo web

Todo código, interfaz y decisión técnica de Guatemala 1.0 debe considerar:

- diseño responsive/adaptable;
- acceso desde teléfono y computadora;
- controles táctiles en móvil;
- interacción mediante ratón o panel táctil en computadora;
- botones, cartas y zonas interactivas cómodas en pantallas pequeñas;
- aprovechamiento del espacio adicional en pantallas grandes sin cambiar las reglas del juego;
- información legible sin depender exclusivamente de hover, teclado o gestos móviles;
- rendimiento razonable en teléfonos modestos y computadoras comunes;
- consumo de red controlado durante partidas online;
- sistema de cuenta y progreso persistente.

Backend, alojamiento y dominio se decidirán en una etapa posterior, una vez que el núcleo local del combate esté funcionando y probado.

## Diseño adaptable por dispositivo

### Teléfono

En teléfonos, la referencia principal seguirá siendo una disposición **vertical**, porque encaja mejor con el uso natural del dispositivo y con el diseño que ya se había planteado.

La interfaz móvil debe:

- organizar el combate en zonas apiladas;
- mantener botones y cartas cómodos para toque;
- utilizar desplazamiento vertical cuando haga falta;
- evitar texto o controles demasiado pequeños;
- funcionar sin teclado ni ratón.

### Computadora

En computadora, la misma aplicación web puede aprovechar una pantalla más ancha.

La interfaz puede:

- distribuir paneles en columnas;
- mostrar más información simultáneamente cuando sea útil;
- aprovechar ratón y panel táctil;
- admitir accesos de teclado como mejora opcional, sin hacerlos obligatorios para jugar.

La versión de computadora no debe convertirse en un juego distinto: comparte reglas, cuenta, progreso, mazos y partidas con la versión móvil.

## Interacción

Las acciones principales deben poder realizarse tanto con toque como con clic, incluyendo:

- seleccionar cartas;
- seleccionar movimientos;
- cambiar de carta activa;
- usar objetos;
- navegar menús;
- consultar AYUDA/TABLA;
- reclamar recompensas;
- gestionar colección y mazos.

No se debe depender de pasar el cursor sobre un elemento para acceder a información esencial, porque esa interacción no existe de la misma forma en pantallas táctiles.

## Rendimiento

Guatemala 1.0 debe priorizar estabilidad, tiempos de carga razonables y fluidez sobre efectos visuales costosos.

Durante el desarrollo deberán definirse y medir objetivos para:

- tiempo de carga inicial;
- tamaño de recursos descargados;
- memoria utilizada;
- consumo de red durante partidas;
- respuesta de la interfaz en teléfonos modestos;
- funcionamiento en navegadores de escritorio comunes.

Las animaciones y efectos cosméticos no deben comprometer el funcionamiento del combate.

## Compatibilidad de navegadores

Antes de publicar Guatemala 1.0 se deberá definir una lista mínima de navegadores y versiones compatibles.

Como principio, el proyecto debe evitar depender innecesariamente de funciones exclusivas de un único navegador.

## Juego online, cuenta y progreso

Atlas Rivals está planteado como un juego con partidas online y progresión persistente.

El diseño técnico deberá contemplar:

- identificación/cuenta del jugador;
- colección y mazos persistentes;
- progreso de Camino de Estrellas, Pase, misiones y Maestría;
- Oro y recompensas;
- manejo de conexión, reconexión y abandono en combate;
- acceso a la misma cuenta desde teléfono o computadora.

La arquitectura concreta de autenticación, backend y almacenamiento todavía no está decidida y no bloquea el comienzo del núcleo local.

## Instalación y PWA

Convertir Atlas Rivals en una PWA instalable puede evaluarse más adelante, pero **no es un requisito para comenzar Guatemala 1.0**.

La prioridad inicial es que el juego funcione correctamente desde el navegador.

## Monetización

La monetización no es la prioridad del núcleo inicial.

El orden de prioridades es:

1. juego funcional;
2. combate divertido;
3. balance razonable;
4. experiencia cómoda en móvil y computadora;
5. estabilidad y rendimiento;
6. progresión/economía saludable;
7. monetización, cuando el proyecto esté preparado para diseñarla con cuidado.

## Regla para Guatemala 1.0

Toda decisión de arquitectura o interfaz debe responder primero a esta pregunta:

> ¿Funciona correctamente desde un navegador tanto en un teléfono como en una computadora?

Si una solución obliga a mantener dos juegos distintos o funciona bien en un dispositivo pero vuelve incómodo el otro, debe revisarse antes de adoptarla como base de Guatemala 1.0.
