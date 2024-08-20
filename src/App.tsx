import './App.css'
import CitiesContainer from './components/CitiesContainer'

function App() {

  return (
    <main className='w-screen h-screen flex flex-col items-center justify-center gap-36'>
      <header>
        <h1 className='text-6xl font-medium text-white'>Worldtime Lite</h1>
      </header>
      <CitiesContainer />
    </main>
  )
}

export default App
