import { getTimeZone } from "../services/timeZoneService"
import { useState } from "react"
import { City } from "../types/city"
import { useAddCity } from "../hooks/useAddCity"

function SearchBox() {
  const [searchResults, setSearchResults] = useState<City[]>([])
  const addCity = useAddCity()

  return (
    <div className='absolute z-10'>
      <input onChange={e => handleSearch(e.target.value)}
        className='w-96 px-4 py-2 bg-slate-100 rounded-full'
        type='text'
        placeholder='Find place or timezone - Press ↲ (Enter)'
      />
      {searchResults.length > 0 && (
        <ul className='search-results-container max-h-80 p-4 rounded-xl overflow-y-scroll bg-white shadow-md'>
          {searchResults.map((city, index) => (
            <li key={`city-${index}-${city.city_ascii}`}>
              <button onClick={() => addCity(city)} className='w-full p-2 my-1 rounded-xl text-start hover:bg-slate-300'>
                {city.city}, {city.country}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )

  function handleSearch(value: string) {
    setSearchResults(getTimeZone(value))
  }
}

export default SearchBox
