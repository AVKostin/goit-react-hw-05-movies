import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  padding: 8px;
  border: 1px solid ${(p) => p.theme.altColor};
  border-radius: 4px;
  color: ${(p) => p.theme.altBG};
  font-family: ${(p) => p.theme.mainFF}, sans-serif;
  transition: border-color ${(p) => p.theme.transition},
  color ${(p) => p.theme.transition};

    &.active,
    &:hover {
      cursor: pointer;
      color: ${(p) => p.theme.accentTextColor};
      border-color: ${(p) => p.theme.accentTextColor};
  }
`;
