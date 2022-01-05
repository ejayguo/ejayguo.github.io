import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';

import '../../App.css';

import About from './About';
import EduWork from './EduWork';
import Project from './Project';

function Home() {
    return (
        <>
            {/* <HeroSection/> */}
            {/* <Cards/> */}
            {/* <Cards/> */}
            {/* <h1 id="tag-project">TAG PROJECT</h1> */}
            <About></About>
            <EduWork></EduWork>
            <Project></Project>
        </>
        // <div>
            // {/* <h1>HOME TEXT</h1> */}
            
            // {/* <h1>HOME TEXT</h1> */}
        // </div>
    )
}

export default Home;