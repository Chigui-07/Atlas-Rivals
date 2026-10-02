# Checklist previa a programación — Guatemala 1.0

Esta lista convierte las decisiones abiertas en tareas concretas. No reemplaza los documentos de diseño: indica qué falta cerrar antes de implementar el núcleo sin inventar reglas en el código.

## 1. Reglas base

- [x] Mazo de 6 cartas sin copias exactas repetidas.
- [x] 2 movimientos activos por carta.
- [x] Al menos 1 movimiento ilimitado por carta.
- [x] Hasta 3 objetos por partida.
- [x] Máximo 2 unidades del mismo objeto, salvo límites especiales.
- [x] Energía: 3 inicial, +2 al inicio de cada ronda, máximo 10.
- [x] Mostrar antes del combate la composición de cartas del mazo rival, ocultando movimientos y objetos.
- [x] Selección secreta y revelación simultánea de la carta activa inicial.
- [x] Dado al inicio de cada ronda para decidir el orden de ejecución.
- [x] Si los dados empatan, repetir las tiradas.
- [x] Ambos jugadores seleccionan su acción antes de comenzar la resolución de la ronda.
- [x] Acciones base: atacar, usar objeto, cambiar carta o abandonar.
- [x] Las acciones se ejecutan según el orden fijado por los dados.
- [x] Cambio de carta consume la acción de la ronda.
- [x] Uso de objeto consume la acción de la ronda.
- [x] Temporizador de 20 segundos para seleccionar acción.
- [x] Pausa por desconexión y límite de 2 minutos.
- [x] Rendición, abandono o desconexión no recuperada = derrota.
- [x] Sin empates.
- [x] Si la primera acción derrota la carta activa del jugador que iba segundo, su acción seleccionada se cancela.
- [x] Si al jugador derrotado le quedan cartas vivas, la ronda termina y en la nueva ronda selecciona obligatoriamente otra carta activa sin consumir su acción.
- [x] Si la carta del segundo jugador sigue viva, su acción se resuelve usando el estado actualizado del combate.
- [ ] Definir cómo se integra el Poder de Maestría en el flujo de selección simultánea.

## 2. Sistema de tipos — cerrado a nivel de diseño

- [x] Definir los 18 tipos oficiales.
- [x] Definir multiplicadores de efectividad.
- [x] Definir redondeo del daño.
- [x] Cerrar la tabla v0.2 en el diseño previo.
- [x] Definir la regla especial de mismo tipo para Eclipse, Mente, Espectro, Enjambre y Dragón.
- [x] Transcribir íntegramente la matriz v0.2 al repositorio.
- [x] Verificar simetría y consistencia de la tabla transcrita.
- [ ] Convertir la tabla en una única fuente técnica de datos para combate y AYUDA/TABLA.
- [ ] Añadir validaciones automáticas de simetría, excepciones y combinaciones de doble tipo.

**Criterio de diseño cumplido:** la matriz completa ya existe versionada en `TYPES.md` y no depende del recuerdo del chat.

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

**Nota:** la creación de nuevas cartas y movimientos se realizará después de cerrar el modelo técnico del combate. El creador del juego define cada carta y movimiento; la implementación técnica debe traducir ese diseño al modelo sin inventar contenido nuevo.

## 5. Movimientos y compatibilidad

- [x] Categorías iniciales de movimientos definidas a nivel de diseño.
- [x] Movimientos propios no transferibles y sí desequipables.
- [x] Movimientos equipables intercambiables entre cartas compatibles.
- [x] Movimientos ofensivos equipables requieren compartir tipo.
- [x] Curativos son Normal y solo para cartas compatibles con curación.
- [ ] Cerrar el nombre definitivo de la tercera categoría de movimientos.
- [ ] Definir catálogo inicial de movimientos equipables más allá del mazo inicial.
- [ ] Registrar explícitamente el tipo y la categoría de cada movimiento en los datos.

## 6. Estados y efectos

