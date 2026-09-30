# Sistema de tipos — Guatemala 1.0

**Estado:** tabla final de diseño auditada el 2026-09-30.

Este documento es la fuente de verdad de diseño para las relaciones de tipos de Guatemala 1.0. Cuando se implemente el motor, la lógica de combate y la pestaña **AYUDA/TABLA** deberán leer una misma fuente de datos derivada de esta especificación.

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

## 2. Tabla final de relaciones

### ⚪ Normal

- **Ventajas:** Ninguna.
- **Neutro:** Normal.
- **Desventajas:** Brasa, Marea, Raíz, Chispa, Escarcha, Roca, Vendaval, Eclipse, Aura, Metal, Mente, Toxina, Duna, Impacto, Espectro, Enjambre, Dragón.

### 🔥 Brasa

- **Ventajas:** Normal, Raíz, Escarcha, Metal, Impacto, Enjambre.
- **Neutro:** Brasa, Chispa, Eclipse, Aura, Mente, Toxina, Espectro.
- **Desventajas:** Marea, Roca, Vendaval, Duna, Dragón.

### 🌊 Marea

- **Ventajas:** Normal, Brasa, Roca, Metal, Duna, Enjambre.
- **Neutro:** Marea, Vendaval, Eclipse, Aura, Mente, Impacto, Espectro, Dragón.
- **Desventajas:** Raíz, Chispa, Escarcha, Toxina.

### 🌿 Raíz

- **Ventajas:** Normal, Marea, Roca, Duna.
- **Neutro:** Raíz, Chispa, Eclipse, Aura, Metal, Mente, Toxina, Impacto, Espectro, Dragón.
- **Desventajas:** Brasa, Escarcha, Vendaval, Enjambre.

### ⚡ Chispa

- **Ventajas:** Normal, Marea, Escarcha, Vendaval, Impacto.
- **Neutro:** Brasa, Raíz, Chispa, Aura, Metal, Mente, Toxina, Enjambre, Dragón.
- **Desventajas:** Roca, Eclipse, Duna, Espectro.

### ❄️ Escarcha

- **Ventajas:** Normal, Marea, Raíz, Toxina, Duna, Enjambre, Dragón.
- **Neutro:** Escarcha, Roca, Vendaval, Eclipse, Metal, Mente, Impacto, Espectro.
- **Desventajas:** Brasa, Chispa, Aura.

### 🪨 Roca

- **Ventajas:** Normal, Brasa, Chispa, Vendaval, Metal, Impacto, Enjambre.
- **Neutro:** Escarcha, Roca, Eclipse, Aura, Mente, Toxina, Espectro, Dragón.
- **Desventajas:** Marea, Raíz, Duna.

### 🌪️ Vendaval

- **Ventajas:** Normal, Brasa, Raíz, Duna, Impacto, Enjambre.
- **Neutro:** Marea, Escarcha, Vendaval, Eclipse, Aura, Mente, Toxina, Espectro, Dragón.
- **Desventajas:** Chispa, Roca, Metal.

### 🌑 Eclipse

- **Ventajas:** Normal, Chispa, Eclipse, Espectro.
- **Neutro:** Brasa, Marea, Raíz, Escarcha, Roca, Vendaval, Metal, Toxina, Duna, Impacto, Enjambre, Dragón.
- **Desventajas:** Eclipse, Aura, Mente.

**Regla especial:** Eclipse es fuerte y débil contra sí mismo.

### ✨ Aura

- **Ventajas:** Normal, Escarcha, Eclipse, Dragón.
- **Neutro:** Brasa, Marea, Raíz, Chispa, Roca, Vendaval, Aura, Metal, Duna, Impacto.
- **Desventajas:** Mente, Toxina, Espectro, Enjambre.

### ⚙️ Metal

- **Ventajas:** Normal, Vendaval, Mente, Toxina, Enjambre.
- **Neutro:** Raíz, Chispa, Escarcha, Eclipse, Aura, Metal, Espectro, Dragón.
- **Desventajas:** Brasa, Marea, Roca, Duna, Impacto.

### 🔮 Mente

- **Ventajas:** Normal, Eclipse, Aura, Mente.
- **Neutro:** Brasa, Marea, Raíz, Chispa, Escarcha, Roca, Vendaval, Duna, Impacto, Dragón.
- **Desventajas:** Metal, Mente, Toxina, Espectro, Enjambre.

**Regla especial:** Mente es fuerte y débil contra sí mismo.

### ☠️ Toxina

- **Ventajas:** Normal, Marea, Aura, Mente, Impacto.
- **Neutro:** Brasa, Raíz, Chispa, Roca, Vendaval, Eclipse, Toxina, Espectro, Enjambre.
- **Desventajas:** Escarcha, Metal, Duna, Dragón.

### 🏜️ Duna

