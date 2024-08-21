import { ArrowPathIcon } from "@heroicons/react/20/solid"
import { useAddCity } from "../hooks/useAddCity"
import { useSearchCities } from "../hooks/useSearchCities"

function SearchBox() {
  const { searchCities, searching, searchResults } = useSearchCities()
  const addCity = useAddCity()

  return (
    <div className='absolute z-10'>
      <input onChange={e => handleSearch(e.target.value)}
        className='w-96 px-4 py-2 bg-slate-100 rounded-full'
        type='text'
        placeholder='Find place or timezone - Press ↲ (Enter)'
      />
      {searching || !searching && searchResults.length > 0 ? <ul className='search-results-container max-h-80 p-4 rounded-xl overflow-y-scroll bg-white shadow-md'>
        {!searching ? searchResults.map((city, index) => (
          <li key={`city-${index}-${city.city_ascii}`}>
            <button onClick={() => addCity(city)} className='w-full p-2 my-1 rounded-xl text-start hover:bg-slate-300'>
              {city.city}, {city.country}
            </button>
          </li>
        )) : <ArrowPathIcon className='animate-spin h-5 w-5 mx-auto text-slate-600'></ArrowPathIcon>}
      </ul> : null}
    </div>
  )

  function handleSearch(value: string) {
    searchCities(value)
  }
}

export default SearchBox
