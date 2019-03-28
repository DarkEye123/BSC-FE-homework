import styled, { css } from 'styled-components';

const centeredCss = css`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CenteredDiv = styled.div`
  ${centeredCss}
`;

const CenteredMain = styled.main`
  ${centeredCss}
`;

export { CenteredMain, CenteredDiv };
