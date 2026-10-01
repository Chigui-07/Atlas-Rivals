# Checklist previa a programación — Guatemala 1.0

Esta lista convierte las decisiones abiertas en tareas concretas. No reemplaza los documentos de diseño: indica qué falta cerrar antes de implementar el núcleo sin inventar reglas en el código.

## 1. Reglas base

- [x] Mazo de 6 cartas sin copias exactas repetidas.
- [x] 2 movimientos activos por carta.
- [x] Al menos 1 movimiento ilimitado por carta.
- [x] Hasta 3 objetos por partida.
- [x] Máximo 2 unidades del mismo objeto, salvo límites especiales.
- [x] Energía: 3 inicial, +2 al inicio de cada ronda, máximo 10.
- [x] Dado al inicio de cada ronda para decidir quién actúa primero.
- [x] Una acción por turno.
- [x] Cambio de carta consume turno.
- [x] Uso de objeto consume turno.
- [x] Temporizador de 20 segundos.
- [x] Pausa por desconexión y límite de 2 minutos.
- [x] Rendición, abandono o desconexión no recuperada = derrota.
- [x] Sin empates.

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

**Pendiente técnico:** al diseñar el modelo, la tabla deberá convertirse en datos consumidos por el motor y la interfaz sin duplicar lógica.

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

El mazo inicial ya permite probar el núcleo; este catálogo adicional puede crecer durante la rama.

## 5. Movimientos y compatibilidad

- [x] Movimientos propios no transferibles y sí desequipables.
- [x] Movimientos equipables intercambiables entre cartas compatibles.
- [x] Movimientos ofensivos equipables requieren compartir tipo.
- [x] Curativos son Normal y solo para cartas compatibles con curación.
- [ ] Definir catálogo inicial de movimientos equipables más allá del mazo inicial.
- [ ] Registrar explícitamente el tipo de cada movimiento en los datos.

## 6. Estados y efectos

- [x] Estados base confirmados: Quemadura y Parálisis.
- [x] El comportamiento general pertenece al tipo de estado.
- [x] La probabilidad, duración e intensidad pueden variar según el movimiento que aplique el estado.
- [x] Cada movimiento con efecto de estado debe guardar sus parámetros concretos de aplicación.
- [x] Hervor Intenso: Quemadura de 1 de daño al final de los próximos 2 turnos; no se acumula y reaplicarla reinicia la duración.
- [x] Golpe Ceremonial: 15% de probabilidad de Parálisis; al activarse hace perder la próxima acción.
- [ ] Diseñar técnicamente cómo representar los parámetros variables de cada efecto de estado dentro de `Movimiento` y `Estado`.

**Regla importante:** los valores de Hervor Intenso y Golpe Ceremonial son propios de esos movimientos; no definen valores universales para todas las Quemaduras o Parálisis futuras.

## 7. Objetos — cerrados para la primera prueba

- [x] Sistema de hasta 3 objetos por partida.
- [x] Máximo 2 unidades del mismo objeto, salvo límites especiales.
- [x] Uso de objeto consume turno.
- [x] Objetos no reviven cartas derrotadas.
- [x] Curaciones no superan la Vida máxima.
- [x] Vendaje: +3 Vida a la carta activa.
- [x] Botiquín: +5 Vida a cualquier carta viva.
- [x] Kit de Emergencias: +4 Vida a cualquier carta viva y elimina 1 efecto negativo.
- [x] Kit de Emergencias limitado a 1 por partida.
- [x] Protector: reduce en 3 el próximo daño recibido por la carta activa.
- [x] Impulso: +2 al daño base del próximo movimiento ofensivo antes de aplicar tipos.
- [x] Cambio rápido: cambia la carta activa por otra viva consumiendo la acción del turno.
- [x] Documentar el catálogo en `OBJECTS_FIRST_TEST.md`.

**Estado:** valores provisionales aceptados para la primera prueba. Cualquier cambio posterior debe tratarse como balance.

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
- [x] Orientación principal de interfaz: vertical (portrait).
- [ ] Diseñar visualmente las pantallas durante la fase de UI.
- [ ] Diseñar la distribución concreta del combate en formato vertical.

## 11. Plataforma Android — dirección confirmada

- [x] Plataforma inicial: teléfonos Android.
- [x] Primera publicación objetivo: Google Play Store.
- [x] Enfoque mobile-first para Guatemala 1.0.
- [x] Controles principales completamente táctiles.
- [x] Menús y combate diseñados para pantallas pequeñas.
- [x] Orientación principal: vertical (portrait).
- [x] Rendimiento en celulares modestos como prioridad técnica.
- [x] Cuenta y progreso persistente como requisito del producto.
- [x] PC fuera del alcance inicial.
- [x] Monetización subordinada a jugabilidad, balance y estabilidad.
- [ ] Definir tamaños/criterios mínimos de zonas táctiles durante el diseño de UI.
- [ ] Definir objetivos medibles de rendimiento para dispositivos modestos.
- [ ] Definir posteriormente tecnología de autenticación, backend y almacenamiento persistente.
- [ ] Medir la duración real de partidas y fijar un objetivo de sesión móvil después de las primeras pruebas.

La dirección completa está documentada en `PLATFORM_ANDROID.md`.

## 12. Modelo técnico — siguiente objetivo

Con tipos, mazo inicial, estados y objetos de primera prueba ya documentados, el siguiente paso es diseñar el modelo técnico del combate:

- [ ] Diseñar entidad `Carta`.
- [ ] Diseñar entidad `Movimiento`.
- [ ] Diseñar entidad `Tipo` y matriz de efectividad.
- [ ] Diseñar entidad `Objeto`.
- [ ] Diseñar entidad `Estado`.
- [ ] Diseñar entidad `Mazo` y sus validaciones.
- [ ] Diseñar estado de `Jugador` dentro de partida.
- [ ] Diseñar estado y flujo de `Partida`.
- [ ] Separar datos de contenido de la lógica de combate.
- [ ] Crear la fuente técnica única de tipos compartida por combate y AYUDA/TABLA.
- [ ] Evitar dependencias de escritorio en la arquitectura del cliente.
- [ ] Diseñar el cliente suponiendo entrada táctil, orientación vertical y restricciones de teléfono Android.
- [ ] Contemplar persistencia de cuenta y progreso en las fronteras del modelo/servicios.
- [ ] Definir pruebas mínimas para tipos, daño, Energía, rondas, objetos, estados, mazos y condición de victoria.

## Orden recomendado de cierre

1. ~~Transcribir tabla v0.2.~~ ✅ Completado.
2. ~~Cerrar objetos de la primera prueba.~~ ✅ Completado.
3. ~~Decidir orientación móvil principal.~~ ✅ Vertical.
4. **Diseñar modelo técnico del combate con Android vertical como referencia.** ← siguiente paso.
5. Crear pruebas del modelo y de las reglas numéricas.
6. Comenzar el primer `Feat:` del núcleo.

Los sistemas de progresión, tienda, Pase y Maestría pueden implementarse después del núcleo de combate, respetando siempre su documentación antes de codificar cada sistema.
