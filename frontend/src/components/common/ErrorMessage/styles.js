import styled from 'styled-components';

const ErrorMessage = styled.div`
  padding: 2rem;
  background: ${props => props.theme.color.main};
  text-align: center;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid red;
  border-right: 5px solid red;
  width: 80%;
  position: absolute;
  top: 20%;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`;

export default ErrorMessage;
