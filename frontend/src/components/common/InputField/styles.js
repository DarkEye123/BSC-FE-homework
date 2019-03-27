// Idea for styling taken from https://codepen.io/maheshambure21/pen/EozKKy

import React from 'react';
import { Field } from 'formik';
import styled, { css } from 'styled-components';

const InputField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  span {
    position: absolute;
    bottom: 0;
    transform: translateX(-50%);
    transition: width 0.4s;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.color.main};
    transition: 0.4s;
  }
  label {
    position: absolute;
    font-size: 1rem;
    line-height: 2rem;
    letter-spacing: 1px;
    color: #ccc;
    transition: 0.3s;
    top: 0;
  }
`;

const labelAnimation = css`
  top: -1rem;
  color: #aaa;
  transition: 0.3s;
  letter-spacing: 0px;
  font-size: 0.8rem;
`;

const Input = styled(({ withValue, ...props }) => <Field {...props} />)`
  border-style: none none solid none;
  outline: none;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
  background-color: transparent;
  letter-spacing: 1px;
  width: 100%;
  font-size: 1rem;
  line-height: 2rem;
  &:focus:enabled + span,
  &:hover:enabled + span {
    width: 100%;
  }
  &:focus:enabled ~ label,
  &:hover:enabled ~ label {
    ${labelAnimation}
  }
  ${props =>
    props.withValue &&
    css`
      ~ label {
        ${labelAnimation}
      }
    `}
`;

export { Input, InputField };
