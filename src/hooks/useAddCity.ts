import { useContext } from "react";
import { WorldTimeLiteContext } from "../providers/context";

export function useAddCity() {
  const context = useContext(WorldTimeLiteContext)

  return context && context.addCity ? context.addCity : () => { }
}
