import { useContext } from "react";
import { TrackerContext } from "../providers/context";

export function useGetTrackerContext() {
  const context = useContext(TrackerContext)!

  return { ...context }
}
