/* Javier Suárez Guzmán
    Agosto 2022 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Admin from './pages/Admin';
import Reponedor from './pages/Reponedor';
import Vendedor from './pages/Vendedor';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/admin" element={<Admin />} />
                    <Route exact path="/reponedor" element={<Reponedor />} />
                    <Route exact path="/vendedor" element={<Vendedor />} />
                    {/* <Navigate to="/" /> //aquí se debe entrar la ruta por defecto en caso de escribir una url inválida */}
                </Routes>
            </BrowserRouter>
        </>

    )
}

export default App;