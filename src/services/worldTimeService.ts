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
    const datetime = new Date(data.datetime)
    const dateString = datetime.toLocaleDateString(
      'en-US',
      { timeZone: timeZone, weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }
    ).split(', ')
    const hour_24 = parseInt(new Date().toLocaleDateString('en-US', { timeZone: timeZone, hour: 'numeric', hour12: false }).split(', ')[1].split(' ')[0])

    resolve({
      ...data,
      year: datetime.getFullYear(),
      week_day_name: dateString[0],
      month: datetime.getMonth(),
      month_name: dateString[1],
      month_day: datetime.getDate(),
      hour_string: (dateString[2].startsWith('0') ? dateString[2].slice(1) : dateString[2]).toLowerCase().replace(' ', ''),
      hour_12: parseInt(dateString[2].split(':')[0]),
      hour_24: hour_24
    })
  })
}
