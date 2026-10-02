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
- habilidad pasiva opcional.

Las cartas concretas serán diseñadas por el creador del juego y después se convertirán a esta estructura técnica. No es necesario crear nuevas cartas durante esta fase de modelado.

### `CartaEnPartida`

Representa el estado temporal de una `CartaBase` durante un combate. Debe mantener una referencia a la carta original y guardar únicamente datos que puedan cambiar mientras la partida está en curso.

Incluye conceptualmente:

- referencia a `CartaBase`;
- Vida actual;
- los 2 movimientos activos con los que entró a la partida;
- usos restantes de movimientos limitados;
- estados negativos o positivos que actualmente estén afectando a la carta;
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

Cuando un movimiento, habilidad u otra fuente consigue aplicar un estado sobre una carta, ese estado pasa a formar parte de los estados activos de su `CartaEnPartida`.

Ejemplo conceptual: si un movimiento de Impacto aplica Parálisis con éxito, la `CartaEnPartida` objetivo registra Parálisis como un estado que actualmente la afecta.

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

## 4. Mazo

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
- objetos restantes y sus cantidades durante el combate.

El daño, los estados, el gasto de movimientos u objetos y cualquier otro cambio temporal no deben modificar el `Mazo` guardado del jugador.

## 5. Jugador en partida

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

La carta activa y los objetos disponibles pertenecen al `MazoEnPartida`; `JugadorEnPartida` los controla a través de ese mazo en lugar de duplicarlos innecesariamente.

## 6. Partida

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
3. los movimientos equipados y los objetos elegidos por el rival permanecen ocultos;
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

Las tiradas determinan el **orden de ejecución**, no obligan a que el segundo jugador espere a conocer la acción elegida por el primero.

### Selección de acciones

Después de fijar el orden de la ronda, ambos jugadores seleccionan su acción para esa ronda.

Las acciones base son:

- **Atacar:** utilizar uno de los movimientos disponibles de la carta activa;
- **Usar objeto:** utilizar uno de los objetos disponibles;
- **Cambiar carta:** sustituir la carta activa por otra carta viva válida;
- **Abandonar:** terminar voluntariamente la partida y recibir la derrota correspondiente.

La acción de cada jugador se guarda antes de comenzar la resolución de la ronda.

### Resolución de la ronda

Cuando ambos jugadores han elegido su acción, se ejecutan en el orden establecido por las tiradas de dado:

1. se resuelve la acción del jugador con la tirada mayor;
2. se actualiza el estado del combate resultante;
3. se resuelve la acción del jugador con la tirada menor si sigue siendo válida según el estado actualizado;
4. se procesan los efectos de fin de ronda o de turno que correspondan;
5. se comprueba la condición de victoria;
6. si ambos jugadores todavía tienen cartas vivas, comienza una nueva ronda y se realizan nuevas tiradas.

Queda pendiente definir con precisión todos los casos en los que la primera acción de la ronda pueda volver imposible o alterar la segunda acción ya seleccionada, por ejemplo si la primera acción derrota una carta antes de que pueda ejecutar su ataque.

### Fin de la partida

La condición principal de victoria es dejar al rival sin cartas vivas.

La partida también puede terminar por abandono, rendición o desconexión no recuperada según las reglas generales ya documentadas.

Al finalizar deben registrarse como mínimo:

- jugador ganador;
- jugador derrotado;
- motivo de finalización;
- estado final necesario para recompensas, historial y sistemas posteriores.

## 7. Regla de separación

Como principio general:

- `CartaBase` = qué es la carta.
- `CartaEnPartida` = cómo se encuentra esa carta ahora mismo dentro del combate.
- `Movimiento` o `HabilidadPasiva` = qué efectos puede intentar provocar.
- estado activo en `CartaEnPartida` = qué efecto está sufriendo actualmente la carta.
- `Mazo` = configuración preparada antes del combate.
- `MazoEnPartida` = estado temporal del equipo durante el combate.
- `JugadorEnPartida` = estado del participante dentro de la partida.
- `Partida` = coordinador del flujo completo, las rondas, el orden de ejecución y la condición de victoria.

Esta separación evita modificar accidentalmente datos permanentes con información temporal de una batalla y permite reutilizar cartas y mazos en muchas partidas independientes.
