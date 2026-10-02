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

## 4. Regla de separación

Como principio general:

- `CartaBase` = qué es la carta.
- `CartaEnPartida` = cómo se encuentra esa carta ahora mismo dentro del combate.
- `Movimiento` o `HabilidadPasiva` = qué efectos puede intentar provocar.
- estado activo en `CartaEnPartida` = qué efecto está sufriendo actualmente la carta.

Esta separación evita modificar accidentalmente la carta permanente con datos temporales de una batalla y permite reutilizar la misma carta en muchas partidas independientes.
