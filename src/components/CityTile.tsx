import { ArrowPathIcon, HomeIcon, TrashIcon } from '@heroicons/react/20/solid';
import CityTimeRange from './CityTimeRange';
import { City } from '../types/city'
import { useRemoveCity } from '../hooks/useRemoveCity';
import { useSearchTimeZone } from '../hooks/useSearchTimeZone';
import { useSetHome } from '../hooks/useSetHome';
import { useGetHome } from '../hooks/useGetHome';
import { TimeZone } from '../types/timezone';

function CityTile({ city }: { city: City }) {
  const removeCity = useRemoveCity()
  const setHome = useSetHome()
  const { homeHour } = useGetHome()
  const { time, searching } = useSearchTimeZone(city.timezone)

  return (
    <div className='flex gap-4 items-center'>
      <div className='min-w-72 auto flex items-center gap-4'>
        <TrashIcon onClick={() => removeCity(city)} className='w-6 h-6 text-gray-700' />
        <button onClick={!city.isHome ? () => setHome(city) : undefined} className='w-12 h-12 rounded-full relative bg-slate-100'>
          {city.isHome ?
            <HomeIcon className='w-5 h-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-700' />
            : <h4 className='font-semibold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              {getHourDifferenceString()}
            </h4>}
        </button>
        <div>
          <h4 className='font-semibold'>{city.city}</h4>
          <p>{city.country}</p>
        </div>
      </div>
      <div className='flex w-full justify-end gap-4'>
        {time && !searching && homeHour != undefined ? (
          <>
            <div>
              <h4 className='font-semibold'>{time.hour_string} {getAbbreviation()}</h4>
              <p>{time.week_day_name}, {time.month_name}</p>
            </div>
            <CityTimeRange start={time} />
          </>
        ) : <ArrowPathIcon className='animate-spin h-5 w-5 mx-auto text-slate-600'></ArrowPathIcon>}
      </div>
    </div >
  )

  /* TODO: esta función puede necesitarse para calcular los desplazamientos de tiempo para el TimeRange component
  function getStartDateForRange(time: TimeZone) {
    if (!city.isHome) {
      const current = new Date(time.year, time.month, time.month_day, time.hour_24)
      const difference = getHourDifference()
      if (difference) {
        current.setHours(current.getHours() + difference)
      }
      return current
    } else {
      return
    }
  }
  */

  function getHourDifferenceString() {
    const difference = getHourDifference()
    if (difference) {
      return difference > 0 ? `+${difference}` : difference.toString()
    } else {
      return '+0'
    }
  }

  function getHourDifference() {
    if (time != undefined && homeHour != undefined) {
      return homeHour - time.hour_24
    }
  }

  function getAbbreviation() {
    if (time && (/^[a-zA-Z]+$/).test(time.abbreviation)) {
      return time.abbreviation
    } else return time ? 'GMT' + time.abbreviation : 'unknown'
  }
}

export default CityTile
