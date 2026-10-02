# Arquitectura técnica — Guatemala 1.0

Este documento define la base técnica con la que comenzará la programación de Atlas Rivals.

## 1. Tecnologías elegidas

- **Node.js 24 LTS** como entorno de desarrollo.
- **npm** como gestor de paquetes.
- **TypeScript** como lenguaje principal.
- **React** para construir la interfaz web.
- **Vite** como herramienta de desarrollo y compilación.
- **Vitest** para pruebas automáticas del núcleo.
- **CSS y CSS Modules** para estilos, evitando añadir una librería visual pesada en la primera etapa.

La prioridad es mantener una base sencilla, rápida de aprender y fácil de mantener.

## 2. Decisión sobre el motor del juego

Atlas Rivals no utilizará inicialmente un motor de videojuegos como Phaser.

El combate es por turnos y basado en cartas, por lo que el núcleo puede implementarse como lógica TypeScript independiente de la interfaz. React será responsable de mostrar pantallas, cartas, botones, animaciones y estados visuales, pero no contendrá las reglas principales del combate.

Esto permite:

- probar las reglas sin abrir la interfaz;
- reutilizar el mismo motor en móvil y computadora dentro de la aplicación web;
- evitar que cambios visuales rompan el combate;
- añadir backend y juego online posteriormente sin reescribir las entidades centrales.

## 3. Regla principal de dependencias

La dirección de dependencias será:

`datos -> dominio -> motor -> interfaz`

La interfaz puede utilizar el motor y el dominio, pero el dominio y el motor no deben depender de React.

Los datos de contenido describen cartas, movimientos, objetos y demás elementos del juego; no deben contener lógica de interfaz.

## 4. Estructura inicial del proyecto

```text
Atlas-Rivals/
├─ public/
│  └─ recursos/
├─ src/
│  ├─ app/
│  │  ├─ App.tsx
│  │  └─ main.tsx
│  ├─ dominio/
│  │  ├─ cartas/
│  │  ├─ movimientos/
│  │  ├─ estados/
│  │  ├─ objetos/
│  │  ├─ tipos/
│  │  ├─ mazos/
│  │  ├─ jugadores/
│  │  └─ partida/
│  ├─ motor/
│  │  ├─ combate/
│  │  └─ reglas/
│  ├─ datos/
│  │  └─ guatemala/
│  │     ├─ cartas/
│  │     ├─ movimientos/
│  │     └─ objetos/
│  ├─ interfaz/
│  │  ├─ componentes/
│  │  ├─ pantallas/
│  │  └─ estilos/
│  └─ utilidades/
├─ pruebas/
│  ├─ dominio/
│  └─ motor/
├─ docs/
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

La estructura puede crecer cuando aparezcan necesidades reales; no se crearán carpetas o capas adicionales sin una razón concreta.

## 5. Responsabilidad de cada área

### `src/dominio`

Contiene las entidades y estructuras que representan el juego:

- `CartaBase` y `CartaEnPartida`;
- `Movimiento` y `MovimientoEnPartida`;
- `Estado` y `EstadoAplicado`;
- `Objeto` y `ObjetoEnPartida`;
- `Tipo`;
- `Mazo` y `MazoEnPartida`;
- `JugadorEnPartida`;
- `Partida` y estructuras relacionadas.

No debe importar React ni componentes visuales.

### `src/motor`

Contiene las reglas que transforman el estado de una partida:

- cálculo de efectividad y daño;
- aplicación de curación;
- Energía;
- usos de movimientos;
- aplicación y resolución de estados;
- objetos;
- tiradas y orden de ejecución;
- resolución de acciones;
- derrota de cartas;
- condición de victoria.

### `src/datos`

Contiene las definiciones concretas del contenido del juego.

Para Guatemala 1.0 comenzará con el contenido necesario para el mazo inicial y crecerá posteriormente con nuevas cartas y movimientos diseñados por el creador del juego.

### `src/interfaz`

Contiene React y la presentación:

- pantallas;
- componentes;
- cartas visuales;
- controles;
- adaptación responsive;
- estilos;
- animaciones futuras.

No debe decidir reglas de combate por su cuenta.

### `pruebas`

Contiene pruebas automáticas del dominio y del motor.

## 6. Primer conjunto de pruebas

Antes de construir una interfaz completa, el núcleo deberá comprobar al menos:

1. existencia de los 18 tipos;
2. relaciones ordinarias de tipos y simetría;
3. excepciones de Eclipse, Mente, Espectro, Enjambre y Dragón contra sí mismos;
4. multiplicadores para cartas de uno y dos tipos;
5. fallo por doble neutral;
6. redondeo `.5` hacia arriba;
7. Energía inicial de 3, recuperación de +2 y máximo de 10;
8. consumo de Energía al usar movimientos;
9. usos limitados e ilimitados de `MovimientoEnPartida`;
10. Vida, daño, curación y derrota a 0 Vida;
11. aplicación y expiración básica de Quemadura y Parálisis;
12. condición de victoria al quedarse un jugador sin cartas vivas.

Las pruebas de interfaz se añadirán cuando existan componentes que realmente necesiten probarse.

## 7. Orden de implementación recomendado

### Etapa 1 — base del proyecto

- crear proyecto React + TypeScript con Vite;
- instalar/configurar Vitest;
- crear estructura de carpetas;
- dejar comandos de desarrollo, compilación y pruebas funcionando.

### Etapa 2 — tipos y reglas numéricas

- `Tipo`;
- `TablaTipos`;
- multiplicadores;
- redondeo;
- pruebas completas de tipos.

### Etapa 3 — entidades básicas

- movimientos;
- estados;
- cartas;
- objetos;
- mazos.

### Etapa 4 — motor de combate

- jugadores en partida;
- Energía;
- rondas;
- dados;
- selección de acciones;
- resolución;
- victoria.

### Etapa 5 — contenido de Guatemala

- traducir el mazo inicial y sus movimientos a datos reales;
- probar partidas simuladas mediante el motor.

### Etapa 6 — interfaz jugable

- conectar React con el motor;
- crear primera pantalla de combate funcional;
- adaptar posteriormente teléfono y computadora.

## 8. Backend y juego online

Backend, autenticación, base de datos y sincronización online no son necesarios para comenzar el núcleo.

Primero se construirá y probará el motor local. Cuando el comportamiento sea estable, se diseñará el servidor de manera que sea la autoridad de las partidas online y valide las acciones de los jugadores.

## 9. Primera meta de programación

El primer `Feat:` debe dejar un proyecto ejecutable con TypeScript, React, Vite y Vitest, seguido inmediatamente por la implementación de `Tipo` y `TablaTipos` con pruebas automáticas.

A partir de esta decisión ya no quedan bloqueadores conceptuales para comenzar a programar el núcleo de Guatemala 1.0.
