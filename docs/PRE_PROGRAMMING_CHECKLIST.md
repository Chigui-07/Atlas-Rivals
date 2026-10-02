# Checklist previa a programación — Guatemala 1.0

Esta lista convierte las decisiones abiertas en tareas concretas. No reemplaza los documentos de diseño: indica qué falta cerrar antes de implementar el núcleo sin inventar reglas en el código.

## 1. Reglas base

- [x] Mazo de 6 cartas sin copias exactas repetidas.
- [x] 2 movimientos activos por carta.
- [x] Al menos 1 movimiento ilimitado por carta.
- [x] Hasta 3 objetos por partida.
- [x] Máximo 2 unidades del mismo objeto, salvo límites especiales.
- [x] Energía: 3 inicial, +2 al inicio de cada ronda, máximo 10.
- [x] Mostrar antes del combate la composición de cartas del mazo rival, ocultando movimientos, Poderes de Maestría y objetos.
- [x] Selección secreta y revelación simultánea de la carta activa inicial.
- [x] Dado al inicio de cada ronda para decidir el orden de ejecución.
- [x] Si los dados empatan, repetir las tiradas.
- [x] Ambos jugadores seleccionan su acción antes de comenzar la resolución de la ronda.
- [x] Acciones base: atacar, usar Poder de Maestría, usar objeto, cambiar carta o abandonar.
- [x] Las acciones se ejecutan según el orden fijado por los dados.
- [x] Cambio de carta consume la acción de la ronda.
- [x] Uso de objeto consume la acción de la ronda.
- [x] Uso del Poder de Maestría consume la acción de la ronda.
- [x] Poder de Maestría: tercer movimiento especial, 0 Energía y 1 uso por partida por carta.
- [x] Temporizador de 20 segundos para seleccionar acción.
- [x] Pausa por desconexión y límite de 2 minutos.
- [x] Rendición, abandono o desconexión no recuperada = derrota.
- [x] Sin empates.
- [x] Si la primera acción derrota la carta activa del jugador que iba segundo, su acción seleccionada se cancela.
- [x] Si al jugador derrotado le quedan cartas vivas, la ronda termina y en la nueva ronda selecciona obligatoriamente otra carta activa sin consumir su acción.
- [x] Si la carta del segundo jugador sigue viva, su acción se resuelve usando el estado actualizado del combate.

## 2. Sistema de tipos — cerrado a nivel de diseño

- [x] Definir los 18 tipos oficiales.
- [x] Definir multiplicadores de efectividad.
- [x] Definir redondeo del daño.
- [x] Cerrar la tabla v0.2 en el diseño previo.
- [x] Definir la regla especial de mismo tipo para Eclipse, Mente, Espectro, Enjambre y Dragón.
- [x] Transcribir íntegramente la matriz v0.2 al repositorio.
- [x] Verificar simetría y consistencia de la tabla transcrita.
- [x] Diseñar `Tipo` con identificador estable y metadatos de presentación.
- [x] Diseñar una única `TablaTipos`/fuente técnica para las relaciones ofensivas.
- [x] Definir que combate y AYUDA/TABLA usarán la misma fuente técnica.
- [ ] Implementar la fuente técnica única de tipos.
- [ ] Añadir validaciones automáticas de simetría, excepciones y combinaciones de doble tipo.

**Criterio de diseño cumplido:** la matriz completa ya existe versionada en `TYPES.md` y el modelo técnico para llevarla a código ya está definido.

## 3. Mazo inicial de Guatemala

- [x] Definir las 6 cartas del mazo inicial fijo.
- [x] Asignar rareza.
- [x] Asignar 1 o 2 tipos.
- [x] Asignar Vida.
- [x] Definir los 2 movimientos propios de cada carta.
- [x] Definir daño/curación, Energía, usos y efectos del mazo inicial.
- [x] Confirmar al menos 1 movimiento ilimitado por carta.
- [x] Documentar el mazo en `STARTER_DECK.md`.

## 4. Catálogo adicional de Guatemala

- [ ] Decidir cuántas cartas adicionales entrarán en Guatemala 1.0.
- [ ] Definir sus categorías temáticas.
- [ ] Asignar rareza, tipos, Vida y movimientos.
- [ ] Crear más movimientos equipables para probar personalización de mazos.

**Nota:** estas tareas no bloquean el comienzo del núcleo. El creador del juego define cada carta y movimiento; la implementación técnica debe traducir ese diseño al modelo sin inventar contenido nuevo.

## 5. Movimientos y compatibilidad

