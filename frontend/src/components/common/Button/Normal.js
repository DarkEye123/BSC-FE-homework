import styled from 'styled-components';
import Spinner from '../Spinner';

const Button = styled.button`
  /* max-width: 10rem; */
  padding: 0 12px 0 12px;
  height: 40px;
  font-size: 2rem;
  border-radius: 4px;
  outline: none;
  border-width: 0px;
  line-height: 2rem;
  align-self: center;
  font-family: 'Roboto';
  background-color: ${({ theme }) => theme.color.main};
  letter-spacing: 0.6px;
  border-color: white;
  color: #fff;
  white-space: nowrap;
  box-shadow: 0 2px 2px #666;
  letter-spacing: 0px;
  transition: all 0.3s;
  transition-property: box-shadow, letter-spacing;
  :hover:enabled {
    cursor: pointer;
  }
  :disabled {
    opacity: 0.7;
    box-shadow: 0 0px #666;
  }
  :enabled:hover {
    letter-spacing: 1px;
  }
  :active {
    box-shadow: 0 0px #666;
    transition: box-shadow 0.3s;
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
