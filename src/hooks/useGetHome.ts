
import { useContext } from "react";
import { WorldTimeLiteContext } from "../providers/context";

export function useGetHome() {
  const context = useContext(WorldTimeLiteContext)

  let home, homeHour
  if (context && context.addedCities.length > 0) {
    home = context.addedCities.find(c => c.isHome)
    homeHour = parseInt(new Date().toLocaleDateString('en-US', { timeZone: home?.timezone, hour: 'numeric', hour12: false }).split(', ')[1].split(' ')[0])
  } else {
    home = homeHour = undefined
  }

  return { home, homeHour }
}
