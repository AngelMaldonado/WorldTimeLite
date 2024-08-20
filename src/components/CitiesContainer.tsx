import CityTile from './CityTile'
import SearchBox from './SearchBox'

function CitiesContainer() {
  return (
    <div className='cities-container w-2/3 h-2/3 rounded-2xl p-8 bg-white shadow-xl overflow-y-scroll'>
      <SearchBox />
      <ul className='flex flex-col gap-8 mt-20'>
        <li><CityTile /></li>
        <li><CityTile /></li>
        <li><CityTile /></li>
        <li><CityTile /></li>
        <li><CityTile /></li>
        <li><CityTile /></li>
        <li><CityTile /></li>
      </ul>
    </div>
  )
}

export default CitiesContainer
