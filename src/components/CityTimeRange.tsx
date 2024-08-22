import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { TimeZone } from "../types/timezone";

type HourRangeTile = {
  hour: number,
  am_pm: string,
  day: number,
  month: string
}

export default function CityTimeRange({ start }: { start: TimeZone }) {
  const hoursToRender = generateArray(start)

  return (
    <>
      <ul className='h-max flex'>
        {hoursToRender.map(time => {
          if ((hourIsBetween(6, 7, time.hour) && time.am_pm == 'am') || (hourIsBetween(6, 8, time.hour) && time.am_pm == 'pm')) {
            return specialTile(time.hour, time.am_pm)
          } else if ((hourIsBetween(0, 5, time.hour) && time.am_pm == 'am') || (hourIsBetween(9, 11, time.hour) && time.am_pm == 'pm')) {
            return darkTile(time.hour, time.am_pm, time.month, time.day)
          } else {
            return normalTile(time.hour, time.am_pm)
          }
        })}
      </ul>
      <button>
        <ChevronRightIcon className='w-6 h-6 text-gray-700' />
      </button>
    </>
  )

  function normalTile(hour: number, am_pm: string) {
    return (
      <li className='p-2 text-center bg-slate-100'>
        <h4 className='font-semibold'>{hour}</h4>
        <p className='text-xs'>{am_pm}</p>
      </li>
    )
  }

  function specialTile(hour: number, am_pm: string) {
    return (
      <li className='p-2 text-center bg-blue-100'>
        <h4 className='font-semibold'>{hour}</h4>
        <p className='text-xs'>{am_pm}</p>
      </li>
    )
  }

  function darkTile(hour: number, am_pm: string, month: string, day: number) {
    return (
      <li className={'p-2 text-center bg-blue-950 text-white' + (hour == 11 && am_pm == 'pm' ? ' rounded-e-xl' : (hour == 0) ? ' ms-2 rounded-s-xl' : '')}>
        <h4 className='font-semibold'>{hour != 0 ? hour : month}</h4>
        <p className='text-xs'>{hour != 0 ? am_pm : day}</p>
      </li>
    )
  }

  function hourIsBetween(start: number, end: number, hour: number) {
    return hour >= start && hour <= end
  }

  function generateArray(startDate: TimeZone): HourRangeTile[] {
    const hour_12 = (hours: number) => hours > 12 ? hours - 12 : hours
    const start = new Date(startDate.year, startDate.month, startDate.month_day, startDate.hour_24)
    start.setHours(start.getHours() - 1)
    return new Array(21).fill({}).map(_ => {
      start.setHours(start.getHours() + 1)
      return {
        hour: hour_12(start.getHours()),
        am_pm: start.getHours() >= 12 ? 'pm' : 'am',
        day: start.getDate(),
        month: start.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
      }
    })
  }
}
