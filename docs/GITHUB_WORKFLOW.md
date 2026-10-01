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

## 2. Idioma del proyecto

A partir de Guatemala 1.0, el idioma principal de trabajo de Atlas Rivals es **español**.

Esto aplica a:

- mensajes de commit;
- documentación;
- títulos, descripciones y bitácoras;
- comentarios propios del proyecto;
- nombres descriptivos de archivos nuevos cuando sea práctico;
- nombres de conceptos del dominio creados por el proyecto, como `Carta`, `Movimiento`, `Objeto`, `Estado`, `Mazo`, `Jugador` y `Partida`.

Se mantienen en su forma original los términos que deban conservarse por convención o compatibilidad técnica, por ejemplo:

- prefijos de commit como `Feat:`, `Docs:`, `Fix:` y `Balance:`;
- nombres propios de APIs, librerías, frameworks y herramientas;
- palabras reservadas y elementos obligatorios del lenguaje de programación;
- nombres técnicos externos que no controle Atlas Rivals.

No es necesario renombrar retroactivamente archivos ya existentes solo por esta regla. Todo contenido nuevo debe seguirla desde este punto.

## 3. Mensajes de commit

Los mensajes de commit utilizan uno de estos prefijos:

- `Feat:` — nueva funcionalidad.
- `Docs:` — documentación.
- `Fix:` — corrección de errores.
- `Balance:` — ajustes de balance del juego.
- `Style:` — cambios visuales o de estilo sin alterar lógica principal.
- `Refactor:` — reorganización interna del código sin cambiar comportamiento esperado.
- `Test:` — pruebas.
- `Chore:` — mantenimiento, configuración o tareas auxiliares.

Después del prefijo, la descripción del commit debe escribirse en **español**.

### Ejemplos

```text
Docs: definir reglas de combate de Guatemala 1.0
Feat: añadir sistema de Energía
Balance: ajustar daño de movimiento Brasa
Fix: impedir cartas duplicadas en el mazo
Refactor: separar modelos de combate y colección
Test: añadir pruebas de multiplicadores de tipo
Chore: configurar estructura inicial del proyecto
```

## 4. README como bitácora

Cada rama de versión debe mantener su propio `README.md` actualizado.

El README debe indicar como mínimo:

- versión/rama activa;
- fase actual;
- sistemas confirmados;
- decisiones pendientes importantes;
- cambios relevantes realizados en la versión;
- siguiente objetivo de desarrollo.

Los documentos de `docs/` contienen el detalle. El README funciona como resumen y bitácora, no como reemplazo de toda la especificación.

## 5. Regla de documentación

Cuando una decisión cambie una regla importante del juego:

1. se modifica el documento correspondiente;
2. se actualiza el README si cambia el estado o la bitácora de la versión;
3. se usa un commit `Docs:` o `Balance:` según corresponda;
4. el código posterior debe seguir la documentación actualizada.

Esto evita que el chat sea la única fuente de verdad del proyecto.

## 6. Balance

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

## 7. Prioridades de Guatemala 1.0

Antes de comenzar el primer `Feat:` del núcleo:

- usar la tabla final de tipos ya documentada y validada;
- usar `STARTER_DECK.md` como referencia del mazo inicial fijo;
- usar `OBJECTS_FIRST_TEST.md` como referencia de los objetos de la primera prueba;
- diseñar el modelo técnico del combate.

Los primeros commits de la rama serán principalmente `Docs:`, `Balance:` y `Chore:`. Cuando empiece la implementación del núcleo aparecerán los primeros `Feat:` y `Test:`.

## 8. Criterio para llevar Guatemala 1.0 a `main`

`guatemala-1.0` no debe considerarse estable únicamente por compilar. Antes de integrarla a `main`, la versión debe tener:

- reglas documentadas y consistentes;
- núcleo de combate funcional;
- validaciones de mazo;
- sistema de tipos probado;
- manejo de tiempo/desconexión;
- progresión/economía sin contradicciones críticas;
- pruebas básicas de los sistemas principales;
- README de versión actualizado.
