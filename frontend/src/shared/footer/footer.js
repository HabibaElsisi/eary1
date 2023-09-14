import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';


function Footer() {
    return ( 
        <footer className='footer-container'>
            <p>© 2023 Eary Quizzes.</p>
            <div className="icons">
                <Link to='https://www.facebook.com/'>
                    <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link to='https://www.instagram.com'>
                    <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link to="https://www.linkedin.com">
                    <i className="fa-brands fa-linkedin"></i>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;