import React, { useState } from 'react';
import { InputField as StyledInputField, Input } from './styles';

const InputField = ({ name, label, ...props }) => {
  const [withValue, setWithValue] = useState(false);
  function handleInnerRef(e) {
    if (e) {
      setWithValue(e.value !== '');
    }
  }
  return (
    <StyledInputField>
      <Input withValue={withValue} innerRef={handleInnerRef} id={name} name={name} {...props} />
      <span />
      <label htmlFor={label} {...props}>
        {label}
      </label>
    </StyledInputField>
  );
};

export default InputField;
