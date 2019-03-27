import React from 'react';
import Button from './Normal';
import Spinner from '../Spinner';

const SpinningButton = props => (
  <Button {...props}>
    {(props.spin && (
      <span>
        {props.children}
        <Spinner data-testid="spinner" />
      </span>
    )) ||
      props.children}
  </Button>
);

export default SpinningButton;
