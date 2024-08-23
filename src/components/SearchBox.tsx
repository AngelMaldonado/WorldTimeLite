import { ArrowPathIcon, XCircleIcon } from "@heroicons/react/20/solid"
import { useAddCity } from "../hooks/useAddCity"
import { useSearchCities } from "../hooks/useSearchCities"
import { useAddedCities } from "../hooks/useAddedCities"
import { useRef, useState } from "react"
import { City } from "../types/city"

function SearchBox() {
  const { searchCities, searching, searchResults } = useSearchCities()
  const addedCities = useAddedCities()
  const addCity = useAddCity()
  const [open, setOpen] = useState(false)
  const [searchStr, setSearchStr] = useState('')
  const searchBoxRef = useRef<HTMLDivElement | null>(null)

  /*
  window.addEventListener('click', (e) => {
    const mousex = e.clientX
    const mousey = e.clientX
    if (searchBoxRef.current) {
      const { x, y, width, height } = searchBoxRef.current!.getBoundingClientRect()

      if (mousex > x + width) {
        setOpen(false)
      } else if (mousex < x) {
        setOpen(false)
      } else if (mousey > y) {
        setOpen(false)
      } else if (mousey < y + height) {
        setOpen(false)
      }
    }
  })
  */

  return (
    <div ref={searchBoxRef} className='absolute z-20'>
      <input value={searchStr}
        onChange={e => {
          setSearchStr(e.target.value)
          handleSearch(e.target.value)

          if (e.target.value != "")
            setOpen(true)
        }}
        className='w-96 px-4 py-2 bg-slate-100 rounded-full'
        type='text'
        placeholder='Find place or timezone - Press ↲ (Enter)'
      />
      {open ?
        <>
          <button className='absolute' onClick={() => setOpen(false)}>
            <XCircleIcon className='h-8 w-8 text-red-400'></XCircleIcon>
          </button>
          <ul className='search-results-container max-h-80 p-4 rounded-xl overflow-y-scroll bg-white shadow-md'>
            {!searching ? searchResults.filter(ca => !addedCities.some(cb => cb.city == ca.city)).map((city, index) => (
              <li key={`city-${index}-${city.city_ascii}`}>
                <button onClick={() => handleAdd(city)} className='w-full p-2 my-1 rounded-xl text-start hover:bg-slate-300'>
                  {city.city}, {city.country}
                </button>
              </li>
            )) : <ArrowPathIcon className='animate-spin h-5 w-5 mx-auto text-slate-600'></ArrowPathIcon>}
          </ul>
        </>
        : null}
    </div>
  )

  function handleAdd(city: City) {
    addCity(city)
    setOpen(false)
    setSearchStr('')
  }

  function handleSearch(value: string) {
    searchCities(value)
  }
}

export default SearchBox
