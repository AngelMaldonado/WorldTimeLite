// TODO: use context to get the home city and compare with the param city to generate the UI

import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function CityTimeRange() {
  return (
    <>
      <ul className='flex'>
        <li className='p-2 text-center bg-blue-100'>
          <h4 className='font-semibold'>6</h4>
          <p className='text-xs'>am</p>
        </li>
        <li className='p-2 text-center bg-blue-100'>
          <h4 className='font-semibold'>7</h4>
          <p className='text-xs'>am</p>
        </li>
        <li className='p-2 text-center bg-slate-100'>
          <h4 className='font-semibold'>8</h4>
          <p className='text-xs'>am</p>
        </li>
        <li className='p-2 text-center bg-slate-100'>
          <h4 className='font-semibold'>9</h4>
          <p className='text-xs'>am</p>
        </li>
        <li className='p-2 text-center bg-slate-100'>
          <h4 className='font-semibold'>10</h4>
          <p className='text-xs'>am</p>
        </li>
        <li className='p-2 text-center bg-slate-100'>
          <h4 className='font-semibold'>12</h4>
          <p className='text-xs'>pm</p>
        </li>
        <li className='p-2 text-center bg-slate-100'>
          <h4 className='font-semibold'>1</h4>
          <p className='text-xs'>pm</p>
        </li>
        <li className='p-2 text-center bg-slate-100'>
          <h4 className='font-semibold'>2</h4>
          <p className='text-xs'>pm</p>
        </li>
        <li className='p-2 text-center bg-slate-100'>
          <h4 className='font-semibold'>3</h4>
          <p className='text-xs'>pm</p>
        </li>
        <li className='p-2 text-center bg-slate-100'>
          <h4 className='font-semibold'>4</h4>
          <p className='text-xs'>pm</p>
        </li>
        <li className='p-2 text-center bg-slate-100'>
          <h4 className='font-semibold'>5</h4>
          <p className='text-xs'>pm</p>
        </li>
        <li className='p-2 text-center bg-blue-100'>
          <h4 className='font-semibold'>6</h4>
          <p className='text-xs'>pm</p>
        </li>
        <li className='p-2 text-center bg-blue-100'>
          <h4 className='font-semibold'>7</h4>
          <p className='text-xs'>pm</p>
        </li>
        <li className='p-2 text-center bg-blue-100'>
          <h4 className='font-semibold'>8</h4>
          <p className='text-xs'>pm</p>
        </li>
        <li className='p-2 text-center bg-blue-950 text-white'>
          <h4 className='font-semibold'>9</h4>
          <p className='text-xs'>pm</p>
        </li>
        <li className='p-2 text-center bg-blue-950 text-white'>
          <h4 className='font-semibold'>10</h4>
          <p className='text-xs'>pm</p>
        </li>
        <li className='p-2 rounded-e-xl text-center bg-blue-950 text-white'>
          <h4 className='font-semibold'>11</h4>
          <p className='text-xs'>pm</p>
        </li>
        <li className='p-2 ms-2 rounded-s-xl text-center bg-blue-950 text-white'>
          <h4 className='text-xs leading-6'>MAY</h4>
          <p className='text-xs'>11</p>
        </li>
        <li className='p-2 text-center bg-blue-950 text-white'>
          <h4 className='font-semibold'>1</h4>
          <p className='text-xs'>am</p>
        </li>
        <li className='p-2 text-center bg-blue-950 text-white'>
          <h4 className='font-semibold'>2</h4>
          <p className='text-xs'>am</p>
        </li>
      </ul>
      <button>
        <ChevronRightIcon className='w-6 h-6 text-gray-700' />
      </button>
    </>
  )
}
