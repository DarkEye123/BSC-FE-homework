import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Header, Logo } from './styles';

const NavBar = () => (
  <Router>
    <Header>
      <Logo>
        <Link to="/" />
      </Logo>
      <nav>
        <ul>
          <li>
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </nav>
    </Header>
  </Router>
);
export default NavBar;
