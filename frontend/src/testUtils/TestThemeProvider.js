import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

const TestThemeProvider = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
TestThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TestThemeProvider;
