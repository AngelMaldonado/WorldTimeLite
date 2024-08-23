import { createContext, MutableRefObject } from "react"
import { City } from "../types/city"

export type WorldTimeContextType = {
  addedCities: City[],
  setHomeCity?: (city: City) => void,
  addCity?: (city: City) => void,
  removeCity?: (city: City) => void,
}

export type TrackerContextType = {
  trackerRef: MutableRefObject<HTMLDivElement | null>,
  hoverAreaRef: MutableRefObject<HTMLDivElement | null>,
  firstTimeTileRef: MutableRefObject<HTMLLIElement | null>,
  lastTimeTileRef: MutableRefObject<HTMLLIElement | null>,
}

export const WorldTimeLiteContext = createContext<WorldTimeContextType | undefined>(undefined)
export const TrackerContext = createContext<TrackerContextType | undefined>(undefined)
