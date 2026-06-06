import { useState } from 'react'

import './App.css'
import SearchBox from '../components/SearchBox'
import WeatherCard from '../components/WeatherCard'

function App() {
  const [city, setCity] = useState("")

  return (
    <>
    <h1>Weather Dashboard</h1>
      <SearchBox setCity={setCity} />
      <WeatherCard city={city} />
    </>
  )
}

export default App
