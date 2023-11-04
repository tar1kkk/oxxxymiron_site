import React from 'react';
import loader from '../../images/loader.webp';
function Loader(props) {
    return (
        <div className='loader'>
            <img src={loader}/>
        </div>
    );
}

export default Loader;