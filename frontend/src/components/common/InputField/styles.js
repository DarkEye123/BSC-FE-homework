// Idea for styling taken from https://codepen.io/maheshambure21/pen/EozKKy

import { Field } from 'formik';
import styled from 'styled-components';

// const InputField = styled.div`
//   position: relative;
// `;

// const Input = styled(Field)`
//   position: relative;
//   &:after {
//     height: 2px;
//     background: red;
//     content: '';
//     width: 0;
//     position: absolute;
//     /* this grabs the second part of 1/2 and adds it to the beginning so it goes in both directions like: <--->*/
//     transform: translateX(-50%);
//     transition: width 0.4s;
//     transition-timing-function: cubic-bezier(0.1, -1, 0.5, 2);
//     /* this starts at the center by default*/
//     left: 50%;
//     top: 80%;
//   }
//   &:hover,
//   &:focus {
//     &:after {
//       width: calc(100% - 60px);
//     }
//   }
// `;
const InputField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  span {
    position: absolute;
    bottom: 0;
    transform: translateX(-50%);
    transition: width 0.4s;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.color.main};
    transition: 0.4s;
  }
`;

const Input = styled(Field)`
  border-style: none none solid none;
  outline: none;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
  background-color: transparent;
  letter-spacing: 1px;
  width: 100%;
  font-size: 1rem;
  line-height: 2rem;
  &:focus ~ span,
  &:hover ~ span {
    width: 100%;
  }
`;

export { Input, InputField };

/**
 * .effect-17 ~ .focus-border{position: absolute; bottom: 0; left: 50%; width: 0; height: 2px; background-color: #4caf50; transition: 0.4s;}
.effect-17:focus ~ .focus-border,
.has-content.effect-17 ~ .focus-border{width: 100%; transition: 0.4s; left: 0;}
.effect-17 ~ label{position: absolute; left: 0; width: 100%; top: 9px; color: #aaa; transition: 0.3s; z-index: -1; letter-spacing: 0.5px;}
.effect-17:focus ~ label, .has-content.effect-17 ~ label{top: -16px; font-size: 12px; color: #4caf50; transition: 0.3s;}
 */
