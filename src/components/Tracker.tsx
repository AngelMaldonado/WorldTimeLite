import { useEffect } from "react"
import { useGetTrackerContext } from "../hooks/useGetTrackerContext"

export default function Tracker() {
  const { trackerRef, hoverAreaRef } = useGetTrackerContext()

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const offsetX = e.offsetX
      if (trackerRef && trackerRef.current) {
        const left = `${hoverAreaRef.current!.offsetLeft + offsetX - (trackerRef.current.offsetWidth / 2)}px`
        trackerRef.current.animate({ left }, { duration: 200, fill: 'forwards' })
      }
    }

    if (trackerRef.current && hoverAreaRef.current) {
      trackerRef.current.style.opacity = '.5'
      trackerRef.current.style.left = hoverAreaRef.current.offsetLeft + 'px'
      hoverAreaRef.current.addEventListener('mousemove', handleMouse)
    }
  }, [])

  return (
    <div ref={trackerRef} className="tracker w-[2.0625rem] h-full z-10 top-0 absolute rounded-md"></div>
  )
}