- [x] Categorías oficiales: Ofensivo, Curativo e Instantáneo.
- [x] Ofensivo: función principal de ataque y daño.
- [x] Curativo: puede combinar ataque y recuperación de Vida.
- [x] Instantáneo: categoría especial planificada principalmente como hechizos y con posibilidad de 3 usos por partida.
- [x] El nombre Instantáneo no implica por sí mismo una acción gratuita.
- [x] Movimientos propios no transferibles y sí desequipables.
- [x] Movimientos equipables intercambiables entre cartas compatibles.
- [x] Movimientos ofensivos equipables requieren compartir tipo.
- [x] Curativos son Normal y solo para cartas compatibles con curación.
- [x] Diseñar `Movimiento` como definición permanente.
- [x] Diseñar `MovimientoEnPartida` para usos y modificaciones temporales.
- [x] Separar `Tipo` del movimiento de la condición de contacto físico/directo.
- [x] Definir objetivo permitido del movimiento.
- [x] Definir soporte para daño, curación, coste de Energía y usos limitados/ilimitados.
- [x] Definir soporte para efectos con probabilidad, duración, intensidad y reglas de reaplicación.
- [x] Distinguir procedencia: propio de carta, equipable o Poder de Maestría.
- [ ] Definir catálogo inicial de movimientos equipables más allá del mazo inicial.
- [ ] Registrar explícitamente el tipo y la categoría de cada movimiento del contenido inicial en los datos cuando comience la implementación.

El catálogo adicional de movimientos no bloquea el primer núcleo.

## 6. Estados y efectos

- [x] Estados base confirmados: Quemadura y Parálisis.
- [x] El comportamiento general pertenece al tipo de estado.
- [x] La probabilidad, duración e intensidad pueden variar según el movimiento que aplique el estado.
- [x] Cada movimiento con efecto de estado debe guardar sus parámetros concretos de aplicación.
- [x] Hervor Intenso: Quemadura de 1 de daño al final de los próximos 2 turnos; no se acumula y reaplicarla reinicia la duración.
- [x] Golpe Ceremonial: 15% de probabilidad de Parálisis; al activarse hace perder la próxima acción.
- [x] Diferenciar entre una fuente capaz de provocar un estado y una carta que actualmente está sufriendo ese estado.
- [x] Definir conceptualmente que los parámetros variables del efecto pertenecen al movimiento que lo provoca.
- [x] Diseñar `Estado` como definición general del tipo de condición.
- [x] Diseñar `EstadoAplicado` como instancia temporal con duración, intensidad, fuente y reglas de reaplicación.

## 7. Objetos — cerrados para la primera prueba

- [x] Sistema de hasta 3 objetos por partida.
- [x] Máximo 2 unidades del mismo objeto, salvo límites especiales.
- [x] Uso de objeto consume la acción de la ronda.
- [x] Objetos no reviven cartas derrotadas.
- [x] Curaciones no superan la Vida máxima.
- [x] Vendaje: +3 Vida a la carta activa.
- [x] Botiquín: +5 Vida a cualquier carta viva.
- [x] Kit de Emergencias: +4 Vida a cualquier carta viva y elimina 1 efecto negativo.
- [x] Kit de Emergencias limitado a 1 por partida.
- [x] Protector: reduce en 3 el próximo daño recibido por la carta activa.
- [x] Impulso: +2 al daño base del próximo movimiento ofensivo antes de aplicar tipos.
- [x] Cambio rápido: cambia la carta activa por otra viva consumiendo la acción de la ronda.
- [x] Documentar el catálogo en `OBJECTS_FIRST_TEST.md`.
- [x] Diseñar `Objeto` como definición permanente con objetivo, efectos y límite de copias.
- [x] Diseñar `ObjetoEnPartida` para mantener la cantidad restante durante el combate.

## 8. Progresión y economía

- [x] Rarezas y principio de que rareza no equivale a poder.
- [x] Progresión cosmética por repetidas 5/7/10.
- [x] Oro por victoria.
- [x] Sobre Atlas y probabilidades.
- [x] Hasta 5 Sobres Atlas diarios por victoria.
- [x] Sobre de Movimientos y probabilidades.
- [x] Camino de Estrellas base.
- [x] Reglas de contenido Estelar.
- [x] Misiones diarias y semanales.
- [x] Pase de Batalla base.
- [x] Estructura de tienda.
- [ ] Definir función de copias posteriores a 10, si entra en Guatemala 1.0.
- [ ] Cerrar los valores provisionales del desbloqueo de Maestría.
- [ ] Definir el modificador de Movimiento Estelar usado por Carta Estelar.

Estas decisiones no bloquean la programación inicial del núcleo de combate.

## 9. Reputación y antifarmeo

- [x] Detectar patrones beneficiados por abandono/desconexión.
- [x] Vigilar patrones de 2 seguidos o frecuencia aproximada de cada 3 partidas.
- [x] Permitir reducción o bloqueo temporal de recompensas.
- [x] Centrar la protección especialmente en el jugador que se beneficia repetidamente del patrón.
- [ ] Definir fórmula de reputación.
- [ ] Definir ventana de análisis.
- [ ] Definir duración de sanciones.
- [ ] Definir recuperación de reputación.
- [ ] Definir reducción exacta de Oro, estrellas, sobres, misiones y fichas.

Estas decisiones no bloquean la programación inicial del núcleo de combate.

