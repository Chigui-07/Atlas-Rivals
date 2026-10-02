# Distribución pública de Atlas Rivals

Este documento separa los entornos de prueba del lugar donde Atlas Rivals se publicará para jugadores reales.

## 1. Pruebas durante desarrollo

**GitHub Pages** se utilizará como entorno sencillo para probar compilaciones web durante Guatemala 1.0.

GitHub Pages no se considera la plataforma pública principal del juego.

## 2. Sitio oficial

La versión pública principal de Atlas Rivals se alojará en **Cloudflare** y, cuando corresponda, utilizará un **dominio propio**.

Ese sitio será la fuente oficial del juego y deberá permitir:

- jugar desde teléfono y computadora;
- iniciar sesión con la misma cuenta;
- conservar colección, mazos y progreso;
- acceder a nuevas versiones sin instalar manualmente actualizaciones;
- compartir un enlace oficial estable del juego.

La decisión exacta entre los servicios web de Cloudflare se cerrará cuando preparemos el despliegue público de la beta.

## 3. Descubrimiento de jugadores

Además del sitio oficial, se preparará una publicación de Atlas Rivals en **itch.io** como juego web jugable desde navegador.

El objetivo de itch.io será servir como una segunda puerta de entrada para descubrir el juego y dirigir jugadores hacia Atlas Rivals.

## 4. Portales adicionales

Cuando la beta esté suficientemente pulida, estable y optimizada, se podrá evaluar su presentación a portales de juegos web con audiencias mayores, por ejemplo **CrazyGames**.

Esto no es un requisito para Guatemala 1.0 y dependerá de que la versión cumpla los requisitos de cada plataforma.

## 5. Backend y datos persistentes

La dirección técnica prevista para cuentas y datos persistentes será **Supabase**.

Supabase se utilizará cuando empecemos a implementar sistemas que necesiten persistencia, como:

- autenticación y cuentas;
- nombre de usuario;
- colección de cartas;
- mazos guardados;
- Oro y recompensas;
- progreso y Maestría;
- misiones y Pase;
- historial de partidas;
- datos necesarios para partidas online.

El motor de combate permanecerá separado del backend para poder probar las reglas sin depender de conexión o base de datos.

## Resumen

- **GitHub:** código fuente y colaboración.
- **GitHub Pages:** pruebas web durante desarrollo.
- **Cloudflare + dominio propio:** sitio oficial público.
- **Supabase:** cuentas y persistencia.
- **itch.io:** publicación adicional para descubrimiento.
- **Portales web mayores:** expansión posterior si el juego está preparado.
