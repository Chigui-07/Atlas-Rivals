# Atlas Rivals

Juego de estrategia y colección de cartas inspirado en países, su naturaleza, lugares, cultura, gastronomía y otros elementos representativos.

## Versión activa: Guatemala 1.0

**Rama:** `guatemala-1.0`  
**Estado:** documentación y diseño técnico previo al desarrollo.  
**País piloto:** Guatemala.  
**Plataforma objetivo inicial:** Web.  
**Dispositivos objetivo:** teléfonos y computadoras mediante navegador.  
**Diseño móvil principal:** vertical.  

`main` se mantiene como la rama estable. El desarrollo de Guatemala 1.0 se realiza exclusivamente en su rama hasta que la versión esté preparada para integrarse.

## Documentación

- [`docs/GUATEMALA_1_0.md`](docs/GUATEMALA_1_0.md) — alcance y estado de la versión.
- [`docs/PLATAFORMA_WEB.md`](docs/PLATAFORMA_WEB.md) — dirección web adaptable, móvil/computadora, interacción y rendimiento.
- [`docs/GAMEPLAY.md`](docs/GAMEPLAY.md) — reglas de partida, rondas, movimientos, Energía, objetos, estados y desconexiones.
- [`docs/MODELO_TECNICO.md`](docs/MODELO_TECNICO.md) — decisiones del modelo técnico completo del núcleo de combate.
- [`docs/OBJECTS_FIRST_TEST.md`](docs/OBJECTS_FIRST_TEST.md) — catálogo y valores provisionales de objetos para la primera prueba.
- [`docs/TYPES.md`](docs/TYPES.md) — tabla final auditada de 18 tipos, multiplicadores y reglas de doble tipo.
- [`docs/STARTER_DECK.md`](docs/STARTER_DECK.md) — mazo inicial fijo del tutorial de Guatemala 1.0.
- [`docs/PROGRESSION_ECONOMY.md`](docs/PROGRESSION_ECONOMY.md) — rarezas, sobres, Oro, Camino de Estrellas, maestría, misiones, Pase y tienda.
- [`docs/INTERFACE.md`](docs/INTERFACE.md) — tutorial, menú e interfaz de partida.
- [`docs/PRE_PROGRAMMING_CHECKLIST.md`](docs/PRE_PROGRAMMING_CHECKLIST.md) — lista de control y bloqueadores reales antes del primer `Feat:`.
- [`docs/GITHUB_WORKFLOW.md`](docs/GITHUB_WORKFLOW.md) — ramas, commits y mantenimiento del repositorio.

## Principios de Guatemala 1.0

- Guatemala es el único país del set piloto inicial.
- Las cartas pueden representar lugares, animales, cultura, gastronomía y otras categorías relacionadas con el país.
- Guatemala no tiene que quedar “completada” en esta versión; futuras versiones pueden añadir nuevas cartas guatemaltecas junto con otros países.
- El objetivo de esta rama es validar el núcleo del juego antes de ampliar el contenido.
- El mazo inicial fijo del tutorial ya está definido; el catálogo completo de Guatemala 1.0 todavía puede crecer durante esta rama.
- Guatemala 1.0 se desarrolla como **juego web adaptable**, con una sola experiencia accesible desde teléfono y computadora.
- En móvil se mantiene una disposición vertical como referencia; en computadora la interfaz podrá aprovechar mayor anchura sin cambiar las reglas ni crear una versión separada.
- La interacción esencial debe funcionar tanto mediante toque como mediante clic.
- La monetización no se priorizará por encima de jugabilidad, balance, estabilidad y rendimiento.

## Estado previo a programación

### Confirmado y documentado

