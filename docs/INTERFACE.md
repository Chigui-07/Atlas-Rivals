# Interfaz y tutorial — Guatemala 1.0

## 1. Primera experiencia

Flujo general acordado:

1. Introducción/tutorial de las reglas básicas.
2. Elección del nombre de usuario.
3. Partida guiada.
4. Desbloqueo del menú principal completo al terminar el tutorial.

El tutorial debe enseñar de forma gradual y sin saturar al jugador.

## 2. Contenido mínimo del tutorial

La versión final del tutorial debe cubrir las mecánicas vigentes del juego:

- qué es una carta;
- Vida;
- uno o dos tipos;
- ventajas y desventajas;
- movimientos;
- Energía;
- usos limitados e ilimitados;
- cambio de carta;
- objetos;
- condición de victoria.

No deben reintroducirse mecánicas descartadas de versiones antiguas del diseño, como captura de cartas, pozo o resolución por empate.

## 3. Menú principal

Después del tutorial se habilitan las secciones:

- **Jugar**
- **Colección**
- **Mazos**
- **Misiones**
- **Pase de Batalla**
- **Camino de Estrellas**
- **Tienda**
- **Perfil**
- **Ajustes**

## 4. Jugar

Debe servir como entrada al modo de partida.

Antes de iniciar una partida, el sistema necesita validar como mínimo:

- mazo de 6 cartas distintas;
- 2 movimientos activos por carta;
- al menos 1 movimiento ilimitado por carta;
- 3 objetos elegidos;
- compatibilidad de movimientos equipados.

## 5. Colección

Debe permitir consultar el contenido que el jugador posee:

- cartas;
- rareza;
- país;
- tipo o tipos;
- progreso de repetidas/cosméticos;
- movimientos disponibles;
- progreso de Maestría cuando corresponda.

La estructura visual exacta se diseñará durante la fase de UI.

## 6. Mazos

Debe permitir:

- crear/editar la selección de 6 cartas;
- configurar los 2 movimientos activos de cada carta;
- elegir los 3 objetos de la partida;
- detectar configuraciones inválidas antes de entrar a combate.

## 7. Misiones

Debe separar con claridad:

- 3 misiones diarias;
- 6 misiones semanales;
- progreso de cada objetivo;
- fichas del Pase obtenidas.

## 8. Pase de Batalla

Debe mostrar:

- nivel actual;
- progreso dentro de las 200 fichas del nivel;
- ruta gratuita;
- ruta premium;
- recompensas reclamadas y pendientes;
- progreso posterior al nivel 50 para el Sobre de Fin de Pase.

## 9. Camino de Estrellas

Debe mostrar:

- estrellas actuales;
- hitos de recompensa;
- contenido ya obtenido;
- próximos hitos;
- contenido Estelar cuando corresponda.

## 10. Tienda

Orden principal acordado:

1. regalo gratis;
2. 3 ofertas diarias;
3. sobres;
4. personalización con al menos 4 artículos rotativos.

En la zona superior de la interfaz de tienda/economía, el recurso principal visible es el **Oro**.

Los sobres se abren al obtener/comprar; no se necesita una sección de inventario de sobres cerrados.

## 11. Perfil

Debe alojar información de identidad y progresión del jugador. Los campos finales se definirán durante el diseño de datos/UI.

La reputación, cuando se implemente, debe poder representarse aquí o en un espacio accesible relacionado con juego competitivo.

## 12. Ajustes

Se reserva para opciones generales del juego. La lista concreta de ajustes se definirá durante la implementación de cliente.

## 13. Interfaz de partida

La partida debe mostrar de forma clara, como mínimo:

- carta activa;
- Vida;
- Energía;
- movimientos activos y sus costes/usos;
- acceso a objetos;
- temporizador de 20 segundos;
- estado de la carta rival;
- estados activos cuando existan.

El Poder de Maestría debe mostrarse solo cuando esté desbloqueado/disponible según sus reglas.

## 14. AYUDA / TABLA

Durante la partida existe una pestaña **AYUDA/TABLA**.

Debe permitir consultar sin salir del combate:

- lista de tipos;
- ventajas;
- neutrales;
- desventajas;
- multiplicadores ×1.5, ×2, ×1, ×0.75 y ×0.5;
- regla especial de doble neutral;
- reglas rápidas relevantes del combate.

La interfaz debe leer la misma fuente de datos que utilice el motor de combate. No debe existir una tabla visual separada que pueda quedar desactualizada respecto a la lógica real.

## 15. Temporizador y desconexión en UI

- El turno muestra una cuenta de 20 segundos.
- Al agotarse, la acción se omite.
- Ante desconexión, la partida debe indicar claramente que está pausada.
- Debe mostrarse el periodo de reconexión de hasta 2 minutos.
- Al superar ese límite, se comunica la derrota automática correspondiente.
