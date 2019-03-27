import styled from 'styled-components';

const Spinner = styled.div`
  display: inline-block;
  z-index: 1100;
  top: 15px;
  right: 15px;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  border: solid 2px transparent;
  border-top-color: yellow;
  border-left-color: yellow;
  border-radius: 50%;
  -webkit-animation: spinner 400ms linear infinite;
  animation: spinner 400ms linear infinite;

  @-webkit-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
