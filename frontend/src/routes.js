import React from 'react';
import { Route } from 'react-router-dom';
import { Login, Notes } from './components';

const PAGES = {
  home: '/',
  notes: '/notes/',
};
const Routes = () => (
  <>
    <Route path={PAGES.home} exact component={Login} />
    <Route path={PAGES.notes} component={Notes} />
  </>
);

export { PAGES };

export default Routes;
