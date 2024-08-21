import { ArrowPathIcon, HomeIcon, TrashIcon } from '@heroicons/react/20/solid';
import CityTimeRange from './CityTimeRange';
import { City } from '../types/city'
import { useRemoveCity } from '../hooks/useRemoveCity';
import { useSearchTimeZone } from '../hooks/useSearchTimeZone';

const dayNames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Satur']
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function CityTile({ city }: { city: City }) {
  const removeCity = useRemoveCity()
  const { time, searching } = useSearchTimeZone(city.timezone)

  return (
    <div className='flex gap-4 items-center'>
      <div className='min-w-72 auto flex items-center gap-4'>
        <TrashIcon onClick={() => removeCity(city)} className='w-6 h-6 text-gray-700' />
        <div className='w-12 h-12 rounded-full relative bg-slate-100'>
          <HomeIcon className='w-5 h-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-700' />
        </div>
        <div>
          <h4 className='font-semibold'>{city.city}</h4>
          <p>{city.country}</p>
        </div>
      </div>
      <div className='flex w-full justify-end gap-4'>
        <div>
          {time && !searching ? <>
            <h4 className='font-semibold'>{time.datetime.getHours()}:{time.datetime.getMinutes()} {getAbbreviation()}</h4>
            <p>{dayNames[time.datetime.getDay()]}, {monthNames[time.datetime.getMonth()]} {time.datetime.getDate()}</p>
          </> : <ArrowPathIcon className='animate-spin h-5 w-5 mx-auto text-slate-600'></ArrowPathIcon>}
        </div>
        <CityTimeRange />
      </div>
    </div>
  )

  function getAbbreviation() {
    if (time && (/^[a-zA-Z]+$/).test(time.abbreviation)) {
      return time.abbreviation
    } else return time ? 'GMT' + time.abbreviation : 'unknown'
  }
}

export default CityTile
