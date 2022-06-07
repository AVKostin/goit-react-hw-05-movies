import {
  Wrapper,
  Menu,
  Item,
  StyledLink,
} from "./Navigation.styled";

const Navigation = () => (
  <Wrapper>
    <Menu>
      <Item>
        <StyledLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="/"
        >
          Home
        </StyledLink>
      </Item>
      <Item>
        <StyledLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="/movies"
        >
          Movies
        </StyledLink>
      </Item>
    </Menu>
  </Wrapper>
);

export default Navigation;
