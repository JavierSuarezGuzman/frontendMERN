/* Javier Suárez Guzmán
    Agosto 2022 */

import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from "../assets/crown.svg";

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">
                    <Logo />
                    </Link>
                </li>

                {/* <li>
                    <Link to="/admin">Administrador/a</Link>
                </li>
                <li>
                    <Link to="/reponedor">Reponedor/a</Link>
                </li>
                <li>
                    <Link to="/vendedor">Vendedor/a</Link>
                </li> */}
            </ul>
        </div>
    )
}

export default Header;