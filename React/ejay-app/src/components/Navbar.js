import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Button from 'react-bootstrap/Button';

// import { ResumeButton } from './ResumeButton';
import './Navbar.css';
import { Link } from 'react-router-dom';

import PDF_RESUME from './Resume_EJay_Guo.pdf';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    
      <nav className='navbar'>
        <div>
          <a href={PDF_RESUME} target='_blank' className='navbar-logo' onClick={closeMobileMenu}>
            Yijie (EJay) Guo
            <Button id='btn-resume' buttonStyle='btn--outline'>
              <a href={PDF_RESUME} target='_blank'></a>Resume
            </Button>
          </a>
        </div>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <HashLink smooth to='#about' className='nav-links' onClick={closeMobileMenu}>
                About Me
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink
                smooth
                to='#eduwork'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Educations & Works
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink
                smooth
                to='#project'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </HashLink>
            </li>
          </ul>
          
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;