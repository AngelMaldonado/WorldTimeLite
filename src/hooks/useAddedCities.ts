import { useContext } from "react";
import { WorldTimeLiteContext } from "../providers/context"

export function useAddedCities() {
  const context = useContext(WorldTimeLiteContext)

  return context ? context.addedCities : []
}
