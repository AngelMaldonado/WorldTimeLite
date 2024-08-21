import ct from 'city-timezones'
import { City } from '../types/city'

/**
 *
 * @param searchString string to search for a city
 * @returns a promise of an array of cities that matches their names with the search string
 */
export function getCities(searchString: string) {
  return new Promise<City[]>(resolve => {
    resolve(ct.findFromCityStateProvince(searchString) as City[])
  })
}
