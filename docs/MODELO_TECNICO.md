# Modelo técnico del combate — Guatemala 1.0

Este documento registra las decisiones técnicas del núcleo de combate antes de comenzar la implementación. Su objetivo es separar los datos permanentes del contenido de los datos temporales de una partida.

## 1. Cartas

El modelo de carta se divide en dos representaciones principales: `CartaBase` y `CartaEnPartida`.

### `CartaBase`

Representa la definición permanente de una carta. Contiene los datos que no cambian durante una partida, por ejemplo:

- identificador;
- nombre;
- país;
- rareza;
- Vida máxima;
- tipo principal;
- tipo secundario opcional;
- movimientos propios;
- habilidad pasiva opcional;
- Poder de Maestría asociado a la carta, cuando corresponda.

Las cartas concretas serán diseñadas por el creador del juego y después se convertirán a esta estructura técnica. No es necesario crear nuevas cartas durante esta fase de modelado.

### `CartaEnPartida`

Representa el estado temporal de una `CartaBase` durante un combate. Debe mantener una referencia a la carta original y guardar únicamente datos que puedan cambiar mientras la partida está en curso.

Incluye conceptualmente:

- referencia a `CartaBase`;
- Vida actual;
- los 2 `MovimientoEnPartida` activos con los que entró a la partida;
- representación temporal del Poder de Maestría, cuando esté desbloqueado;
- lista de `EstadoAplicado` que actualmente afectan a la carta;
- efectos temporales activos, como Protector o Impulso;
- si la carta está activa actualmente;
- si la carta fue derrotada.

Los datos permanentes como país, rareza, tipos o Vida máxima no deben duplicarse innecesariamente en `CartaEnPartida`; se consultan desde `CartaBase`.

Al terminar el combate, el estado temporal de `CartaEnPartida` no modifica la definición permanente de `CartaBase`.

## 2. Diferencia entre causar un estado y sufrir un estado

Debe distinguirse claramente entre una fuente capaz de provocar un estado y una carta que ya está siendo afectada por ese estado.

### Estado provocado por un movimiento

Un `Movimiento` puede definir que tiene la posibilidad de aplicar un estado. En ese caso, el movimiento contiene la configuración correspondiente, por ejemplo:

- estado que puede provocar;
- probabilidad;
- duración;
- intensidad;
- reglas especiales de aplicación o reaplicación.

Esto no significa que la carta que posee ese movimiento esté sufriendo dicho estado.

### Estado provocado por una habilidad de carta

Una `CartaBase` puede tener una habilidad pasiva capaz de provocar efectos por condiciones concretas.

Ejemplo conceptual: una carta de tipo Brasa podría tener una habilidad que, al recibir un ataque físico o de contacto, tenga posibilidad de aplicar Quemadura al atacante.

En ese caso, la capacidad de provocar Quemadura pertenece a la habilidad pasiva de la carta; no aparece como un estado que esté afectando a la propia carta.

### Estado que afecta a una carta

Cuando un movimiento, habilidad u otra fuente consigue aplicar un estado sobre una carta, se crea un `EstadoAplicado` dentro de la `CartaEnPartida` objetivo.

Ejemplo conceptual: si un movimiento de Impacto aplica Parálisis con éxito, la carta objetivo registra una instancia temporal de Parálisis como un estado que actualmente la afecta.

## 3. Habilidades pasivas

Las cartas pueden tener una `HabilidadPasiva` opcional.

Una habilidad pasiva puede reaccionar a eventos del combate, por ejemplo:

- recibir un tipo concreto de ataque;
- recibir un ataque de contacto;
- causar daño;
- entrar como carta activa;
- quedar por debajo de cierta Vida;
- cumplirse otra condición definida por la carta.

La habilidad pasiva pertenece a la definición permanente de `CartaBase`, mientras que los efectos temporales que genere durante una partida se reflejan en las entidades correspondientes del combate.

La creación y balance de habilidades concretas se realizará cuando se creen nuevas cartas; en esta fase solo se define que el modelo debe soportarlas.

## 4. Movimientos

Los movimientos también se separan entre su definición permanente y su estado temporal durante una partida.

### `Movimiento`

Representa la definición permanente de un movimiento. Debe poder describir movimientos ofensivos, curativos, de la tercera categoría cuyo nombre definitivo sigue pendiente y Poderes de Maestría.

Debe contener conceptualmente:

