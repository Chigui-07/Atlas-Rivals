# Gameplay — Guatemala 1.0

Este documento recoge las reglas de combate confirmadas para la primera versión. Cuando un valor siga abierto, se marca como pendiente en lugar de asumirlo.

## 1. Mazo

- Cada jugador entra a la partida con **6 cartas**.
- No se permiten **copias exactas repetidas** de una misma carta dentro del mazo.
- Cada carta puede tener **1 o 2 tipos**.
- Una carta también puede ser únicamente de tipo **Normal**.
- Cada carta prepara **2 movimientos activos**.
- Cada mazo puede llevar **hasta 3 objetos** elegidos antes de la partida.
- Se permiten como máximo **2 unidades del mismo objeto**, salvo objetos especiales que indiquen un límite inferior.

## 2. Movimientos

Los movimientos se dividen en tres categorías iniciales de diseño:

- **Ofensivo:** su función principal es causar daño a una carta rival.
- **Curativo:** su función principal es recuperar Vida de una carta compatible.
- **Apoyo:** modifica el combate sin tener como función principal causar daño directo ni curar, por ejemplo mediante estados, mejoras u otros efectos especiales.

El nombre definitivo de la tercera categoría todavía puede ajustarse antes de implementación.

Reglas generales:

- Cada carta dispone de 2 espacios de movimientos activos.
- Debe existir **al menos 1 movimiento ilimitado** entre los movimientos activos de la carta.
- Los movimientos pueden tener coste de Energía, usos limitados o ilimitados, daño y/o efectos.
- Los movimientos propios/originales de una carta se pueden desequipar, pero **no se transfieren a otras cartas**.
- Los movimientos equipables pueden intercambiarse entre cartas compatibles.
- Los movimientos ofensivos equipables requieren compatibilidad de tipo con la carta.
- Los movimientos curativos son de tipo Normal y solo pueden equiparse en cartas compatibles con curación.
- En cartas de un solo tipo, normalmente ambos movimientos ofensivos pertenecen a ese tipo.
- En cartas de dos tipos, normalmente se distribuyen entre ambos tipos, salvo habilidades especiales como curación.

La creación de nuevas cartas y movimientos concretos se realizará después. En esta etapa solo se fija la estructura general necesaria para el modelo técnico.

## 3. Estadísticas base

La escala aceptada como base de balance para probar es:

- Vida habitual aproximada: **12–20**.
- Daño base aproximado de movimientos: **3–10**.

Estos rangos no son una obligación rígida para todas las cartas; sirven como punto de partida de balance.

Reglas:

- una carta que llega a **0 Vida** queda fuera de la partida;
- una carta eliminada no puede curarse ni revivir;
- el daño recibido persiste mientras la carta siga viva;
- la curación nunca puede superar la Vida máxima de la carta.

## 4. Energía

- Energía inicial por jugador: **3**.
- Al inicio de cada ronda: **+2 Energía**.
- Máximo: **10**.
- Un movimiento no puede utilizarse si el jugador no tiene la Energía necesaria.

## 5. Inicio de partida, rondas y resolución

La partida comienza cuando **los dos jugadores han terminado de conectarse**.

### Información previa al combate

Antes de iniciar la ronda 1:

1. ambos jugadores pueden ver la composición de cartas del mazo rival;
2. **no se muestran los movimientos equipados del rival**;
3. **no se muestra el Poder de Maestría del rival**, ya que también cuenta como un movimiento de la carta;
4. **no se muestran los objetos elegidos por el rival**;
5. ambos jugadores seleccionan en secreto su carta activa inicial;
6. las cartas iniciales se revelan simultáneamente.

### Inicio de cada ronda

Una ronda funciona así:

1. Ambos jugadores reciben la recuperación de Energía correspondiente, sin superar 10.
2. Un jugador lanza el dado y su resultado se guarda.
3. El otro jugador lanza el dado y su resultado se guarda.
4. Se comparan ambos resultados.
5. El resultado mayor obtiene el **primer lugar de ejecución** de esa ronda.
6. El resultado menor obtiene el **segundo lugar de ejecución**.
7. Si las tiradas son iguales, ambos vuelven a tirar hasta obtener resultados distintos.
8. Ambos jugadores eligen su acción de la ronda.
9. Cuando las dos acciones han sido elegidas, se ejecutan según el orden determinado por los dados.
10. Se actualiza el estado del combate y se comprueba la condición de victoria.
11. Si ambos jugadores todavía tienen cartas vivas, comienza una nueva ronda y se vuelve a determinar el orden mediante dados.

