// #0F1724
// #07263B
// #fff95b
// #ff930f
// #84DCCF
// #B2B1B1
// #faf9f6

import { useState } from 'react';
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

function App() {
  const [mostrarClima, setMostrarClima] = useState(null);
  const [mostrarClimaDia, setMostrarClimaDia] = useState(null);
  const [mostrarClimaSemana, setMostrarClimaSemana] = useState(null);

  return (
    <>
      <Navbar onClimaCarregado={setMostrarClima} onClimaDiaCarregado={setMostrarClimaDia} onClimaSemanaCarregado={setMostrarClimaSemana} />

      <Home mostrarClima={mostrarClima} mostrarClimaDia={mostrarClimaDia} mostrarClimaSemana={mostrarClimaSemana} />
      
      <Footer />
    </>
  )
}

export default App

/*
<a href="https://www.freepik.com/free-vector/isometric-storm-weather-concept-wind-takes-umbrella-away-from-girl-park-vector-illustration_37916178.htm#position=27">Image by macrovector on Freepik</a>

<a href="https://www.freepik.com/free-vector/flat-design-mountain-landscape_20008671.htm#position=7">Image by freepik</a>

<a href="https://www.freepik.com/free-vector/gradient-landscape-design-background_18952970.htm#position=7">Image by freepik</a>

<a href="https://www.freepik.com/free-vector/hand-drawn-autumn-background_16921839.htm#position=11">Image by freepik</a>

<a href="https://www.freepik.com/free-vector/flat-background-winter-season_83183175.htm#position=2">Image by freepik</a>

<a href="https://www.freepik.com/free-vector/flat-design-winter-landscape_10848960.htm#position=49">Image by freepik</a>

<a href="https://www.freepik.com/free-vector/hand-drawn-flat-mountain-landscape_20283745.htm#position=9">Image by freepik</a>

<a href="https://www.freepik.com/free-vector/hand-drawn-nature-scene-illustration_37577767.htm#position=9">Image by freepik</a>
*/
