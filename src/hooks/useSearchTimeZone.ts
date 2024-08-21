import { useEffect, useState } from "react"
import { TimeZone } from "../types/timezone"
import { getWorldTime } from "../services/worldTimeService"

export function useSearchTimeZone(timeZone: string) {
  const [searching, setSearching] = useState(false)
  const [time, setTime] = useState<TimeZone | undefined>(undefined)

  useEffect(() => {
    const load = async () => {
      setSearching(true)
      setTime(await getWorldTime(timeZone))
      setSearching(false)
    }
    load()
  }, [])

  return { searching, time }
}

