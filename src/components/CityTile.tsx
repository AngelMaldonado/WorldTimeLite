import { HomeIcon, TrashIcon } from '@heroicons/react/20/solid';

function CityTile() {
  return (
    <div className='flex gap-4 items-center'>
      <div className='flex items-center gap-4'>
        <TrashIcon className='w-6 h-6 text-gray-700' />
        <div className='w-12 h-12 rounded-full relative bg-slate-100'>
          <HomeIcon className='w-5 h-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-700' />
        </div>
        <div>
          <h4 className='font-semibold'>London</h4>
          <p>England</p>
        </div>
      </div>
      <div className='flex w-full justify-end gap-4'>
        <div>
          <h4 className='font-semibold'>7:30am BST</h4>
          <p>Fri, May 1</p>
        </div>
        <div className='w-4/5 h-12 bg-teal-200'>
        </div>
      </div>
    </div>
  )
}

export default CityTile
