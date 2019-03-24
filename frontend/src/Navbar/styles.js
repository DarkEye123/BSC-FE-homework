import styled from 'styled-components';
import img from '../images/logo.png';

const Header = styled.header`
  width: 100%;
  width: -moz-available; /* WebKit-based browsers will ignore this. */
  width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  width: fill-available;
  position: fixed;
  top: 0;
  transition: ${props => props.transition};
  -webkit-transition: ${props => props.transition};
  z-index: 1050;

  background-color: ${props => props.theme.color.darkShades};
  display: flex;
  box-shadow: 0 2px 7px 0 #111113;

  nav {
    margin: 0;
    padding: 0;
    display: inherit;
    font-size: 1.5rem;
    width: -moz-available;
    width: -webkit-fill-available;
    justify-content: flex-end;
    ul {
      list-style-type: none;
      margin-block-start: 0;
      margin-block-end: 0;
      display: inherit;
      li {
        display: inherit;
      }
      a {
        color: ${props => props.theme.color.lightShades};
        padding: 1rem 3rem;
        display: flex;
        align-items: center;
        position: relative;
        text-transform: uppercase;
        font-size: 1em;
        background: none;
        border: 0;
        cursor: pointer;
        text-decoration: none;
        width: max-content;
        @media (max-width: 700px) {
          font-size: 10px;
          padding: 0 10px;
        }
        &:after {
          height: 2px;
          background: red;
          content: '';
          width: 0;
          position: absolute;
          /* this grabs the second part of 1/2 and adds it to the beginning so it goes in both directions like: <--->*/
          transform: translateX(-50%);
          transition: width 0.4s;
          transition-timing-function: cubic-bezier(0.1, -1, 0.5, 2);
          /* this starts at the center by default*/
          left: 50%;
          top: 80%;
        }
        &:hover,
        &:focus {
          outline: none;
          &:after {
            width: calc(100% - 60px);
          }
        }
      }
    }
  }
`;

const Logo = styled.div`
  display: flex;
  a {
    display: block;
    width: 10rem;
    cursor: pointer;
    pointer-events: all;
    background-position: center;
    background-size: cover;
    background-color: ${props => props.theme.color.darkShades};
    background-image: url(${img});
    background-repeat: no-repeat;
  }
`;
export { Logo, Header };
