import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;

  height: ${(p) => p.theme.headerHeight};
  background-color: ${(p) => p.theme.navigateBG};
  border-bottom: 2px solid ${(p) => p.theme.mainColor};
`;