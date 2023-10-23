import React from 'react';
import logo from '../../images/logo.webp';
import {Link} from "react-router-dom";


function Logo() {
    return (
        <div className='logo'>
            <Link to='/'>
                <img src={logo} alt='oxxymiron'/>
            </Link>
        </div>
    );
}

export default Logo;