## 10. Interfaz y tutorial

- [x] Tutorial → nombre de usuario → mazo inicial fijo → partida guiada → menú completo.
- [x] Secciones del menú principal.
- [x] Validaciones mínimas antes de entrar a partida.
- [x] Información mínima de la interfaz de combate.
- [x] Pestaña AYUDA/TABLA.
- [x] UI de temporizador y reconexión.
- [x] Disposición vertical como referencia para teléfonos.
- [x] La misma interfaz debe adaptarse también a computadora.
- [x] Interacción esencial mediante toque y clic.
- [ ] Diseñar visualmente las pantallas durante la fase de UI.
- [ ] Diseñar la distribución responsive concreta del combate en móvil y computadora.

La interfaz visual completa no bloquea la implementación del modelo de combate.

## 11. Plataforma web — dirección confirmada

- [x] Plataforma inicial: Web.
- [x] Acceso desde navegador en teléfonos y computadoras.
- [x] Una sola aplicación responsive/adaptable.
- [x] Disposición móvil principal: vertical.
- [x] Controles táctiles en móvil.
- [x] Interacción mediante clic en computadora.
- [x] Misma cuenta, colección, progreso y reglas entre dispositivos.
- [x] Android nativo deja de ser requisito inicial.
- [x] Google Play Store deja de ser objetivo inicial de publicación.
- [x] PWA instalable queda como posibilidad futura, no como requisito.
- [x] Tecnología inicial: Node.js 24 LTS + npm + TypeScript + React + Vite + Vitest.
- [x] Motor de combate independiente de React.
- [ ] Definir tamaños/criterios mínimos de zonas táctiles.
- [ ] Definir puntos de adaptación responsive.
- [ ] Definir compatibilidad mínima de navegadores.
- [ ] Definir objetivos medibles de rendimiento para teléfonos modestos y computadoras comunes.
- [ ] Definir posteriormente autenticación, backend y almacenamiento persistente.
- [ ] Elegir alojamiento y dominio cuando corresponda.
- [ ] Medir la duración real de partidas y fijar un objetivo de sesión después de las primeras pruebas.

La dirección completa está documentada en `PLATAFORMA_WEB.md` y `ARQUITECTURA_TECNICA.md`. Los puntos aún pendientes de esta sección no bloquean el comienzo del núcleo.

## 12. Modelo técnico — listo para implementación

- [x] Separar la carta permanente `CartaBase` del estado temporal `CartaEnPartida`.
- [x] Definir soporte para `HabilidadPasiva` opcional en `CartaBase`.
- [x] Diseñar `Movimiento` y `MovimientoEnPartida`.
- [x] Diseñar `Estado` y `EstadoAplicado`.
- [x] Diseñar `Objeto` y `ObjetoEnPartida`.
- [x] Diseñar `Tipo` y la fuente central `TablaTipos`.
- [x] Diseñar `Mazo` y `MazoEnPartida`.
- [x] Diseñar `JugadorEnPartida`.
- [x] Diseñar el flujo principal de `Partida`.
- [x] Integrar el Poder de Maestría.
- [x] Mantener conceptualmente separados datos permanentes y estado temporal del combate.
- [x] Elegir tecnología concreta para traducir el modelo a código.
- [x] Definir estructura inicial de carpetas/módulos.
- [x] Separar datos de contenido, dominio, motor e interfaz.
- [x] Definir el conjunto mínimo de pruebas con el que comenzará el núcleo.

## 13. Estado para el primer `Feat:`

**No quedan bloqueadores conceptuales para comenzar a programar el núcleo.**

La arquitectura inicial queda documentada en `ARQUITECTURA_TECNICA.md` y establece:

- React + TypeScript + Vite para la aplicación web;
- Vitest para pruebas;
- Node.js 24 LTS y npm como entorno base;
- motor de combate independiente de React;
- carpetas separadas para dominio, motor, datos e interfaz;
- pruebas del sistema de tipos, Energía, movimientos, Vida, estados y victoria desde el inicio.

A partir de este punto ya puede comenzar el primer commit `Feat:`. La tabla de tipos, entidades y reglas se implementarán de forma incremental acompañadas por pruebas.

## Orden recomendado de cierre

1. ~~Transcribir tabla v0.2.~~ ✅ Completado.
2. ~~Cerrar objetos de la primera prueba.~~ ✅ Completado.
3. ~~Definir plataforma y dispositivos objetivo.~~ ✅ Web adaptable para móvil y computadora.
4. ~~Diseñar modelo técnico conceptual del combate.~~ ✅ Completado.
5. ~~Cerrar decisiones de tecnología, arquitectura y pruebas.~~ ✅ Completado.
6. **Comenzar a programar el núcleo con pruebas desde el inicio.** ← siguiente paso.

Los sistemas de progresión, tienda, Pase, backend, cuentas y Maestría avanzada pueden implementarse después del núcleo, respetando siempre su documentación antes de codificar cada sistema.
