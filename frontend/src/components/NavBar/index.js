import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import { Header, Logo } from './styles';
import { ACTIVE_USER_QUERY, LOGOUT_MUTATION } from '../../resolvers';
import { Logout } from '..';

const NavBar = () => (
  <Query query={ACTIVE_USER_QUERY}>
    {({ data }) => (
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
              {!!data.activeUser && (
                <>
                  <li>
                    <Link to="/notes">Notes</Link>
                  </li>
                  <li>
                    <Logout>Logout</Logout>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </Header>
      </Router>
    )}
  </Query>
);
export default NavBar;
