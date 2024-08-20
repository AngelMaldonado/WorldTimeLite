import { ReactNode, useState } from "react"
import { WorldTimeContextType, WorldTimeLiteContext } from "./context"
import { City } from "../types/city"

function WorldTimeLiteProvider({ children }: { children: ReactNode }) {
  const [context, setContext] = useState<WorldTimeContextType>({
    homeCity: undefined,
    addedCities: [],
  })

  const setHomeCity = (city: City) => {
    setContext({
      ...context,
      homeCity: { ...city, isHome: true },
    })
  }

  const addCity = (city: City) => {
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
