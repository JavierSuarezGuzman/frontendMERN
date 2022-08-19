/* Javier Suárez Guzmán
    Agosto 2022 */

import React from 'react';

import Header from '../components/Header';
import Fact from '../components/fact-components/Fact';
import Footer from '../components/Footer';

const Reponedor = () => {
    return (
        <div>
            <Header />
            Portal del Reponedor
            <Fact />
            
            <Footer />
        </div>
    )
}

export default Reponedor;