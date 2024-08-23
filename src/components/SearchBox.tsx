import { ArrowPathIcon } from "@heroicons/react/20/solid"
import { useAddCity } from "../hooks/useAddCity"
import { useSearchCities } from "../hooks/useSearchCities"
import { useAddedCities } from "../hooks/useAddedCities"
import { useState } from "react"
import { City } from "../types/city"

function SearchBox() {
  const { searchCities, searching, searchResults } = useSearchCities()
  const addedCities = useAddedCities()
  const addCity = useAddCity()
  const [open, setOpen] = useState(false)

  return (
    <div className='absolute z-20'>
      <input onBlur={() => setOpen(false)} onChange={e => {
        handleSearch(e.target.value)
        if (e.target.value != "")
          setOpen(true)
        else
          setOpen(false)
      }}
        className='w-96 px-4 py-2 bg-slate-100 rounded-full'
        type='text'
        placeholder='Find place or timezone - Press ↲ (Enter)'
      />
      {open ?
        <ul className='search-results-container max-h-80 p-4 rounded-xl overflow-y-scroll bg-white shadow-md'>
          {!searching ? searchResults.filter(ca => !addedCities.some(cb => cb.city == ca.city)).map((city, index) => (
            <li key={`city-${index}-${city.city_ascii}`}>
              <button onClick={() => handleAdd(city)} className='w-full p-2 my-1 rounded-xl text-start hover:bg-slate-300'>
                {city.city}, {city.country}
              </button>
            </li>
          )) : <ArrowPathIcon className='animate-spin h-5 w-5 mx-auto text-slate-600'></ArrowPathIcon>}
        </ul> : null}
    </div>
  )

  function handleAdd(city: City) {
    addCity(city)
    setOpen(false)
  }

  function handleSearch(value: string) {
    searchCities(value)
  }
}

export default SearchBox
