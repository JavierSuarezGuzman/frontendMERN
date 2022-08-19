/* Javier Suárez Guzmán
    Agosto 2022 */

import React from 'react';

import Header from '../components/Header';
import ListaDeTareas from '../components/tareas-component/ListaDeTareas';
import Inventario from '../components/inventario-component/Inventario';
import Footer from '../components/Footer';

const Admin = () => {
    return (
        <div>
            <Header />
            <div>
                Portal del Admin
                <div className='row'>
                    <div className='column'> Tareas <ListaDeTareas /></div>
                    <div className='column'> <Inventario /></div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Admin;