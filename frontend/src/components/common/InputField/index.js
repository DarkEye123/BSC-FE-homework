import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { InputField as StyledInputField, Input } from './styles';

const InputField = ({ name, label, ...props }) => {
  const { t } = useTranslation();
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
        {t(label)}
      </label>
    </StyledInputField>
  );
};

export default InputField;
