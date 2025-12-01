// #0F1724
// #07263B
// #fff95b
// #ff930f
// #84DCCF
// #B2B1B1
// #faf9f6

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Futuro from "./pages/futuro/Futuro"
import Creditos from "./pages/creditos/Creditos";

function App() {
  const [mostrarClima, setMostrarClima] = useState(null);
  const [mostrarClimaDia, setMostrarClimaDia] = useState(null);
  const [mostrarClimaSemana, setMostrarClimaSemana] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Navbar onClimaCarregado={setMostrarClima} onClimaDiaCarregado={setMostrarClimaDia} onClimaSemanaCarregado={setMostrarClimaSemana} />
      
        <Routes>
          <Route
            path="/futuro"
            element={<Futuro />} />
          <Route
            path="/"
            element={
              <Home
                mostrarClima={mostrarClima}
                mostrarClimaDia={mostrarClimaDia}
                mostrarClimaSemana={mostrarClimaSemana}
              />
            }
          />
          <Route path="/creditos" element={<Creditos />} />
          </Routes>

        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
