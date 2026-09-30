# Flujo de GitHub — Atlas Rivals

## 1. Ramas

### `main`

- Es la rama estable del proyecto.
- No se utiliza como rama de trabajo diario de una versión incompleta.
- Recibe versiones cuando estén preparadas para considerarse estables.

### Ramas por versión

Cada versión del juego se desarrolla en una rama diferente.

Primera versión:

- `guatemala-1.0`

Las futuras versiones deben mantener su trabajo separado de `main` y de otras versiones.

## 2. Commits

Los mensajes de commit utilizan uno de estos prefijos:

- `Feat:` — nueva funcionalidad.
- `Docs:` — documentación.
- `Fix:` — corrección de errores.
- `Balance:` — ajustes de balance del juego.
- `Style:` — cambios visuales o de estilo sin alterar lógica principal.
- `Refactor:` — reorganización interna del código sin cambiar comportamiento esperado.
- `Test:` — pruebas.
- `Chore:` — mantenimiento, configuración o tareas auxiliares.

### Ejemplos

```text
Docs: define reglas de combate de Guatemala 1.0
Feat: add energy system
Balance: adjust Brasa movement damage
Fix: prevent duplicated cards in deck
Refactor: separate battle and collection models
Test: add type multiplier tests
Chore: configure project structure
```

## 3. README como bitácora

Cada rama de versión debe mantener su propio `README.md` actualizado.

El README debe indicar como mínimo:

- versión/rama activa;
- fase actual;
- sistemas confirmados;
- decisiones pendientes importantes;
- cambios relevantes realizados en la versión;
- siguiente objetivo de desarrollo.

Los documentos de `docs/` contienen el detalle. El README funciona como resumen y bitácora, no como reemplazo de toda la especificación.

## 4. Regla de documentación

Cuando una decisión cambie una regla importante del juego:

1. se modifica el documento correspondiente;
2. se actualiza el README si cambia el estado o la bitácora de la versión;
3. se usa un commit `Docs:` o `Balance:` según corresponda;
4. el código posterior debe seguir la documentación actualizada.

Esto evita que el chat sea la única fuente de verdad del proyecto.

## 5. Balance

Los cambios que alteren valores jugables deben utilizar `Balance:` cuando el objetivo principal sea ajustar:

- Vida;
- daño;
- Energía;
- costes/usos de movimientos;
- relaciones de tipos;
- objetos;
- estados;
- recompensas;
- economía;
- probabilidades.

El documento afectado debe actualizarse en el mismo cambio o antes de implementar el nuevo balance.

## 6. Prioridades de Guatemala 1.0

Antes de implementar el balance completo:

- transcribir la tabla v0.2 final de tipos y validarla;
- usar `STARTER_DECK.md` como referencia del mazo inicial fijo;
- cerrar valores definitivos de los objetos que entren en la primera implementación;
- diseñar el modelo de datos.

Los primeros commits de la rama serán principalmente `Docs:`, `Balance:` y `Chore:`. Cuando empiece la implementación del núcleo aparecerán los primeros `Feat:` y `Test:`.

## 7. Criterio para llevar Guatemala 1.0 a `main`

`guatemala-1.0` no debe considerarse estable únicamente por compilar. Antes de integrarla a `main`, la versión debe tener:

- reglas documentadas y consistentes;
- núcleo de combate funcional;
- validaciones de mazo;
- sistema de tipos probado;
- manejo de tiempo/desconexión;
- progresión/economía sin contradicciones críticas;
- pruebas básicas de los sistemas principales;
- README de versión actualizado.
