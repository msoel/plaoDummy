import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        
        <div className="header">
            <img src="https://paloimages.prothom-alo.com/contents/themes/public/style/images/Prothom-Alo.png" alt="prothom alo logo"/>
            <nav className="my-2 my-md-0 mr-md-3">                
                <NavLink
                    to="/"
                    className="p-2 text-dark"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/sports"
                    className="p-2 text-dark"
                >
                    Sports
                </NavLink>
            </nav>
        </div>

        
    );
};
 
export default Navbar;