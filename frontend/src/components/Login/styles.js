import styled from 'styled-components';
import { Form as FormikForm } from 'formik';
import { InputField } from '../common/InputField/styles';

const Form = styled(FormikForm)`
  padding: 4rem;
  border: 1px solid ${({ theme }) => theme.color.lightShades}
  ${InputField}:first-child {
    margin-bottom: 2rem;
  }
  button {
    margin: 2rem 0 0 0;
    width: 100%;
  }
`;

export { Form };