El dado determina el **orden en que se resuelven las acciones**, pero ambos jugadores realizan su selección antes de que comience la resolución de la ronda.

### Acciones disponibles

Cada jugador selecciona una acción principal:

- **Atacar:** utilizar uno de los 2 movimientos activos disponibles de la carta activa.
- **Usar Poder de Maestría:** utilizar el movimiento especial de Maestría de la carta activa, solo si está desbloqueado y todavía no fue usado por esa carta durante la partida.
- **Usar objeto:** utilizar uno de los objetos disponibles.
- **Cambiar carta:** sustituir la carta activa por otra carta viva válida.
- **Abandonar:** terminar voluntariamente la partida y recibir la derrota correspondiente.

Cambiar de carta consume la acción de la ronda.  
Usar un objeto consume la acción de la ronda.  
Usar el Poder de Maestría consume la acción de la ronda.

### Poder de Maestría durante el combate

- Cada carta tiene un Poder de Maestría exclusivo cuando esté desbloqueado.
- Funciona como un **tercer movimiento especial** de esa carta.
- Cuesta **0 Energía**.
- Tiene **1 uso por partida por carta**.
- Si una carta usa su Poder de Maestría, solo esa carta pierde su uso; las demás cartas del mazo conservan el suyo si también lo tienen desbloqueado.
- El Poder de Maestría del rival permanece oculto igual que sus otros movimientos y no se revela en la vista previa del mazo.
- El efecto concreto puede ser ofensivo, curativo, defensivo, de estado u otro definido para esa carta.

### Resolución de acciones

- Primero se resuelve la acción del jugador con la tirada mayor.
- Después se actualiza el estado del combate.
- Si esa acción derrota la carta activa del jugador que iba segundo, la acción que ese jugador había seleccionado **se cancela y no se ejecuta**.
- Si al jugador afectado no le quedan cartas vivas, la partida termina inmediatamente.
- Si todavía tiene cartas vivas, la ronda termina y comienza una nueva ronda.
- Al iniciar esa nueva ronda, el jugador afectado debe escoger una carta viva como nueva carta activa antes de seleccionar acciones.
- Elegir esta nueva carta es un **reemplazo obligatorio por derrota** y no consume la acción de la nueva ronda.
- Si la carta del segundo jugador sigue viva después de la primera acción, su acción se ejecuta normalmente usando el estado actualizado del combate.
- Después se aplican los efectos de cierre que correspondan y se comprueba la victoria.

## 6. Carta activa inicial

En una partida normal, ambos jugadores seleccionan en secreto su primera carta activa y la revelan simultáneamente antes de comenzar la ronda 1.

Para la primera partida guiada del tutorial, la selección exacta de la carta inicial puede quedar predeterminada por el propio tutorial.

## 7. Objetos — primera prueba

El catálogo y los valores provisionales completos están documentados en [`OBJECTS_FIRST_TEST.md`](OBJECTS_FIRST_TEST.md).

Reglas generales:

- se pueden llevar hasta **3 objetos** por partida;
- máximo **2 unidades del mismo objeto**, salvo límites especiales;
- usar un objeto consume la acción de la ronda;
- un objeto no puede revivir una carta derrotada;
- cualquier curación respeta la Vida máxima.

### 🩹 Vendaje

- Cura **3 Vida** a la carta activa.

### 🧰 Botiquín

- Cura **5 Vida** a cualquier carta viva del equipo.

### 🚑 Kit de Emergencias

- Cura **4 Vida** a cualquier carta viva del equipo.
- Elimina **1 efecto negativo** activo de esa carta, como Quemadura o Parálisis.
- Límite especial: **1 por partida**.

### 🛡️ Protector

- Se aplica a la carta activa.
- Reduce en **3 puntos** el próximo daño que reciba.

### ⚡ Impulso

- Se aplica a la carta activa.
- Añade **+2 al daño base** del próximo movimiento ofensivo.
- El +2 se aplica **antes** de calcular ventajas o desventajas de tipo.

