import React from 'react';
import { Route } from 'react-router-dom';
import { Login, Notes, Help } from './components';

const PAGES = {
  home: '/',
  notes: '/notes',
  help: '/help',
};
const Routes = () => (
  <>
    <Route path={PAGES.home} exact component={Login} />
    <Route path={PAGES.notes} component={Notes} />
    <Route path={PAGES.help} component={Help} />
  </>
);

export { PAGES };

export default Routes;
