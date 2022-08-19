/* Javier Suárez Guzmán
    Agosto 2022 */

import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

const Login = () => {
    return (
        <div>
            <Header />
            <nav className='login'>
                <h1>Identifícate como:</h1>
                <li>
                    <Link to="/admin">Administrador/a</Link>
                </li>
                <li>
                    <Link to="/reponedor">Reponedor/a</Link>
                </li>
                <li>
                    <Link to="/vendedor">Vendedor/a</Link>
                </li>
            </nav>
        </div>
    )
}

export default Login;