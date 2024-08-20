import { City } from "../interfaces/city";

/**
 *
 * @param searchString string to search for in the world time api
 * @returns a promise of an array of cities that matches their names with the search string
 */
export function getTimeZone(searchString: string): Promise<City[]> {
  throw new Error("Not implemented");
}
