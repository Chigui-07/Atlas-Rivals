# Atlas Rivals

Juego de estrategia y colección de cartas inspirado en países, su naturaleza, lugares, cultura, gastronomía y otros elementos representativos.

## Versión activa: Guatemala 1.0

**Rama:** `guatemala-1.0`  
**Estado:** programación del núcleo iniciada.  
**País piloto:** Guatemala.  
**Plataforma objetivo inicial:** Web.  
**Dispositivos objetivo:** teléfonos y computadoras mediante navegador.  
**Diseño móvil principal:** vertical.  

`main` se mantiene como la rama estable. El desarrollo de Guatemala 1.0 se realiza exclusivamente en su rama hasta que la versión esté preparada para integrarse.

## Tecnología

- Node.js 24 LTS.
- npm.
- TypeScript.
- React.
- Vite.
- Vitest.
- CSS/CSS Modules.

El núcleo de combate se mantiene separado de React para poder probar las reglas de forma independiente de la interfaz.

## Documentación

- [`docs/GUATEMALA_1_0.md`](docs/GUATEMALA_1_0.md) — alcance y estado de la versión.
- [`docs/PLATAFORMA_WEB.md`](docs/PLATAFORMA_WEB.md) — dirección web adaptable, móvil/computadora, interacción y rendimiento.
- [`docs/ARQUITECTURA_TECNICA.md`](docs/ARQUITECTURA_TECNICA.md) — tecnologías, estructura del código y estrategia de pruebas.
- [`docs/GAMEPLAY.md`](docs/GAMEPLAY.md) — reglas de partida, rondas, movimientos, Energía, objetos, estados y desconexiones.
- [`docs/MODELO_TECNICO.md`](docs/MODELO_TECNICO.md) — decisiones del modelo técnico completo del núcleo de combate.
- [`docs/OBJECTS_FIRST_TEST.md`](docs/OBJECTS_FIRST_TEST.md) — catálogo y valores provisionales de objetos para la primera prueba.
- [`docs/TYPES.md`](docs/TYPES.md) — tabla final auditada de 18 tipos, multiplicadores y reglas de doble tipo.
- [`docs/STARTER_DECK.md`](docs/STARTER_DECK.md) — mazo inicial fijo del tutorial de Guatemala 1.0.
- [`docs/PROGRESSION_ECONOMY.md`](docs/PROGRESSION_ECONOMY.md) — rarezas, sobres, Oro, Camino de Estrellas, maestría, misiones, Pase y tienda.
- [`docs/INTERFACE.md`](docs/INTERFACE.md) — tutorial, menú e interfaz de partida.
- [`docs/PRE_PROGRAMMING_CHECKLIST.md`](docs/PRE_PROGRAMMING_CHECKLIST.md) — lista de control previa al primer núcleo.
- [`docs/GITHUB_WORKFLOW.md`](docs/GITHUB_WORKFLOW.md) — ramas, commits y mantenimiento del repositorio.

## Estado del núcleo

El primer `Feat:` ya inició la implementación real:

- proyecto React + TypeScript + Vite;
- Vitest configurado;
- 18 tipos oficiales codificados;
- `TablaTipos` implementada como fuente técnica del combate;
- cálculo de multiplicadores de uno y dos tipos;
- regla de doble neutral;
- casos especiales de Eclipse, Mente, Espectro, Enjambre y Dragón;
- redondeo de daño `.5` hacia arriba;
- primeras pruebas automáticas;
- workflow de GitHub Pages para la rama `guatemala-1.0`.

## Desarrollo local

```bash
npm install
npm run dev
```

Pruebas:

```bash
npm test
```

Construcción:

```bash
npm run build
```

## Despliegue de pruebas

Durante el desarrollo, la rama `guatemala-1.0` puede desplegarse con GitHub Pages mediante GitHub Actions.

El proyecto usa `base: '/Atlas-Rivals/'` en Vite para funcionar correctamente en la ruta del repositorio.

Para la beta completa, la dirección recomendada es alojar el frontend en un servicio web de producción y utilizar Supabase para autenticación, base de datos y servicios online cuando estos sistemas entren en desarrollo. GitHub seguirá siendo el repositorio del código.

## Principios de Guatemala 1.0

- Guatemala es el único país del set piloto inicial.
- Las cartas pueden representar lugares, animales, cultura, gastronomía y otras categorías relacionadas con el país.
- Guatemala no tiene que quedar “completada” en esta versión; futuras versiones pueden añadir nuevas cartas guatemaltecas junto con otros países.
- El objetivo de esta rama es validar el núcleo del juego antes de ampliar el contenido.
- Guatemala 1.0 se desarrolla como juego web adaptable, con una sola experiencia accesible desde teléfono y computadora.
- La interacción esencial debe funcionar tanto mediante toque como mediante clic.
- La monetización no se priorizará por encima de jugabilidad, balance, estabilidad y rendimiento.

## Próximo objetivo

Continuar el núcleo implementando las entidades de combate y comenzar a cargar el contenido real del mazo inicial de Guatemala sobre las estructuras técnicas ya definidas.
