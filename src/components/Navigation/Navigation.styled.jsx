import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../utils/breakPoints";

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  @media ${breakpoints.mobile} {
    width: 300px;
  }

  @media ${breakpoints.tablet} {
    width: 100%;
  }
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  display: none;
  margin-left: 8px;
  color: ${(p) => p.theme.accentColor};
  font-size: 24px;
  font-weight: 700;
  font-family: "Comfortaa", sans-serif;
  @media ${breakpoints.tablet} {
    display: flex;
  }
`;

export const Menu = styled.ul`
  display: flex;
  // margin-left: auto;
`;

export const Item = styled.li`
  margin-left: 15px;
  &:first-child {
    margin-left: 0;
  }
`;

export const StyledLink = styled(NavLink)`
  padding-bottom: 12px;
  color: ${(p) => p.theme.mainColor};
  font-size: 24px;
  font-weight: 700;
  font-family: "Comfortaa", sans-serif;
  border-bottom: 3px solid transparent;
  transition: color ${(p) => p.theme.transition};
  &.active {
    color: ${(p) => p.theme.accentTextColor};
    border-bottom: 3px solid ${(p) => p.theme.accentTextColor};
  }
  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.accentTextColor};
  }
`;
