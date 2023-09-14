import React from 'react';
import { Link } from 'react-router-dom';
import personEar from '../../images/person-having-hearing-issues.jpg';
import './home.css';
function Home(){
        return (
            <div className='box home-box'>
                <div className='home-container'>
                    <img src={personEar} alt='pic'></img>
                    <div className='main-description'>
                        <h1>Eary</h1>
                        <p>
                        Eary is a website that aims to help people identify and address hearing problems by offering an easy-to-use hearing test. The website is designed to be accessible and user-friendly, making it easy for anyone to take the test and get the help they need.
                        The hearing test on Eary is designed to be quick and simple, consisting of a series of audio tests that are designed to measure a person's hearing ability across a range of frequencies. The test is completely free and can be taken from the comfort of your own home.
                        Once you have completed the hearing test, Eary provides you with a detailed report of your results, along with recommendations for next steps. If the test indicates that you have a hearing problem, Eary may recommend that you see a hearing specialist or audiologist for further evaluation and treatment.
                        </p>
                        <div className='getStarted'>
                            <button className='btn'>
                                <Link exact to='/signup'>Get started!</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default Home;