- [x] Estados base confirmados: Quemadura y Parálisis.
- [x] El comportamiento general pertenece al tipo de estado.
- [x] La probabilidad, duración e intensidad pueden variar según el movimiento que aplique el estado.
- [x] Cada movimiento con efecto de estado debe guardar sus parámetros concretos de aplicación.
- [x] Hervor Intenso: Quemadura de 1 de daño al final de los próximos 2 turnos; no se acumula y reaplicarla reinicia la duración.
- [x] Golpe Ceremonial: 15% de probabilidad de Parálisis; al activarse hace perder la próxima acción.
- [x] Diferenciar entre una fuente capaz de provocar un estado y una carta que actualmente está sufriendo ese estado.
- [ ] Diseñar técnicamente cómo representar los parámetros variables de cada efecto de estado dentro de `Movimiento` y `Estado`.

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
- [ ] Elegir tecnología concreta del cliente web.
- [ ] Definir tamaños/criterios mínimos de zonas táctiles.
- [ ] Definir puntos de adaptación responsive.
- [ ] Definir compatibilidad mínima de navegadores.
- [ ] Definir objetivos medibles de rendimiento para teléfonos modestos y computadoras comunes.
- [ ] Definir posteriormente autenticación, backend y almacenamiento persistente.
- [ ] Elegir alojamiento y dominio cuando corresponda.
- [ ] Medir la duración real de partidas y fijar un objetivo de sesión después de las primeras pruebas.

La dirección completa está documentada en `PLATAFORMA_WEB.md`.

## 12. Modelo técnico — siguiente objetivo

Con tipos, mazo inicial, estados, objetos y plataforma ya documentados, el siguiente paso es diseñar el modelo técnico del combate:

- [x] Separar la carta permanente `CartaBase` del estado temporal `CartaEnPartida`.
- [x] Definir que `CartaEnPartida` referencia a `CartaBase` y guarda Vida actual, movimientos activos/usos, estados que la afectan, efectos temporales y estado activa/derrotada.
- [x] Definir soporte para `HabilidadPasiva` opcional en `CartaBase`.
- [x] Separar las habilidades o movimientos capaces de causar estados de los estados que actualmente afectan a `CartaEnPartida`.
- [x] Diseñar `Mazo` y `MazoEnPartida` a nivel conceptual.
- [x] Diseñar `JugadorEnPartida` a nivel conceptual, incluyendo nombre de usuario visible.
- [x] Diseñar el flujo principal de `Partida`: conexión, vista de mazos, carta inicial, dados, selección simultánea, resolución y victoria.
- [x] Definir la resolución cuando la primera acción derrota la carta activa antes de la segunda acción.
- [ ] Terminar detalles de implementación de `CartaBase`, `CartaEnPartida` y `HabilidadPasiva` cuando se elija la tecnología del núcleo.
- [ ] Diseñar entidad `Movimiento` incluyendo su categoría.
- [ ] Diseñar entidad `Tipo` y matriz de efectividad.
- [ ] Diseñar entidad `Objeto`.
- [ ] Diseñar entidad `Estado`.
- [ ] Separar datos de contenido de la lógica de combate.
- [ ] Mantener el modelo independiente de la interfaz responsive.
- [ ] Crear la fuente técnica única de tipos compartida por combate y AYUDA/TABLA.
- [ ] Contemplar persistencia de cuenta y progreso en las fronteras del modelo/servicios.
- [ ] Definir pruebas mínimas para tipos, daño, Energía, rondas, objetos, estados, mazos y condición de victoria.

Las decisiones técnicas ya cerradas están documentadas en `MODELO_TECNICO.md`.

## Orden recomendado de cierre

1. ~~Transcribir tabla v0.2.~~ ✅ Completado.
2. ~~Cerrar objetos de la primera prueba.~~ ✅ Completado.
3. ~~Definir plataforma y dispositivos objetivo.~~ ✅ Web adaptable para móvil y computadora.
4. **Diseñar modelo técnico del combate independiente de la interfaz.** ← en progreso.
5. Crear pruebas del modelo y de las reglas numéricas.
6. Elegir la estructura técnica del cliente web y comenzar el primer `Feat:` del núcleo.

Los sistemas de progresión, tienda, Pase y Maestría pueden implementarse después del núcleo de combate, respetando siempre su documentación antes de codificar cada sistema.
