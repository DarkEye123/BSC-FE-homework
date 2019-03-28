import styled from 'styled-components';

const Grid = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  @import url('https://fonts.googleapis.com/css?family=Reenie+Beanie:regular');
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  grid-gap: 3rem;
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export default Grid;
