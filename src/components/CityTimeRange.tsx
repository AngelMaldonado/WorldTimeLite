import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { TimeZone } from "../types/timezone";
import { useGetTrackerContext } from "../hooks/useGetTrackerContext";
import { useEffect } from "react";

type HourRangeTile = {
  hour: number,
  am_pm: string,
  day: number,
  month: string
}

export default function CityTimeRange({ start, isHome }: { start: TimeZone, isHome: boolean }) {
  const hoursToRender = generateHoursArray(start)
  const { firstTimeTileRef, lastTimeTileRef, trackerRef, hoverAreaRef } = useGetTrackerContext()

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const offsetX = e.offsetX
      if (trackerRef && trackerRef.current) {
        const left = `${hoverAreaRef.current!.offsetLeft + offsetX - (trackerRef.current.offsetWidth / 2)}px`
        trackerRef.current.animate({ left }, { duration: 200, fill: 'forwards' })
      }
    }

    if (firstTimeTileRef.current && trackerRef.current && hoverAreaRef.current) {
      // Move tracker to the first time tile offset tacking into account the tracker width
      trackerRef.current.style.opacity = '.5'
      trackerRef.current.style.left = hoverAreaRef.current.offsetLeft + 'px'
      hoverAreaRef.current.addEventListener('mousemove', handleMouse)
      return () => {
        firstTimeTileRef.current!.removeEventListener('mousemove', handleMouse)
      }
    }
  }, [])

  return (
    <>
      <ul className='time-range w-full h-max flex'>
        {hoursToRender.map((time, index) => {
          if ((hourIsBetween(6, 7, time.hour) && time.am_pm == 'am') || (hourIsBetween(6, 8, time.hour) && time.am_pm == 'pm')) {
            return <li ref={getRef(index)} key={time.hour + time.am_pm} className='p-2 text-center bg-blue-100'>
              <h4 className='font-semibold'>{time.hour}</h4>
              <p className='text-xs'>{time.am_pm}</p>
            </li>
          } else if ((hourIsBetween(0, 5, time.hour) && time.am_pm == 'am') || (hourIsBetween(9, 11, time.hour) && time.am_pm == 'pm')) {
            return <li ref={getRef(index)} key={time.hour + time.am_pm} className={'p-2 text-center bg-blue-950 text-white' +
              (time.hour == 11 && time.am_pm == 'pm' ? ' rounded-e-xl' : (time.hour == 0) ? (index != 0) ? ' ms-2 rounded-s-xl' : ' rounded-s-xl' : '')
            }>
              <h4 className={'font-semibold' + (time.hour == 0 ? ' text-xs py-1' : '')}>{time.hour != 0 ? time.hour : time.month}</h4>
              <p className='text-xs'>{time.hour != 0 ? time.am_pm : time.day}</p>
            </li>
          } else {
            return <li ref={getRef(index)} key={time.hour + time.am_pm} className='p-2 text-center bg-slate-100'>
              <h4 className='font-semibold'>{time.hour}</h4>
              <p className='text-xs'>{time.am_pm}</p>
            </li>
          }
        })}
      </ul>
      <button>
        <ChevronRightIcon className='w-6 h-6 text-gray-700' />
      </button>
    </>
  )

  function getRef(index: number) {
    if (!isHome) return null
    if (index == 0 && firstTimeTileRef.current == null) return firstTimeTileRef
    if (index == 20 && lastTimeTileRef.current == null) return lastTimeTileRef
    return null
  }

  function hourIsBetween(start: number, end: number, hour: number) {
    return hour >= start && hour <= end
  }

  function generateHoursArray(startDate: TimeZone): HourRangeTile[] {
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
