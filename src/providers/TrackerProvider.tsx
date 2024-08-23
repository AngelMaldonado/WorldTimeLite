import { ReactNode, useRef } from "react";
import { TrackerContext } from "./context";

export default function TrackerProvider({ children }: { children: ReactNode }) {
  const trackerRef = useRef(null)
  const hoverAreaRef = useRef(null)
  const firstTimeTileRef = useRef(null)
  const lastTimeTileRef = useRef(null)

  return <TrackerContext.Provider value={
    { trackerRef, hoverAreaRef, firstTimeTileRef, lastTimeTileRef }
  }>
    {children}
  </TrackerContext.Provider>
}
