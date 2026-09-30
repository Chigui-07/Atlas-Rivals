# Sistema de tipos — Guatemala 1.0

## 1. Tipos oficiales

Atlas Rivals utiliza 18 tipos:

1. Normal
2. Brasa
3. Marea
4. Raíz
5. Chispa
6. Escarcha
7. Roca
8. Vendaval
9. Eclipse
10. Aura
11. Metal
12. Mente
13. Toxina
14. Duna
15. Impacto
16. Espectro
17. Enjambre
18. Dragón

Una carta puede tener uno o dos tipos. También puede ser únicamente Normal.

## 2. Multiplicadores confirmados

La relación entre el tipo de un movimiento y los tipos de la carta objetivo modifica el daño:

- Ventaja: **×1.5**.
- Doble ventaja: **×2**.
- Neutral: **×1**.
- Desventaja: **×0.75**.
- Doble desventaja: **×0.5**.
- Doble neutral: el ataque **falla** según la regla acordada para el sistema de dos tipos.

### Redondeo

El daño final se expresa como entero. Los valores terminados en `.5` se redondean hacia arriba.

## 3. Relaciones simétricas

La tabla v0.2 fue diseñada con relaciones simétricas: si A tiene ventaja sobre B, B debe reflejar la desventaja correspondiente frente a A.

Esta condición se utilizará como prueba automática cuando la matriz sea implementada.

## 4. Auditoría obligatoria de la tabla v0.2

La migración desde el diseño previo reveló contradicciones entre algunas filas recuperadas y cambios que habían sido confirmados posteriormente. Por ese motivo, **la matriz completa no debe codificarse todavía**.

Los siguientes cambios quedaron confirmados y deben respetarse en la versión final de la tabla:

- Escarcha es débil contra Marea.
- Duna es fuerte contra Raíz.
- Dragón es neutral con Raíz, Vendaval, Impacto y Espectro.
- Chispa es neutral con Enjambre.
- Chispa es débil contra Espectro.
- Metal es neutral con Escarcha.
- Aura es débil contra Escarcha.
- Metal es fuerte contra Roca.
- Roca es débil contra Vendaval.
- Roca es débil contra Metal.
- Impacto es neutral con Espectro.
- Enjambre es débil contra Impacto.
- Enjambre es neutral con Espectro.
- Las relaciones deben mantenerse simétricas.

También se había definido una interacción especial para Eclipse, Mente, Espectro, Enjambre y Dragón frente a su mismo tipo. Esa regla debe revisarse durante la auditoría para representarla sin ambigüedad en el motor de combate.

## 5. Requisito antes de programar

La tabla final deberá:

1. contener los 18 tipos;
2. clasificar cada enfrentamiento de forma inequívoca;
3. ser simétrica cuando corresponda;
4. no contener una pareja simultáneamente como ventaja y desventaja salvo que exista una regla especial documentada;
5. pasar una validación automática de consistencia;
6. servir como única fuente de verdad para la pestaña **AYUDA/TABLA** de la partida.

Hasta completar esta auditoría, `TYPES.md` define la mecánica y los cambios confirmados, pero no una matriz lista para código.
