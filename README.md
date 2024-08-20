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
  componentes, las entidades principales son `City` y
  `Timezone`, ambos tipos se encuentran en
  `src/types/`.

    - `City` ([city.ts](/src/types/city.ts)): con ayuda de **city-timezones** combino
    las propiedades del objeto de esta [biblioteca](https://github.com/kevinroberts/city-timezones)
    con la propiedad `isHome` para saber si la ciudad
    es marcada como *"home"* .

    - `Timezone` ([timezone.ts](/src/types/timezone.ts)):
    contiene la información de la zona horaria, para
    generar el tipo de *TypeScript* me apoyé de
    [quicktype](https://quicktype.io/typescript).

3. Para obtener la información de la API, creé un hook
  personalizado `useWorldTimeApi` que se encuentra en
  `src/hooks/useWorldTime.ts`.

4. El servicio para obtener la información de la API se
  encuentra en `src/services/worldTimeService.ts`.

5. La api de worldtime está limitada a devolver únicamente
  las regiones (zonas horarias) y no las ciudades, por lo
  que decidí complementarla con
  [city-timezones](https://github.com/kevinroberts/city-timezones) para obtener la región/zona horaria con
  base en la ciudad. El servicio correspondiente de esta
  API se encuentra en `src/services/timezoneService.ts`.

6. Inicié trabajando en los componentes de la aplicación,
  de afuera hacia adentro (los componentes padres primero
  y luego los hijos).

7. Cuando llegué al componente `CityTileComponent`, encontré
  otro subcomponente que muestra el rango de horas en cada
  ciudad, por lo que creé el componente `CityTimeRange` en `src/components/CityTimeRange.tsx`.

8. Una vez finalizados los estilos de los componentes,
  decidí iniciar por la funcionalidad de la búsqueda de
  las ciudades, agregar y eliminar ciudades de la lista.

9. Como las ciudades agregadas es un estado global de la
  aplicación, primero creé el [contexto](src/providers/context.ts)
  donde defino el tipo del contexto y creo el contexto
  como tal con `undefined` por defecto.

10. Debido a que existe una lógica clara de cómo se van
  a agregar y eliminar las ciudades, también creé un
  [*provider*](/src/providers/WorldTimeLiteProvider.tsx) para el contexto, que se encarga tanto de
  crear el estado del contexto como de las funciones
  para modificarlo.

11. Con el *provider* creado, envolví los componentes
  principales dentro de `WorldTimeLiteProvider` en `src/App.tsx`.

12. En el contenedor de las ciudades, `CityTilesContainer`,
  utilicé el contexto para obtener las ciudades y
  mostrarlas en la lista. Para esto creé un *hook* para
  prevenir posibles errores de `undefined` en el contexto.

13. Para agregar y eliminar ciudades, también creé un
  *hook* por la misma razón del paso anterior, estos
  *hooks* los utilizan los componentes `SearchBox` (para
  agregar) y `CityTile` (para eliminar).
