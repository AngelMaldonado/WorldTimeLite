import { useState } from "react";
import { getCities } from "../services/citiesService";
import { City } from "../types/city";

export function useSearchCities() {
  const [searching, setSearching] = useState(false)
  const [searchResults, setSearchResults] = useState<City[]>([])
  const searchCities = async (searchString: string) => {
    setSearching(true)
    setSearchResults(await getCities(searchString))
    setTimeout(() => setSearching(false), 500)
  }

  return { searching, searchCities, searchResults }
}

