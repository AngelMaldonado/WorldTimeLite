import { useContext } from "react";
import { WorldTimeLiteContext } from "../providers/context";

export function useSetHome() {
  const context = useContext(WorldTimeLiteContext)

  return context && context.setHomeCity ? context.setHomeCity : () => { }
}
