import React from 'react';
import { InputField as StyledInputField, Input } from './styles';

const InputField = ({ name, label }) => (
  <StyledInputField>
    <label htmlFor={label}>{label}</label>
    <Input id={name} name={name} />
    <span />
  </StyledInputField>
);

export default InputField;
