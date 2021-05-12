import React from 'react';
import './Footer.scss';

import { FaPinterest, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons'



export const Footer = () => (
  <div id="footer-bar" className="text-center">
    <IconContext.Provider value={{color: "white", size:"2em", margin:"0.5em"}}>
        <FaInstagramSquare title= "Instagram logo" className="icon"/>
        <FaPinterest title= "Pinterest logo" className="icon"/>
        <FaLinkedin title= "Linkedin logo" className="icon"/>
    </IconContext.Provider>
  </div>
)