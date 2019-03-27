import styled from 'styled-components';
import Spinner from '../Spinner';

const Button = styled.button`
  padding: 0 0.75rem 0 0.75rem;
  height: 2rem;
  font-size: 1rem;
  outline: none;
  border-width: 0px;
  line-height: 2rem;
  align-self: center;
  font-family: 'Roboto';
  background-color: transparent;
  letter-spacing: 0.6px;
  border-color: white;
  color: #fff;
  white-space: nowrap;
  border: 1px solid ${({ theme }) => theme.color.main};
  letter-spacing: 0px;
  text-shadow: 0 0;
  transition: all 0.2s;
  transition-property: text-shadow, letter-spacing;
  :hover:enabled {
    cursor: pointer;
  }
  :disabled {
    opacity: 0.7;
    box-shadow: 0 0px #666;
  }
  :enabled:hover {
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.85);
    letter-spacing: 1px;
  }
  :active {
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.85);
    box-shadow: 0 0;
    transition: box-shadow 0.1s;
  }
  .loading {
    background-color: #e6e6e6;
  }
  span {
    display: inline-block;
    ${Spinner} {
      margin-left: 1rem;
    }
  }
`;

export default Button;
