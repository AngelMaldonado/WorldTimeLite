# World Time Lite with React + TypeScript + Vite

## Descripción

Esta es una aplicación de visualización de horas (zonas horarias) construida con React, TypeScript y Vite. Utiliza la
[API de tiempo mundial](http://worldtimeapi.org/) para obtener la hora actual de diferentes ciudades de todo el mundo.

## Herramientas y recursos utilizados

- [quicktype](https://quicktype.io/typescript): Herramienta para generar tipos TypeScript a partir de datos JSON de la API.

## Proceso de desarrollo (thought process)

1. Primero, analicé el componente final y dividí los elementos visuales en componentes:
   - CityTileComponent:

      ![Imagen de CityTileComponent](/doc/CityTileComponent.png)
   - CityTilesContainer:

      ![Imagen de CityTileContainer](/doc/CityTilesContainer.png)
   - SearchBox:

      ![Imagen de SearchBox](/doc/SearchBox.png)

    Estos componentes se encuentran en la carpeta `src/components`.

2. Analizando la información que se muestra en los
  componentes, la entidad principal es **City**, que
  contiene la información de la ciudad y la hora actual,
  por lo que (con ayuda de *quicktype*) generé la interfaz,
  que se encuentra en `src/interfaces/city.ts`.

3. Para obtener la información de la API, creé un hook
  personalizado `useWorldTimeApi` que se encuentra en
  `src/hooks/useWorldTime.ts`.

4. El servicio para obtener la información de la API se
  encuentra en `src/services/worldTimeService.ts`.

5. La api de worldtime está limitada a devolver únicamente
  las regiones (zonas horarias) y no las ciudades, por lo
  que decidí complementarla con
  [TimezoneAPI](https://api-ninjas.com/api/timezone) (de
  *API Ninjas*) para obtener la región/zona horaria con
  base en la ciudad. El servicio correspondiente de esta
  API se encuentra en `src/services/timezoneService.ts`.

    *Hasta este punto únicamente creé los directorios y
    archivos para la estructura y flujo de trabajo inicial*

6. Inicié trabajando en los componentes de la aplicación,
  de afuera hacia adentro (los componentes padres primero
  y luego los hijos).

7. Cuando llegué al componente `CityTileComponent`, encontré
  otro subcomponente que muestra el rango de horas en cada
  ciudad, por lo que creé el componente `CityTimeRange` en
  `src/components/CityTimeRange.tsx`.
