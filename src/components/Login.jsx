/* Javier Suárez Guzmán
    Agosto 2022 */

import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1>Identifícate</h1>
            <h2>como</h2>
            <br />
            <ul>
                <li>
                    <Link to="/admin">Administrador/a</Link>
                </li>
                <li>
                    <Link to="/reponedor">Reponedor/a</Link>
                </li>
                <li>
                    <Link to="/vendedor">Vendedor/a</Link>
                </li>
            </ul>
        </div>
    )
}

export default Login;