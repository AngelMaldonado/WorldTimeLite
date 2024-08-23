import './App.css'
import CitiesContainer from './components/CitiesContainer'
import TrackerProvider from './providers/TrackerProvider'
import WorldTimeLiteProvider from './providers/WorldTimeLiteProvider'

function App() {
  return (
    <WorldTimeLiteProvider>
      <main className='w-screen h-screen flex flex-col items-center justify-center gap-12'>
        <header>
          <h1 className='text-6xl font-medium text-white'>Worldtime Lite</h1>
        </header>
        <TrackerProvider>
          <CitiesContainer />
        </TrackerProvider>
      </main>
    </WorldTimeLiteProvider>
  )
}

export default App
