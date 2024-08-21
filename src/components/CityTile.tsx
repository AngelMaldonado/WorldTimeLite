import { ArrowPathIcon, HomeIcon, TrashIcon } from '@heroicons/react/20/solid';
import CityTimeRange from './CityTimeRange';
import { City } from '../types/city'
import { useRemoveCity } from '../hooks/useRemoveCity';
import { useSearchTimeZone } from '../hooks/useSearchTimeZone';
import { useSetHome } from '../hooks/useSetHome';
import { useGetHome } from '../hooks/useGetHome';

function CityTile({ city }: { city: City }) {
  const removeCity = useRemoveCity()
  const setHome = useSetHome()
  const home = useGetHome()
  const { time, searching } = useSearchTimeZone(city.timezone)

  return (
    <div className='flex gap-4 items-center'>
      <div className='min-w-72 auto flex items-center gap-4'>
        <TrashIcon onClick={() => removeCity(city)} className='w-6 h-6 text-gray-700' />
        <button onClick={!city.isHome ? () => setHome(city) : undefined} className='w-12 h-12 rounded-full relative bg-slate-100'>
          {city.isHome ?
            <HomeIcon className='w-5 h-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-700' />
            : <h4 className='font-semibold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              {getHourDifference()}
            </h4>}
        </button>
        <div>
          <h4 className='font-semibold'>{city.city}</h4>
          <p>{city.country}</p>
        </div>
      </div>
      <div className='flex w-full justify-end gap-4'>
        <div>
          {time && !searching ? <>
            <h4 className='font-semibold'>{time.hour_string} {getAbbreviation()}</h4>
            <p>{time.week_day_name}, {time.month_name}</p>
          </> : <ArrowPathIcon className='animate-spin h-5 w-5 mx-auto text-slate-600'></ArrowPathIcon>}
        </div>
        <CityTimeRange />
      </div>
    </div>
  )

  function getHourDifference() {
    const homeHour = parseInt(new Date().toLocaleDateString('en-US', { timeZone: home?.timezone, hour: 'numeric', hour12: false }))
    if (time) {
      const difference = homeHour - time.hour_24
      return difference > 0 ? `+${difference}` : difference.toString()
    } else {
      return '+0'
    }
  }

  function getAbbreviation() {
    if (time && (/^[a-zA-Z]+$/).test(time.abbreviation)) {
      return time.abbreviation
    } else return time ? 'GMT' + time.abbreviation : 'unknown'
  }
}

export default CityTile