- identificador;
- nombre;
- tipo del movimiento (`Normal`, `Brasa`, `Impacto`, etc.);
- categoría del movimiento;
- rareza cuando corresponda;
- coste de Energía;
- daño base, si causa daño;
- cantidad de curación, si cura;
- cantidad máxima de usos por partida o indicación de uso ilimitado;
- objetivo permitido del movimiento;
- si requiere contacto físico/directo con la carta rival;
- uno o más efectos adicionales opcionales;
- reglas de compatibilidad/equipamiento cuando corresponda;
- procedencia del movimiento: propio de una carta, equipable o Poder de Maestría.

No todos los campos se aplican a todos los movimientos. Por ejemplo, un movimiento curativo puede no tener daño y un movimiento ofensivo puede no tener curación.

### Tipo y contacto son conceptos distintos

El `Tipo` del movimiento determina su interacción con la tabla de efectividad. La condición de **contacto** describe cómo se realiza el movimiento y sirve para activar habilidades o efectos reactivos.

Por lo tanto:

- un movimiento de tipo `Impacto` puede ser de contacto;
- también puede existir un movimiento de otro tipo que implique contacto;
- no se debe asumir que todos los movimientos de `Impacto` hacen contacto;
- no se debe asumir que únicamente `Impacto` puede hacer contacto.

### Objetivo del movimiento

Cada movimiento debe indicar qué objetivos admite. Entre los objetivos posibles que el modelo debe poder representar están:

- carta activa rival;
- la propia carta activa;
- cualquier carta aliada viva compatible;
- otro objetivo especial que una carta futura pueda requerir.

### Efectos provocados por el movimiento

Un movimiento puede tener efectos adicionales además de daño o curación. Cada efecto debe poder guardar sus propios parámetros, por ejemplo:

- `Estado` que intenta aplicar;
- probabilidad de aplicación;
- duración;
- intensidad o valor;
- regla de acumulación o reaplicación;
- condición especial necesaria para activarse.

Estos parámetros pertenecen al movimiento concreto, no al `Estado` universal.

### Procedencia y equipamiento

Los movimientos pueden pertenecer a diferentes procedencias:

- **Propio de carta:** forma parte del diseño original de una carta. Puede desequiparse, pero no transferirse a otra carta.
- **Equipable:** puede asignarse a cartas compatibles según las reglas de tipo/categoría.
- **Poder de Maestría:** tercer movimiento especial fijo de una carta; no se remueve ni intercambia, cuesta 0 Energía y tiene 1 uso por partida una vez desbloqueado.

### `MovimientoEnPartida`

Representa el estado temporal de un `Movimiento` durante un combate.

Debe contener conceptualmente:

- referencia al `Movimiento` permanente;
- usos restantes, cuando el movimiento sea limitado;
- si está disponible para ser usado en ese momento;
- cualquier modificación temporal que altere específicamente ese movimiento durante la batalla, si una regla futura lo requiere.

Para movimientos ilimitados no es necesario decrementar usos.

El Poder de Maestría puede utilizar la misma representación temporal: comienza disponible cuando está desbloqueado y, después de utilizarse, queda sin usos para el resto de esa partida.

## 5. Estados

Los estados se dividen en una definición general y una instancia temporal que existe únicamente durante la batalla.

### `Estado`

Representa qué clase de condición es un estado, no los valores concretos con los que una fuente lo aplica.

Debe contener conceptualmente:

- identificador;
- nombre;
- descripción general de su comportamiento;
- si es positivo, negativo o de otra clasificación que se defina posteriormente;
- reglas generales que sean inseparables del propio estado.

Ejemplos iniciales: `Quemadura` y `Parálisis`.

`Estado` **no debe fijar universalmente** valores como probabilidad, duración o intensidad cuando esos valores pueden variar entre movimientos, habilidades u otras fuentes.

### `EstadoAplicado`

Representa una instancia concreta de un estado que actualmente afecta a una `CartaEnPartida`.

Debe contener conceptualmente:

- referencia al `Estado`;
- duración restante, cuando corresponda;
- intensidad o valor actual, cuando corresponda;
- fuente que lo provocó, cuando sea necesario conocerla;
- regla de reaplicación/acumulación utilizada por esa aplicación;
- otros parámetros temporales necesarios para resolver el efecto.

Ejemplo: una Quemadura aplicada por un movimiento puede registrar 1 punto de daño y 2 activaciones restantes, mientras otra fuente podría aplicar Quemadura con valores diferentes.

Cuando el estado termina, su `EstadoAplicado` se elimina de la carta. Si la carta es derrotada, sus estados dejan de tener efecto de combate salvo que una regla futura indique expresamente lo contrario.

## 6. Objetos

Los objetos se separan entre su definición permanente y la cantidad disponible durante una partida.

### `Objeto`

Representa la definición permanente de un objeto de combate.

Debe contener conceptualmente:

- identificador;
- nombre;
- descripción;
- objetivo permitido;
- efectos que produce;
- límite máximo de copias permitidas en un mazo;
- cualquier condición especial necesaria para poder utilizarlo.

