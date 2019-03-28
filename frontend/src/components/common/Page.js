import { createGlobalStyle } from 'styled-components';

const Page = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  @import url('https://fonts.googleapis.com/css?family=Reenie+Beanie:regular');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell',
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.color.darkShades};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

export default Page;
