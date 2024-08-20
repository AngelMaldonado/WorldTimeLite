import { useContext } from "react";
import { WorldTimeLiteContext } from "../providers/context";

export function useRemoveCity() {
  const context = useContext(WorldTimeLiteContext)

  return context && context.removeCity ? context.removeCity : () => { }
}
