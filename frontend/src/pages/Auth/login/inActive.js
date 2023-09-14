import React from 'react';
import inActiveImg from '../../../images/inActive-error.png'
import './inActive.css'

const InActive = () => {
    return ( 
        <div className='inActive-container'>
            <img src={inActiveImg} alt='error-inactive-pic'/>
            <h1>Sorry But You Are Not Activated To Enter The System!</h1>
        </div>
    );
}

export default InActive;