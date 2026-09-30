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
- Doble neutral: el ataque **falla automáticamente**.

### Redondeo

El daño final se redondea al entero más cercano. Los valores terminados en `.5` se redondean hacia arriba.

## 3. Tabla v0.2

La tabla v0.2 completa fue cerrada y aceptada durante el diseño previo. Antes de programar el sistema de tipos, debe transcribirse íntegramente al repositorio y usarse como única fuente de verdad.

Reglas estructurales confirmadas:

- las relaciones deben mantenerse simétricas;
- Eclipse, Mente, Espectro, Enjambre y Dragón son fuertes y débiles contra su mismo tipo;
- en esos enfrentamientos contra el mismo tipo, el ataque se considera ventaja y aplica **×1.5**; la carta de ese tipo también es vulnerable a ataques de su mismo tipo bajo esa misma regla.

Correcciones finales que deben respetarse al transcribir la matriz:

- Escarcha es débil frente a **Marea**.
- **Duna vence a Raíz**.
- Dragón es neutral con **Raíz, Vendaval, Impacto y Espectro**.
- Chispa es neutral con **Enjambre**.
- Chispa es débil frente a **Espectro**.
- Metal es neutral con **Escarcha**.
- **Aura vence a Escarcha**.
- **Metal vence a Roca**.
- **Roca vence a Vendaval**.
- Impacto es neutral con **Espectro y Dragón**.
- Enjambre es débil frente a **Impacto**.
- Enjambre es neutral con **Espectro**.
- Espectro es neutral con **Enjambre y Dragón**.

## 4. Requisito antes de programar

La matriz transcrita deberá:

1. contener los 18 tipos;
2. clasificar cada enfrentamiento de forma inequívoca;
3. conservar la simetría acordada;
4. representar explícitamente las excepciones de mismo tipo;
5. pasar una validación automática de consistencia;
6. servir como única fuente de verdad para el motor de combate y la pestaña **AYUDA/TABLA**.

Hasta completar esa transcripción, este documento define las reglas y correcciones confirmadas, pero la matriz todavía no debe codificarse a mano desde memoria.
