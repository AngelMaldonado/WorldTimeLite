import CityTile from './CityTile'
import SearchBox from './SearchBox'
import { useAddedCities } from '../hooks/useAddedCities'
import Tracker from './Tracker'
import { useGetTrackerContext } from '../hooks/useGetTrackerContext'

function CitiesContainer() {
  const addedCities = useAddedCities()
  const { hoverAreaRef } = useGetTrackerContext()

  return (
    <div className='w-auto min-w-[81.2rem] h-2/3 relative rounded-2xl p-8 bg-white shadow-xl overflow-hidden'>
      <div ref={hoverAreaRef} className="hover-area z-20"></div>
      <SearchBox />
      <Tracker />
      <ul className='cities-container h-full absolute top-0 flex flex-col gap-8 pt-24 pb-6 overflow-y-scroll'>
        {addedCities.map((city, index) => (
          <li key={`${city.exactCity}-tile-${index}`}>
            <CityTile city={city} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CitiesContainer
