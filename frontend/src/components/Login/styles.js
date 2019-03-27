import styled from 'styled-components';
import { Form as FormikForm } from 'formik';
import { InputField } from '../common/InputField/styles';

const Form = styled(FormikForm)`
  ${InputField}:first-child {
    margin-bottom: 2rem;
  }
`;

export { Form };