Los efectos del objeto pueden incluir, entre otros:

- curar Vida;
- eliminar un estado negativo;
- crear un efecto temporal, como Protector o Impulso;
- cambiar la carta activa;
- combinar varios efectos, como el Kit de Emergencias.

Usar un objeto consume la acción de la ronda según las reglas actuales. Los objetos no reviven cartas derrotadas y las curaciones no pueden superar la Vida máxima.

### `ObjetoEnPartida`

Representa un objeto seleccionado dentro del mazo durante una batalla.

Debe contener conceptualmente:

- referencia al `Objeto` permanente;
- cantidad restante disponible en esa partida;
- cualquier modificación temporal del objeto si una regla futura llegara a requerirla.

Cada uso válido reduce la cantidad restante en 1. Cuando llega a 0, el objeto ya no puede seleccionarse.

Los objetos del rival permanecen ocultos en la vista previa del mazo.

`MazoEnPartida` debe contener los `ObjetoEnPartida` seleccionados en lugar de administrar cantidades separadas sin referencia al objeto.

## 7. Tipos

Los 18 tipos oficiales se representan mediante identificadores fijos y una única tabla central de relaciones.

### `Tipo`

Representa uno de los tipos oficiales de Atlas Rivals.

Debe contener como mínimo:

- identificador estable;
- nombre visible;
- metadatos de presentación que puedan necesitarse más adelante, como icono.

`Tipo` no debe contener listas de cartas o movimientos que lo utilizan. Las cartas y movimientos referencian al tipo.

### Relaciones de tipo

La relación ofensiva entre un tipo de movimiento y un tipo defensor se representa mediante una relación central, por ejemplo:

- `VENTAJA`;
- `NEUTRAL`;
- `DESVENTAJA`.

Debe existir una única fuente técnica, conceptualmente `TablaTipos` o servicio equivalente, capaz de responder:

`obtenerRelacion(tipoMovimiento, tipoDefensor)`

El motor de combate y la interfaz **AYUDA/TABLA** deben consultar esa misma fuente técnica.

Los cinco casos especiales de Eclipse, Mente, Espectro, Enjambre y Dragón contra sí mismos deben resolverse explícitamente como **Ventaja ofensiva** al consultar la relación para calcular daño.

### Multiplicadores y doble tipo

La fuente técnica debe aplicar las reglas ya cerradas:

- ventaja ×1.5;
- neutral ×1;
- desventaja ×0.75;
- ventaja + ventaja ×2;
- ventaja + neutral ×1.5;
- ventaja + desventaja ×1;
- neutral + neutral = fallo automático;
- neutral + desventaja ×0.75;
- desventaja + desventaja ×0.5.

El redondeo final sigue la regla oficial: entero más cercano y `.5` hacia arriba.

La matriz técnica debe validarse automáticamente para asegurar que no falten relaciones, que las relaciones ordinarias sean consistentes y que las cinco excepciones de mismo tipo funcionen correctamente.

## 8. Mazo

El mazo también se divide entre su configuración guardada y su estado dentro del combate.

### `Mazo`

Representa la configuración permanente preparada por el jugador antes de entrar a una partida.

Debe contener conceptualmente:

- nombre del mazo;
- exactamente 6 `CartaBase`;
- los 2 movimientos activos elegidos para cada carta;
- hasta 3 objetos seleccionados.

Antes de iniciar una partida debe validar las reglas ya definidas, entre ellas:

- exactamente 6 cartas;
- sin copias exactas repetidas de una misma carta;
- 2 movimientos activos por carta;
- al menos 1 movimiento ilimitado por carta;
- compatibilidad de movimientos equipados;
- máximo 3 objetos;
- máximo 2 unidades del mismo objeto, salvo límites especiales inferiores.

### `MazoEnPartida`

Se crea al comenzar un combate a partir de un `Mazo` válido. Contiene el estado temporal del equipo durante esa partida.

Incluye conceptualmente:

- las 6 `CartaEnPartida`;
- la carta activa;
- las cartas vivas disponibles para cambio;
- `ObjetoEnPartida` seleccionados y sus cantidades restantes.

El daño, los estados, el gasto de movimientos u objetos y cualquier otro cambio temporal no deben modificar el `Mazo` guardado del jugador.

## 9. Jugador en partida

### `JugadorEnPartida`

Representa a uno de los participantes mientras una partida está en curso.

Debe contener conceptualmente:

