# Atlas Rivals

Juego de estrategia y colección de cartas inspirado en países, su naturaleza, lugares, cultura, gastronomía y otros elementos representativos.

## Versión activa: Guatemala 1.0

**Rama:** `guatemala-1.0`  
**Estado:** documentación y planificación previa al desarrollo.  
**País piloto:** Guatemala.  
**Plataforma objetivo inicial:** Android.  
**Orientación principal:** vertical (portrait).  
**Primera publicación objetivo:** Google Play Store.

`main` se mantiene como la rama estable. El desarrollo de Guatemala 1.0 se realiza exclusivamente en su rama hasta que la versión esté preparada para integrarse.

## Documentación

- [`docs/GUATEMALA_1_0.md`](docs/GUATEMALA_1_0.md) — alcance y estado de la versión.
- [`docs/PLATFORM_ANDROID.md`](docs/PLATFORM_ANDROID.md) — dirección mobile-first, orientación vertical, controles táctiles, rendimiento y publicación Android.
- [`docs/GAMEPLAY.md`](docs/GAMEPLAY.md) — reglas de partida, turnos, movimientos, Energía, objetos, estados y desconexiones.
- [`docs/TYPES.md`](docs/TYPES.md) — tabla final auditada de 18 tipos, multiplicadores y reglas de doble tipo.
- [`docs/STARTER_DECK.md`](docs/STARTER_DECK.md) — mazo inicial fijo del tutorial de Guatemala 1.0.
- [`docs/PROGRESSION_ECONOMY.md`](docs/PROGRESSION_ECONOMY.md) — rarezas, sobres, Oro, Camino de Estrellas, maestría, misiones, Pase y tienda.
- [`docs/INTERFACE.md`](docs/INTERFACE.md) — tutorial, menú e interfaz de partida.
- [`docs/PRE_PROGRAMMING_CHECKLIST.md`](docs/PRE_PROGRAMMING_CHECKLIST.md) — lista de control antes de comenzar el núcleo.
- [`docs/GITHUB_WORKFLOW.md`](docs/GITHUB_WORKFLOW.md) — ramas, commits y mantenimiento del repositorio.

## Principios de Guatemala 1.0

- Guatemala es el único país del set piloto inicial.
- Las cartas pueden representar lugares, animales, cultura, gastronomía y otras categorías relacionadas con el país.
- Guatemala no tiene que quedar “completada” en esta versión; futuras versiones pueden añadir nuevas cartas guatemaltecas junto con otros países.
- El objetivo de esta rama es validar el núcleo del juego antes de ampliar el contenido.
- El mazo inicial fijo del tutorial ya está definido; el catálogo completo de Guatemala 1.0 todavía puede crecer durante esta rama.
- Guatemala 1.0 se diseña **mobile-first para teléfonos Android en orientación vertical**; todas las decisiones técnicas y de interfaz deben tomar el uso táctil, las limitaciones de un teléfono y el espacio vertical como referencia principal.
- Una versión para PC queda fuera del alcance inicial.
- La monetización no se priorizará por encima de jugabilidad, balance, estabilidad y rendimiento.

## Estado previo a programación

### Confirmado y documentado

- Plataforma objetivo inicial: Android.
- Primera publicación objetivo: Google Play Store.
- Orientación principal: vertical (portrait).
- Interacción principal completamente táctil.
- Estructura general de combate por rondas y turnos.
- Mazo de 6 cartas sin copias exactas repetidas y hasta 3 objetos.
- Dos movimientos activos por carta y reglas de movimientos propios/equipables.
- Energía inicial 3, +2 por ronda y máximo 10.
- Tabla final auditada de 18 tipos, multiplicadores y combinaciones para cartas de doble tipo.
- Estados Quemadura y Parálisis.
- Mazo inicial fijo del tutorial.
- Rarezas, repetidas y sobres.
- Oro y recompensas principales.
- Camino de Estrellas y contenido Estelar.
- Maestría como sistema, con su desbloqueo numérico aún provisional.
- Misiones diarias/semanales y Pase de Batalla.
- Tienda, tutorial y menú principal.
- Temporizador de 20 segundos, desconexiones y derrota por abandono.
- Reputación/antifarmeo a nivel de reglas, con fórmula detallada pendiente.
- Convenciones de ramas y commits.

### Pendiente antes de implementar balance completo

- Definir objetivos técnicos medibles para rendimiento en celulares modestos.
- Diseñar la distribución concreta de la interfaz vertical de combate y menús.
- Convertir la tabla final de tipos en una única fuente técnica de datos y añadir validaciones automáticas durante el diseño del modelo.
- Definir el catálogo adicional de cartas de Guatemala 1.0 más allá del mazo inicial.
- Definir más movimientos equipables y los objetos que entrarán en la primera implementación con sus valores definitivos.
- Decidir si existirá un límite de copias del mismo objeto dentro de los hasta 3 espacios.
- Cerrar la fórmula numérica de reputación/antifarmeo.
- Cerrar el objetivo final e hitos exactos del desbloqueo de Maestría.
- Elegir posteriormente la arquitectura concreta para cuenta, backend y progreso persistente.

## Bitácora — Guatemala 1.0

### 2026-09-30

- Creada la rama `guatemala-1.0` desde `main`.
- Organizada la documentación base antes de comenzar a programar.
- Migradas y contrastadas las reglas finales del diseño previo.
- Añadida una checklist formal previa a programación.
- Documentado el mazo inicial fijo del tutorial.
- Corregidos detalles de rondas, estados, misiones, tipos y objetos después de contrastarlos con el diseño anterior.
- Transcrita íntegramente la tabla final v0.2 de los 18 tipos en `TYPES.md`.
- Verificada la simetría y consistencia de todas las relaciones entre tipos distintos.
- Documentados los casos especiales de Eclipse, Mente, Espectro, Enjambre y Dragón contra sí mismos.
- Cerradas las combinaciones de multiplicadores para cartas objetivo de dos tipos, incluida la regla especial de doble neutral.
- Definido Android como plataforma principal de desarrollo y Google Play Store como primera publicación objetivo.
- Establecido el enfoque mobile-first: controles táctiles, UI para pantallas pequeñas, rendimiento en teléfonos modestos, partidas online relativamente cortas y progreso persistente.
- Definida la orientación vertical como formato principal de toda la experiencia móvil.
- PC queda como posibilidad futura, fuera del alcance inicial.
- Próximo objetivo: cerrar los objetos de la primera prueba y diseñar el modelo técnico y los primeros prototipos de interfaz vertical.
