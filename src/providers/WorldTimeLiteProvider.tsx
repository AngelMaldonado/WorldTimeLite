import { ReactNode, useEffect, useState } from "react"
import { WorldTimeContextType, WorldTimeLiteContext } from "./context"
import { City } from "../types/city"

function WorldTimeLiteProvider({ children }: { children: ReactNode }) {
  const storageContext = JSON.parse(localStorage.getItem('context') ?? '{"addedCities": []}')

  const [context, setContext] = useState<WorldTimeContextType>(storageContext)

  useEffect(() => {
    localStorage.setItem('context', JSON.stringify(context))
  }, [context])

  const setHomeCity = (city: City) => {
    const addedCities = context.addedCities
    const previousHome = addedCities.filter((c) => c.isHome)[0]

    addedCities.splice(addedCities.indexOf(previousHome), 1, { ...previousHome, isHome: false })
    addedCities.splice(addedCities.indexOf(city), 1, { ...city, isHome: true })

    setContext({
      ...context,
      addedCities: addedCities,
    })
  }

  const addCity = (city: City) => {
    if (context.addedCities.length == 0) {
      city.isHome = true
    }

    setContext({
      ...context,
      addedCities: [...context.addedCities, city],
    })
  }

  const removeCity = (city: City) => {
    setContext({
      ...context,
      addedCities: context.addedCities.filter((c) => c != city),
    })
  }

  return (
    <WorldTimeLiteContext.Provider value={{ ...context, setHomeCity, addCity, removeCity }}>
      {children}
    </WorldTimeLiteContext.Provider >
  )
}

export default WorldTimeLiteProvider
