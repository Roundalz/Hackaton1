// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Contratos from './pages/contratos/contratos';
import Home from './pages/home';
import Nosotros from './pages/nosotros';
import Pagos from './pages/pago/pago';
import Personal from './pages/personal/personal';
import Vacaciones from './pages/vacaciones/vacaciones';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contratos" element={<Contratos />} />
        <Route path="/pagos" element={<Pagos />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/vacaciones" element={<Vacaciones />} />
      </Routes>
    </>
  );
};

export default App;
