import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { Header, Logo } from './styles';
import { ACTIVE_USER_QUERY } from '../../resolvers';
import { Logout } from '..';
import { PAGES } from '../../routes';

const NavBar = () => (
  <Query query={ACTIVE_USER_QUERY}>
    {({ data }) => (
      <Header>
        <Logo>
          <Link to={PAGES.home} />
        </Logo>
        <nav>
          <ul>
            <li>
              <Link to={PAGES.help}>Help</Link>
            </li>
            {!!data.activeUser && (
              <>
                <li>
                  <Link to={PAGES.notes}>Notes</Link>
                </li>
                <li>
                  <Logout>Logout</Logout>
                </li>
              </>
            )}
          </ul>
        </nav>
      </Header>
    )}
  </Query>
);
export default NavBar;