- referencia al jugador o cuenta;
- nombre de usuario visible durante el combate, para identificar al rival;
- `MazoEnPartida`;
- Energía actual;
- información necesaria para saber si puede actuar en la ronda actual;
- acción elegida para la ronda cuando corresponda;
- estado de conexión;
- si se rindió o abandonó;
- si fue derrotado;
- efectos que afecten al jugador completo y no a una carta concreta, si llegan a existir.

Datos permanentes del perfil como colección completa, Oro, progreso general o historial no pertenecen a `JugadorEnPartida`, salvo la referencia necesaria para identificar al jugador y mostrar su nombre de usuario.

## 10. Partida

### `Partida`

Representa el combate completo entre dos `JugadorEnPartida` y coordina el flujo de rondas hasta que exista un ganador.

Debe contener conceptualmente:

- los 2 jugadores conectados;
- estado de la partida;
- número de ronda;
- tirada de dado de cada jugador;
- orden de ejecución de la ronda;
- acción seleccionada por cada jugador;
- temporizador de selección;
- información de pausa y reconexión;
- ganador cuando exista;
- motivo de finalización.

### Inicio de la partida

La partida comienza cuando los dos jugadores han terminado de conectarse.

Antes del combate:

1. se muestran a ambos jugadores los mazos rivales;
2. solo se muestra la composición de cartas del mazo;
3. los 2 movimientos equipados, los Poderes de Maestría y los objetos elegidos por el rival permanecen ocultos;
4. cada jugador selecciona en secreto su carta activa inicial;
5. ambas cartas iniciales se revelan simultáneamente;
6. comienza la ronda 1.

### Inicio de cada ronda

Al comenzar una ronda:

1. se aplican las reglas de recuperación de Energía correspondientes;
2. un jugador realiza su tirada de dado y el resultado se guarda;
3. el otro jugador realiza su tirada y el resultado se guarda;
4. se comparan ambos resultados;
5. el jugador con el número mayor tendrá su acción ejecutada primero;
6. el jugador con el número menor tendrá su acción ejecutada después;
7. si ambos resultados son iguales, se repiten las tiradas hasta obtener resultados distintos.

Las tiradas determinan el **orden de ejecución**.

### Selección de acciones

Después de fijar el orden de la ronda, ambos jugadores seleccionan su acción para esa ronda.

Las acciones base son:

- **Atacar:** utilizar uno de los 2 movimientos activos disponibles de la carta activa;
- **Usar Poder de Maestría:** utilizar el tercer movimiento especial de la carta activa, solo si está desbloqueado y disponible;
- **Usar objeto:** utilizar uno de los objetos disponibles;
- **Cambiar carta:** sustituir la carta activa por otra carta viva válida;
- **Abandonar:** terminar voluntariamente la partida y recibir la derrota correspondiente.

### Resolución de la ronda

Cuando ambos jugadores han elegido su acción, se ejecutan en el orden establecido por las tiradas de dado:

1. se resuelve la acción del jugador con la tirada mayor;
2. se actualiza el estado del combate resultante;
3. si esa acción derrota la carta activa del jugador que iba segundo, su acción seleccionada se cancela y no se ejecuta;
4. si al jugador afectado no le quedan cartas vivas, la partida termina inmediatamente;
5. si todavía le quedan cartas vivas, la ronda termina y comienza una nueva ronda;
6. al iniciar esa nueva ronda, el jugador afectado debe seleccionar una carta viva como nueva carta activa antes de elegir acciones;
7. ese reemplazo es obligatorio por derrota y no consume la acción de la nueva ronda;
8. si la carta del segundo jugador sigue viva, su acción se ejecuta normalmente sobre el estado actualizado del combate;
9. se procesan los efectos de cierre que correspondan y se comprueba la condición de victoria.

## 11. Regla de separación

Como principio general:

- `CartaBase` = qué es la carta.
- `CartaEnPartida` = cómo se encuentra esa carta ahora mismo dentro del combate.
- `Movimiento` = definición permanente de un movimiento.
- `MovimientoEnPartida` = usos y cambios temporales del movimiento.
- `Estado` = qué clase de condición existe.
- `EstadoAplicado` = instancia concreta que afecta a una carta durante el combate.
- `Objeto` = definición permanente de un objeto.
- `ObjetoEnPartida` = cantidad y estado temporal del objeto durante la batalla.
- `Tipo` = identidad de uno de los 18 tipos.
- `TablaTipos` = única fuente técnica de relaciones y multiplicadores.
- `Mazo` = configuración preparada antes del combate.
- `MazoEnPartida` = estado temporal del equipo durante el combate.
- `JugadorEnPartida` = estado del participante dentro de la partida.
- `Partida` = coordinador del flujo completo.

Esta separación evita modificar accidentalmente datos permanentes con información temporal de una batalla y permite reutilizar contenido en muchas partidas independientes.
