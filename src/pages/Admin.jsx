/* Javier Suárez Guzmán
    Agosto 2022 */

import React from 'react';

import Header from '../components/Header';
import ListaDeTareas from '../components/tareas-component/ListaDeTareas';

const Admin = () => {
    return (
        <div>
            <Header />
            Portal del Admin
            <div >
                <h1>Tareas</h1>
                <ListaDeTareas />
            </div>
        </div>
    )
}

export default Admin;