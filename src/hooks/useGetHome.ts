
import { useContext } from "react";
import { WorldTimeLiteContext } from "../providers/context";

export function useGetHome() {
  const context = useContext(WorldTimeLiteContext)

  return context && context.addedCities.length > 0 ? context.addedCities.find(c => c.isHome) : undefined
}
