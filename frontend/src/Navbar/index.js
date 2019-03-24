import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Header, Logo } from './styles';

const NavBar = () => {
  const TRANSITION = 'top 0.5s';
  const BUFFER_SIZE = 22; // seems to be 2 scrolls = 22 calls

  const myRef = useRef();
  let lastScrollY = 0;
  let isRendered = true;
  let cntUp = 0;

  const clearHeader = () => {
    cntUp = 0;
    myRef.current.style.top = `-${myRef.current.offsetHeight}px`;
    isRendered = false;
  };

  const renderHeader = () => {
    if (!isRendered) {
      isRendered = true;
      myRef.current.style.top = '0px';
    }
  };

  const handleScroll = () => {
    const diff = lastScrollY - window.scrollY;
    const goingUp = diff > 0;
    const goingDown = diff < 0;
    const isOnLimit = window.scrollY <= myRef.current.offsetHeight;
    if (goingUp) {
      cntUp++;
    } else if (goingDown) {
      clearHeader();
    }
    if (cntUp >= BUFFER_SIZE || isOnLimit) {
      renderHeader();
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <Header ref={myRef} transition={TRANSITION}>
        <Logo>
          <Link to="/">t</Link>
        </Logo>
        <nav>
          <ul>
            <li>
              <Link to="/help">Help</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/login">Sign In</Link>
            </li>
          </ul>
        </nav>
      </Header>
    </Router>
  );
};

export default NavBar;
