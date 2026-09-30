# Atlas Rivals

Juego de estrategia y colección de cartas inspirado en países, su naturaleza, lugares, cultura, gastronomía y otros elementos representativos.

## Versión activa: Guatemala 1.0

**Rama:** `guatemala-1.0`  
**Estado:** documentación y planificación previa al desarrollo.  
**País piloto:** Guatemala.

`main` se mantiene como la rama estable. El desarrollo de Guatemala 1.0 se realiza exclusivamente en su rama hasta que la versión esté preparada para integrarse.

## Documentación

- [`docs/GUATEMALA_1_0.md`](docs/GUATEMALA_1_0.md) — alcance y estado de la versión.
- [`docs/GAMEPLAY.md`](docs/GAMEPLAY.md) — reglas de partida, cartas, movimientos, Energía, objetos y desconexiones.
- [`docs/TYPES.md`](docs/TYPES.md) — sistema de 18 tipos, multiplicadores y auditoría de la tabla v0.2.
- [`docs/PROGRESSION_ECONOMY.md`](docs/PROGRESSION_ECONOMY.md) — rarezas, sobres, Oro, Camino de Estrellas, maestría, misiones, Pase y tienda.
- [`docs/INTERFACE.md`](docs/INTERFACE.md) — tutorial, menú e interfaz de partida.
- [`docs/GITHUB_WORKFLOW.md`](docs/GITHUB_WORKFLOW.md) — ramas, commits y mantenimiento del repositorio.
- [`docs/PRE_PROGRAMMING_CHECKLIST.md`](docs/PRE_PROGRAMMING_CHECKLIST.md) — decisiones pendientes y puertas que deben cerrarse antes de programar el núcleo.

## Principios de Guatemala 1.0

- Guatemala es el único país del set piloto inicial.
- Las cartas pueden representar lugares, animales, cultura, gastronomía y otras categorías relacionadas con el país.
- Guatemala no tiene que quedar “completada” en esta versión; futuras versiones pueden añadir nuevas cartas guatemaltecas junto con otros países.
- El objetivo de esta rama es validar el núcleo del juego antes de ampliar el contenido.
- Las cartas, movimientos y Poderes de Maestría específicos se definirán dentro del desarrollo de esta rama.

## Estado previo a programación

### Confirmado

- Estructura general de combate.
- Mazo de 6 cartas distintas y 3 objetos.
- Máximo de 2 copias del mismo objeto dentro de los 3 espacios.
- Vida, daño, movimientos y Energía.
- 18 tipos y multiplicadores de efectividad.
- Rarezas, sobres y economía básica.
- Camino de Estrellas, misiones y Pase de Batalla.
- Tienda, tutorial y menú principal.
- Temporizador de turno, desconexiones y derrota por abandono.
- Convenciones de ramas y commits.

### Debe cerrarse antes de implementar balance

- Auditoría completa de la matriz v0.2 de tipos: existen relaciones recuperadas que contradicen cambios confirmados posteriormente.
- Lista inicial de cartas de Guatemala y estadísticas concretas de cada una.
- Lista inicial de movimientos y compatibilidades.
- Valores finales de algunos estados y efectos especiales.
- Reglas numéricas definitivas de reputación/antifarmeo.
- Valores finales del sistema de Maestría, actualmente base conceptual/provisional.

La lista de control detallada está en [`docs/PRE_PROGRAMMING_CHECKLIST.md`](docs/PRE_PROGRAMMING_CHECKLIST.md).

## Bitácora — Guatemala 1.0

### 2026-09-30

- Creada la rama `guatemala-1.0` desde `main`.
- Organizada la documentación base antes de comenzar a programar.
- Migradas las reglas confirmadas del diseño previo.
- Detectada una inconsistencia en la tabla v0.2 de tipos; queda bloqueada para implementación hasta auditarla.
- Recuperada y documentada la regla de objetos: máximo 2 copias del mismo objeto dentro de los 3 espacios.
- Añadida una checklist formal de decisiones pendientes antes de iniciar el núcleo del juego.
- Próximo objetivo: cerrar la tabla de tipos y definir el roster inicial de Guatemala.
