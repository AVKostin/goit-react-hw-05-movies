import styled from "styled-components";

export const Main = styled.main`
  min-height: calc(100vh - ${(p) => p.theme.headerHeight});
  background-color: ${(p) => p.theme.mainBG};
`;