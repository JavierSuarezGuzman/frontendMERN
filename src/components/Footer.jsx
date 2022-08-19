/* Javier Suárez Guzmán
    Agosto 2022 */

import React from 'react';
import "../styles.css";


const Footer = () => (
    <footer className="App-footer">
      <div className="footer__made">
        Realizado con
        {" "}
        <span role="img" aria-label="heart">💚</span>
        {" "}
        por <a
          href="https://www.linkedin.com/in/javier-suarez-guzman/"
          rel="noopener noreferrer"
          target="_blank"
          className='logo'
        >
          <span className='logo-img'>
            {" "}
            <span>Javier "KuaKer" Suárez Guzmán</span> 
          </span>
        </a>
         -- Copy&copy;Left - {new Date().getFullYear()}
      </div>
    </footer>
  );
  
  export default Footer;