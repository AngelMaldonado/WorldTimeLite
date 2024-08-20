import CityTile from './CityTile'
import SearchBox from './SearchBox'
import { useAddedCities } from '../hooks/useAddedCities'

function CitiesContainer() {
  const addedCities = useAddedCities()

  return (
    <div className='cities-container w-4/5 h-2/3 rounded-2xl p-8 bg-white shadow-xl overflow-y-scroll'>
      <SearchBox />
      <ul className='flex flex-col gap-8 mt-20'>
        {addedCities.map((city) => (
          <li key={`${city.country}-${city.exactCity}-tile`}>
            <CityTile city={city} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CitiesContainer
