import ct from 'city-timezones'
import { City } from '../types/city'

/**
 *
 * @param searchString string to search for in the world time api
 * @returns a promise of an array of cities that matches their names with the search string
 */
export function getTimeZone(searchString: string) {
  const cities = ct.findFromCityStateProvince(searchString)
  return cities as City[]
}
