import styled, { css } from 'styled-components';

const zindex = css`
  :focus,
  :hover {
    z-index: 5;
    transition: all 0.15s linear;
  }
`;

const noteEvent = css`
  :focus,
  :hover {
    box-shadow: 10px 10px 7px black;
    transform: scale(1.25);
    cursor: move;
    z-index: 5;
  }
`;

const Note = styled.div`
  background-color: ${({ theme }) => theme.color.main};
  font-family: 'Reenie Beanie', 'Roboto', sans-serif;
  font-size: 1.8rem;
  box-shadow: 5px 5px 7px black;
  padding: 2rem;
  width: 15rem;
  transform: rotate(-6deg);
  position: relative;
  transition: all 0.15s linear;
  z-index: 0;
  transition-property: transform, box-shadow, z-index;
  ${noteEvent}
`;

const Grid = styled.div`
  position: relative;
  display: flex;
  span {
    z-index: 0;
    transition: all 0.15s linear;
    ${zindex};
  }
  span:nth-child(even) {
    ${Note} {
      transform: rotate(4deg);
      ${noteEvent};
      top: 5px;
      background-color: #ccf;
    }
  }
  span:nth-child(3n) {
    ${Note} {
      transform: rotate(-3deg);
      ${noteEvent};
      top: -5px;
      background-color: #cfc;
    }
  }
  span:nth-child(5n) {
    ${Note} {
      transform: rotate(5deg);
      ${noteEvent};
      top: -10px;
    }
  }
`;

export { Grid, Note };
