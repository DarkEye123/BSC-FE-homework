import styled, { css } from 'styled-components';

const zindex = css`
  :hover {
    z-index: 5;
    transition: all 0.15s linear;
  }
`;

const noteEvent = css`
  :hover {
    box-shadow: 10px 10px 7px black;
    transform: scale(1.25);
    cursor: grab;
    z-index: 5;
  }
  :active {
    cursor: move;
  }
`;

const Note = styled.div`
  white-space: pre-wrap;
  outline: none;
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

const Background = styled.div`
  width: 90%;
  height: 70%;
  border: 2px dotted ${({ theme }) => theme.color.lightShades};
  border-radius: 4px;
`;

const Grid = styled.div`
  position: relative;
  display: grid;
  grid-row-gap: 3rem;
  span {
    width: 15rem;
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

const TrashSVG = styled.svg`
  &:hover {
    fill: #d7d8d9;
    cursor: p;
  }
  fill: #afafaf;
`;

const TrashWrapper = styled.div`
  padding: 1rem;
  background-color: transparent;
  z-index: 20;
  position: relative;
  width: max-content;
`;

const AddNote = styled.div`
  width: 5rem;
  height: 5rem;
  color: greenyellow;
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 5rem;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.85);
  }
  text-shadow: 0 0;
  transition: all 0.3s;
  transition-property: transform, text-shadow;
`;

const Panel = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
`;

export {
  Grid, Note, Background, TrashSVG, TrashWrapper, AddNote, Panel,
};
