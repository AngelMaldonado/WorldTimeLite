import { useGetTrackerContext } from "../hooks/useGetTrackerContext"

export default function Tracker() {
  const { trackerRef } = useGetTrackerContext()

  return (
    <div ref={trackerRef} className="tracker w-[2.0625rem] h-full z-10 top-0 absolute rounded-md"></div>
  )
}
