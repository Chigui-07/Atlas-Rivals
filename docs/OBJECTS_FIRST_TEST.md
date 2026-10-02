# Objetos de la primera prueba — Guatemala 1.0

**Estado:** valores provisionales cerrados para la primera prueba de balance.

Estos objetos forman el catálogo inicial de objetos de combate de Atlas Rivals para Guatemala 1.0. Sus valores podrán ajustarse después de pruebas de balance, pero son la referencia oficial para la primera implementación y prototipo de combate.

## Reglas generales

- Cada jugador puede llevar **hasta 3 objetos** por partida.
- Se permiten como máximo **2 unidades del mismo objeto**, salvo que un objeto especial indique un límite inferior.
- Usar un objeto **consume la acción del turno**.
- Los objetos no pueden revivir cartas derrotadas.
- Una curación nunca puede superar la Vida máxima de la carta.
- Los objetos y sus efectos deben poder utilizarse cómodamente tanto mediante toque en móvil como mediante clic en computadora.

## Catálogo inicial

### 🩹 Vendaje

- Cura **3 ❤️**.
- Solo puede utilizarse sobre la **carta activa**.
- Límite normal: hasta **2** por partida.

### 🧰 Botiquín

- Cura **5 ❤️**.
- Puede utilizarse sobre **cualquier carta viva del equipo**, incluida la carta activa.
- Límite normal: hasta **2** por partida.

### 🚑 Kit de Emergencias

- Cura **4 ❤️**.
- Puede utilizarse sobre **cualquier carta viva del equipo**.
- Además elimina **1 efecto negativo activo** de esa carta, por ejemplo Quemadura o Parálisis.
- Por su versatilidad, se permite como máximo **1 Kit de Emergencias por partida**.

### 🛡️ Protector

- Se aplica a la **carta activa**.
- Reduce en **3 puntos** el próximo daño que reciba esa carta.
- Después de reducir ese daño, el efecto se consume.
- Límite normal: hasta **2** por partida.

### ⚡ Impulso

- Se aplica a la **carta activa**.
- Añade **+2 al daño base** de su próximo movimiento ofensivo.
- El +2 se suma **antes** de aplicar ventajas o desventajas de tipo.
- Después de utilizarse en un movimiento ofensivo, el efecto se consume.
- Límite normal: hasta **2** por partida.

### 🔄 Cambio rápido

- Permite retirar la carta activa y sustituirla inmediatamente por otra **carta viva del equipo**.
- La nueva carta entra activa en el mismo turno.
- La acción del objeto ya consume el turno, por lo que la nueva carta **no puede atacar durante esa misma acción**.
- Límite normal: hasta **2** por partida.

## Estado de balance

Todos estos valores son **provisionales para la primera prueba**.

Durante las pruebas deberán observarse, entre otros puntos:

- si la cantidad de curación alarga demasiado las partidas;
- si Kit de Emergencias ofrece demasiada ventaja por combinar curación y limpieza de estados;
- si Protector reduce demasiado el impacto de movimientos fuertes;
- si Impulso genera picos de daño excesivos al combinarse con ventajas de tipo;
- si Cambio rápido proporciona demasiada flexibilidad defensiva;
- si el límite general de 2 copias y el límite especial de 1 Kit de Emergencias producen variedad suficiente en la selección de objetos.

Cualquier ajuste posterior de estos valores debe registrarse con un commit `Balance:` antes de cambiar el comportamiento del juego.
