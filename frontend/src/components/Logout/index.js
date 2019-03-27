import React from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ACTIVE_USER_QUERY, LOGOUT_MUTATION } from '../../resolvers';
import { PAGES } from '../../routes';

const update = cache => {
  const data = { activeUser: null };
  cache.writeQuery({ data, query: ACTIVE_USER_QUERY });
};

const Logout = ({ children }) => (
  <Mutation mutation={LOGOUT_MUTATION} update={update}>
    {logout => (
      <Link onClick={logout} to={PAGES.home}>
        {children}
      </Link>
    )}
  </Mutation>
);

Logout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Logout;
