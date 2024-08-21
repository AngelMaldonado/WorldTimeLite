import { TimeZone } from "../types/timezone"

/**
 *
 * @param searchString string to search for in the world time api
 * @returns a promise of an array of cities that matches their names with the search string
 */
export function getWorldTime(timeZone: string): Promise<TimeZone> {
  return new Promise<TimeZone>(async (resolve) => {
    const res = await fetch(`http://worldtimeapi.org/api/timezone/${timeZone}`)
    const data = await res.json()
    resolve({ ...data, datetime: new Date(data.datetime) })
  })
}