- **Ventajas:** Normal, Brasa, Chispa, Roca, Metal, Toxina.
- **Neutro:** Eclipse, Aura, Mente, Duna, Impacto, Espectro, Dragón.
- **Desventajas:** Marea, Raíz, Escarcha, Vendaval, Enjambre.

### 👊 Impacto

- **Ventajas:** Normal, Metal.
- **Neutro:** Marea, Raíz, Escarcha, Eclipse, Aura, Mente, Duna, Impacto, Espectro, Dragón.
- **Desventajas:** Brasa, Chispa, Roca, Vendaval, Toxina, Enjambre.

### 👻 Espectro

- **Ventajas:** Normal, Chispa, Aura, Mente, Espectro.
- **Neutro:** Brasa, Marea, Raíz, Escarcha, Roca, Vendaval, Metal, Toxina, Duna, Impacto, Enjambre, Dragón.
- **Desventajas:** Eclipse, Espectro.

**Regla especial:** Espectro es fuerte y débil contra sí mismo.

### 🐞 Enjambre

- **Ventajas:** Normal, Raíz, Aura, Mente, Duna, Impacto, Enjambre, Dragón.
- **Neutro:** Chispa, Eclipse, Toxina, Espectro.
- **Desventajas:** Brasa, Marea, Escarcha, Roca, Vendaval, Metal, Enjambre.

**Regla especial:** Enjambre es fuerte y débil contra sí mismo.

### 🐉 Dragón

- **Ventajas:** Normal, Brasa, Toxina, Dragón.
- **Neutro:** Marea, Raíz, Chispa, Roca, Vendaval, Eclipse, Metal, Mente, Duna, Impacto, Espectro.
- **Desventajas:** Escarcha, Aura, Enjambre, Dragón.

**Regla especial:** Dragón es fuerte y débil contra sí mismo.

## 3. Multiplicadores

Para una carta objetivo de un solo tipo:

- **Ventaja:** ×1.5.
- **Neutral:** ×1.
- **Desventaja:** ×0.75.

Para una carta objetivo de dos tipos, se combinan las dos relaciones:

| Relación contra tipo 1 | Relación contra tipo 2 | Resultado |
|---|---|---:|
| Ventaja | Ventaja | ×2 |
| Ventaja | Neutral | ×1.5 |
| Ventaja | Desventaja | ×1 |
| Neutral | Neutral | El movimiento falla |
| Neutral | Desventaja | ×0.75 |
| Desventaja | Desventaja | ×0.5 |

La combinación **ventaja + desventaja** se cancela y queda neutral, por lo que aplica ×1. No debe confundirse con **neutral + neutral**, que es una regla especial y hace que el movimiento falle automáticamente.

## 4. Regla de tipos fuertes y débiles contra sí mismos

Los tipos **Eclipse, Mente, Espectro, Enjambre y Dragón** tienen una interacción especial con su propio tipo:

- un movimiento de ese tipo es efectivo contra una carta de ese mismo tipo;
- una carta de ese tipo también es vulnerable a movimientos de su mismo tipo.

Por eso el mismo tipo aparece tanto en **Ventajas** como en **Desventajas** de su propia fila. Esto no representa una contradicción ni provoca una cancelación automática. Cuando un movimiento de uno de estos tipos golpea a una carta de ese mismo tipo, la relación ofensiva cuenta como **Ventaja**.

Si la carta objetivo posee un segundo tipo, esa ventaja se combina normalmente con la relación frente al segundo tipo usando la tabla de multiplicadores de doble tipo.

## 5. Redondeo

El daño final siempre se expresa como entero:

- los resultados decimales se redondean al entero más cercano;
- cuando el resultado termina exactamente en `.5`, se redondea hacia arriba.

## 6. Resultado de la auditoría

La tabla fue revisada como conjunto completo antes de considerarse final:

- los 18 tipos están presentes;
- todos los enfrentamientos entre tipos distintos están definidos;
- las relaciones entre tipos distintos son simétricas: si A tiene ventaja sobre B, B tiene la desventaja correspondiente frente a A;
- los neutrales entre tipos distintos son recíprocos;
- los únicos casos donde un tipo aparece simultáneamente como ventaja y desventaja son Eclipse, Mente, Espectro, Enjambre y Dragón frente a sí mismos, conforme a su regla especial;
- no quedan contradicciones conocidas en la tabla de diseño.

La antigua auditoría pendiente de la tabla v0.2 queda cerrada con esta versión.

## 7. Requisito de implementación

Cuando se programe el sistema:

1. la tabla debe almacenarse en una única fuente de datos;
2. el motor de combate y **AYUDA/TABLA** deben consultar esa misma fuente;
3. deben existir pruebas automáticas que comprueben la simetría de las relaciones ordinarias;
4. las pruebas deben tratar explícitamente los cinco casos especiales de enfrentamiento contra el mismo tipo;
5. también deben probarse todas las combinaciones posibles para objetivos de dos tipos y la regla especial de doble neutral.