- Plataforma objetivo inicial: Web.
- Acceso desde navegador en teléfonos y computadoras.
- Diseño responsive/adaptable.
- Una misma cuenta, colección, progreso y reglas para móvil y computadora.
- Mazo de 6 cartas sin copias exactas repetidas y hasta 3 objetos.
- Dos movimientos activos por carta y Poder de Maestría como tercer movimiento especial desbloqueable.
- Energía inicial 3, +2 por ronda y máximo 10.
- Tabla final auditada de 18 tipos, multiplicadores y combinaciones para cartas de doble tipo.
- Estados base Quemadura y Parálisis con parámetros variables según su fuente.
- Separación técnica entre `CartaBase` y `CartaEnPartida`.
- `Movimiento` y `MovimientoEnPartida` definidos conceptualmente.
- `Estado` y `EstadoAplicado` definidos conceptualmente.
- `Objeto` y `ObjetoEnPartida` definidos conceptualmente.
- `Tipo` y una fuente central `TablaTipos` definidos conceptualmente.
- `Mazo`, `MazoEnPartida`, `JugadorEnPartida` y `Partida` definidos conceptualmente.
- Soporte previsto para habilidades pasivas de carta.
- Flujo principal de partida definido desde conexión hasta victoria.
- Antes del combate se muestra la composición de cartas del mazo rival, pero se ocultan movimientos, Poderes de Maestría y objetos.
- Carta activa inicial seleccionada en secreto y revelada simultáneamente.
- Cada ronda usa dados para determinar el orden de ejecución.
- Ambos jugadores eligen su acción antes de ejecutar la ronda.
- Acciones base: atacar, usar Poder de Maestría, usar objeto, cambiar carta o abandonar.
- Resolución definida para derrota de una carta antes de ejecutar la segunda acción.
- Temporizador de 20 segundos para seleccionar acción.
- Condición principal de victoria: dejar al rival sin cartas vivas.
- Mazo inicial fijo del tutorial.
- Objetos de primera prueba definidos.
- Rarezas, repetidas, sobres, Oro, Camino de Estrellas, Maestría, misiones, Pase y tienda diseñados a nivel general.
- Desconexiones, derrota por abandono y reglas base de reconexión.
- Reputación/antifarmeo a nivel de reglas, con fórmula detallada pendiente.
- Convenciones de ramas y commits en español.

### Bloqueadores reales antes del primer `Feat:` del núcleo

Quedan únicamente **3 decisiones mínimas** antes de comenzar a programar el núcleo:

1. cerrar el nombre definitivo de la tercera categoría de movimientos;
2. elegir la tecnología concreta del cliente/núcleo web;
3. definir la estructura inicial del código y el conjunto mínimo de pruebas.

El catálogo adicional de cartas y movimientos, backend, autenticación, alojamiento, UI final, economía avanzada, reputación detallada y otros sistemas pueden desarrollarse después de iniciar el núcleo.

## Bitácora — Guatemala 1.0

### 2026-10-02

- Cerrado el flujo principal de `Partida`.
- Definido que el combate comienza cuando ambos jugadores terminan de conectarse.
- Añadida vista previa del mazo rival mostrando cartas, pero ocultando movimientos, Poderes de Maestría y objetos.
- Conservada la selección secreta y revelación simultánea de la carta activa inicial.
- Redefinidos los dados como sistema de orden de ejecución de cada ronda.
- Establecido que ambos jugadores eligen su acción antes de comenzar a resolver la ronda.
- Definidas como acciones base: atacar, usar Poder de Maestría, usar objeto, cambiar carta y abandonar.
- Cerrada la regla de derrota durante una ronda y reemplazo obligatorio de carta.
- Integrado el Poder de Maestría como tercer movimiento especial oculto, de 0 Energía y 1 uso por partida por carta.
- Diseñados `Movimiento` y `MovimientoEnPartida`.
- Diseñados `Estado` y `EstadoAplicado`.
- Diseñados `Objeto` y `ObjetoEnPartida`.
- Diseñados `Tipo` y la fuente técnica central `TablaTipos`.
- Reducida la preparación restante a 3 bloqueadores reales antes del primer `Feat:` del núcleo.

### 2026-10-01

- Cambiada la plataforma principal de Android nativo a **Web**.
- Definido que Atlas Rivals será accesible desde navegador tanto en teléfono como en computadora.
- Establecida una única interfaz responsive/adaptable en lugar de versiones separadas por plataforma.
- Conservada la disposición vertical como referencia para la experiencia móvil.
- Añadido soporte conceptual para interacción mediante toque y clic.
- Google Play Store deja de ser el objetivo inicial de publicación; alojamiento y dominio web quedan pendientes de decisión técnica.
- Una PWA instalable queda como posibilidad futura, no como requisito inicial.
- Iniciado el modelo técnico formal del combate.
- Separada la definición permanente `CartaBase` del estado temporal `CartaEnPartida`.
- Definido soporte opcional para `HabilidadPasiva` y separación entre efectos que una carta puede provocar y estados que actualmente la afectan.
- Acordado que las cartas y movimientos concretos serán diseñados por el creador del juego y luego traducidos a la estructura técnica.

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
- Definida inicialmente una dirección Android mobile-first, posteriormente reemplazada por la decisión Web del 2026-10-01.
- Cerrado el catálogo de objetos de la primera prueba con valores provisionales y límites de copias.
- Añadidos Vendaje, Botiquín, Kit de Emergencias, Protector, Impulso y Cambio rápido como objetos iniciales.
- Definido que los parámetros de los estados pertenecen al movimiento que los aplica y pueden variar entre movimientos.

**Próximo objetivo:** cerrar los 3 bloqueadores reales del primer `Feat:` y comenzar la implementación del núcleo de combate.
