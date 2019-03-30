import React from 'react';

import styled from 'styled-components';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import { Note } from '../Notes/styles';

function ReactModalAdapter({ className = 'ReactModal', ...props }) {
  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;
  return (
    <ReactModal
      portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
      {...props}
    />
  );
}

ReactModalAdapter.propTypes = {
  className: PropTypes.string,
};

const StyledModal = styled(ReactModalAdapter)`
  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: hsla(0, 0%, 0%, 0.33);
    opacity: 0;
    transition: opacity ${props => `${props.closeTimeoutMS}ms`} ease-in-out;
    display: flex;
    align-items: center; // in context of the y
    justify-content: center; // in context of the x

    &.ReactModal__Overlay--after-open {
      opacity: 1;
    }

    &.ReactModal__Overlay--before-close {
      opacity: 0;
    }
  }
  &__content {
    outline: none;
    display: flex;
    flex-direction: column;
    button {
      width: 50%;
      margin-top: 3rem;
    }
  }
`;

const StyledNote = styled(Note)`
  transform: rotate(8deg);
  :hover,
  :focus {
    outline: none;
    cursor: text;
    box-shadow: 10px 10px 7px black;
    transform: scale(1.25);
  }
`;

export { StyledModal, StyledNote };