### 🔄 Cambio rápido

- Retira la carta activa y permite sacar inmediatamente otra carta viva.
- La nueva carta queda activa, pero no puede atacar durante esa misma acción porque el uso del objeto ya consumió la acción de la ronda.

Todos estos valores son **provisionales para la primera prueba** y podrán ajustarse mediante commits `Balance:` después de probar el combate.

## 8. Estados y efectos

Los estados base confirmados para la primera prueba incluyen **Quemadura** y **Parálisis**.

El tipo de estado define su comportamiento general, pero **los parámetros concretos del efecto pertenecen al movimiento que lo aplica**. Por lo tanto, dos movimientos que provoquen el mismo estado no están obligados a tener la misma probabilidad, duración o intensidad.

Cuando un movimiento pueda aplicar un estado, sus datos deberán indicar según corresponda:

- estado aplicado;
- probabilidad de aplicación;
- duración;
- intensidad o valor del efecto;
- regla de reaplicación o acumulación cuando sea necesaria;
- cualquier otro parámetro propio de ese efecto.

Esto permite, por ejemplo, que una Quemadura de un movimiento dure más o menos que la de otro, o que dos movimientos tengan probabilidades distintas de provocar Parálisis.

### Valores del mazo inicial

Los valores ya definidos en `STARTER_DECK.md` pertenecen a esos movimientos concretos y **no son valores universales del estado**:

- **Hervor Intenso** aplica Quemadura de 1 de daño al final de los próximos 2 turnos; no se acumula y reaplicarla reinicia su duración.
- **Golpe Ceremonial** tiene 15% de probabilidad de aplicar Parálisis y hace perder la próxima acción cuando se activa.

Los movimientos futuros podrán utilizar Quemadura, Parálisis u otros estados con parámetros diferentes si así se define en sus propios datos.

## 9. Tipos y daño

La efectividad de tipos modifica el daño de los movimientos. Los multiplicadores y reglas están en [`TYPES.md`](TYPES.md).

### Redondeo

Después de aplicar multiplicadores, todo resultado decimal se redondea al entero más cercano. Los resultados terminados en `.5` se redondean hacia arriba.

## 10. Temporizador

- Cada jugador dispone de **20 segundos para seleccionar su acción de la ronda**.
- Si el tiempo termina sin registrar una acción válida, la acción de ese jugador se anula/omite para esa ronda.
- La resolución comienza cuando ambos jugadores ya eligieron o cuando ya no queda ninguna selección pendiente por temporizador.

## 11. Desconexiones

- Si un jugador se desconecta, la partida se pausa.
- Se conceden hasta **2 minutos** para reconectarse.
- Si vuelve, la partida puede reanudarse y la selección/ronda afectada se reinicia según la lógica de reconexión.
- Si no regresa dentro del tiempo, recibe **derrota automática**.

## 12. Rendición, abandono y empates

- Rendirse equivale a derrota.
- Abandonar equivale a derrota.
- Una desconexión no recuperada equivale a derrota.
- **No existen empates.**

## 13. Condición de victoria

Gana el jugador que consigue dejar al rival sin cartas vivas disponibles.

La condición se comprueba después de actualizar el estado del combate durante la resolución de las acciones. Si la partida ya terminó, no se inicia una nueva ronda.

## 14. Reputación y antifarmeo

Reglas confirmadas:

- un patrón de victorias beneficiadas por abandonos/desconexiones debe vigilarse si ocurre **2 veces seguidas** o con una frecuencia aproximada de **cada 3 partidas**;
- la reputación disminuye cuando existen demasiadas incidencias sospechosas;
- las recompensas pueden reducirse o desaparecer temporalmente;
- la penalización de recompensas se centra principalmente en el jugador que se está beneficiando repetidamente del patrón, no únicamente en quien abandona/desconecta;
- el resultado de la partida puede seguir registrándose como victoria aunque sus recompensas se bloqueen.

Pendiente antes de implementar:

- fórmula exacta de reputación;
- ventana temporal/de partidas usada para el análisis;
- duración de bloqueos;
- recuperación de reputación;
- reducción exacta de Oro, estrellas, sobres, misiones y fichas.
