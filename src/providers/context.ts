import { createContext } from "react"
import { City } from "../types/city"

export type WorldTimeContextType = {
  homeCity?: City,
  addedCities: City[],
  setHomeCity?: (city: City) => void,
  addCity?: (city: City) => void,
  removeCity?: (city: City) => void,
}

export const WorldTimeLiteContext = createContext<WorldTimeContextType | undefined>(undefined)
