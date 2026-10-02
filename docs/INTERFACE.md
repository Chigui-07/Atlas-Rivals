# Interfaz y tutorial — Guatemala 1.0

## 0. Principio web responsive

La interfaz de Guatemala 1.0 se diseña como **experiencia web adaptable** y debe funcionar correctamente tanto en teléfonos como en computadoras.

Principios obligatorios:

- cartas y botones cómodos de seleccionar con el dedo en móvil;
- interacción clara mediante clic en computadora;
- elementos importantes legibles en pantallas pequeñas;
- aprovechamiento razonable del espacio adicional en pantallas grandes;
- separación suficiente entre zonas táctiles para evitar pulsaciones accidentales;
- información esencial accesible sin depender exclusivamente de hover;
- navegación que no requiera teclado para jugar;
- menús que no muestren demasiada información simultáneamente en móvil;
- animaciones y efectos que no comprometan el rendimiento;
- una misma estructura funcional de juego para móvil y computadora.

En teléfonos, la referencia principal seguirá siendo una disposición **vertical**. En computadoras, la interfaz podrá reorganizarse en columnas o paneles más anchos mediante diseño responsive.

## 1. Primera experiencia

Flujo general acordado:

1. Introducción/tutorial de las reglas básicas.
2. Elección del nombre de usuario.
3. Entrega del mazo inicial fijo de Guatemala 1.0.
4. Partida guiada.
5. Desbloqueo del menú principal completo al terminar el tutorial.

El mazo inicial se conserva después de completar la partida guiada.

Todo este flujo debe poder completarse cómodamente tanto mediante toque como mediante clic.

## 2. Contenido mínimo del tutorial

El tutorial debe cubrir las mecánicas vigentes del juego:

- qué es una carta;
- Vida;
- uno o dos tipos;
- ventajas y desventajas;
- movimientos;
- Energía;
- usos limitados e ilimitados;
- rondas y lanzamiento de dado;
- cambio de carta;
- objetos;
- estados básicos cuando aparezcan;
- condición de victoria.

No deben reintroducirse mecánicas descartadas de versiones anteriores del diseño, como captura de cartas, pozo o resolución por empate.

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

En la zona superior del menú deben quedar accesibles la identidad básica del jugador y su Oro.

En móvil, la navegación debe priorizar pocas acciones claras por pantalla y puede utilizar desplazamiento vertical. En computadora podrá aprovecharse mayor anchura sin cambiar la jerarquía funcional.

## 4. Jugar

Antes de iniciar una partida, el sistema necesita validar como mínimo:

- mazo de 6 cartas sin copias exactas repetidas;
- 2 movimientos activos por carta;
- al menos 1 movimiento ilimitado por carta;
- hasta 3 objetos;
- compatibilidad de movimientos equipados.

El botón para iniciar partida y cualquier selector previo deben funcionar correctamente con toque y clic.

## 5. Colección

Debe permitir consultar:

- cartas;
- rareza;
- país;
- tipo o tipos;
- Vida y datos de carta;
- progreso de repetidas/cosméticos;
- movimientos propios y equipables;
- progreso de Maestría cuando corresponda.

La colección debe permitir revisar contenido sin exigir texto excesivamente pequeño. En móvil puede dividirse entre vista resumida y detallada con desplazamiento vertical; en computadora puede mostrar más columnas o información simultánea cuando sea cómodo.

## 6. Mazos

Debe permitir:

- crear/editar la selección de 6 cartas;
- configurar los 2 movimientos activos de cada carta;
- elegir hasta 3 objetos de la partida;
- detectar configuraciones inválidas antes de entrar a combate.

El proceso de edición debe poder realizarse mediante selección directa. Arrastrar elementos puede utilizarse como mejora opcional, pero no debe ser la única forma de interacción.

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

Orden acordado:

1. regalo gratis;
2. 3 ofertas diarias;
3. sobres;
4. personalización con al menos 4 artículos rotativos.

El regalo y la sección de personalización rotan diariamente.

Los sobres se abren al obtener/comprar; no se necesita una sección de inventario de sobres cerrados.

La tienda debe conservar una jerarquía clara en pantallas pequeñas y no depender de hover para mostrar información necesaria. En computadora puede usar una distribución más ancha.

## 11. Perfil

Debe alojar información de identidad y progresión del jugador. Los campos finales se definirán durante el diseño de datos/UI.

La reputación debe poder consultarse aquí o desde un espacio accesible relacionado con juego competitivo cuando ese sistema sea implementado.

## 12. Ajustes

Se reserva para opciones generales del juego. La lista concreta se definirá durante la implementación del cliente web.

Los ajustes futuros pueden incluir opciones de rendimiento, accesibilidad, audio y comodidad de interacción.

## 13. Interfaz de partida

Debe mostrar de forma clara, como mínimo:

- carta activa propia;
- Vida;
- Energía;
- movimientos activos y sus costes/usos;
- acceso a objetos;
- temporizador de 20 segundos;
- carta activa rival y su estado visible;
- estados activos cuando existan;
- indicador de ronda/orden cuando sea necesario.

El Poder de Maestría debe mostrarse solo cuando esté desbloqueado/disponible según sus reglas.

La partida debe permitir seleccionar movimientos, cartas y objetos tanto con pulsaciones táctiles como con clics claros.

### Distribución móvil

En teléfono se prioriza formato vertical, con información organizada en zonas apiladas y controles suficientemente grandes.

### Distribución de computadora

En computadora puede aprovecharse la anchura adicional para mostrar información lado a lado, siempre que conserve las mismas acciones, reglas y estado de partida que la vista móvil.

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

En móvil puede presentarse mediante una vista desplazable. En computadora podrá aprovechar paneles más amplios o columnas si mejora la lectura.

## 15. Temporizador y desconexión en UI

- El turno muestra una cuenta de 20 segundos.
- Al agotarse, la acción se omite.
- Ante desconexión, la partida indica claramente que está pausada.
- Debe mostrarse el periodo de reconexión de hasta 2 minutos.
- Si el jugador vuelve, el turno afectado se reanuda/reinicia según la lógica definida.
- Si no vuelve dentro del límite, se comunica la derrota automática correspondiente.

## 16. Cuenta y progreso persistente

La interfaz debe asumir que el jugador tendrá identidad y progreso persistentes.

Las pantallas de perfil, colección, mazos, economía y progresión deben diseñarse de forma compatible con datos que puedan recuperarse después de cerrar el navegador, volver a abrir el juego o iniciar sesión desde otro dispositivo.

La misma cuenta debe poder utilizarse desde teléfono o computadora.

La tecnología concreta de autenticación, backend y almacenamiento todavía no está decidida.
