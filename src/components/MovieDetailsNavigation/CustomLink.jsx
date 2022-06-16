import { useMatch, useResolvedPath } from "react-router-dom";
import { StyledLink } from "./CustomLink.styled";

export default function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <StyledLink className={match ? "active" : null}
      to={to} {...props}>
      {children}
    </StyledLink>
  );
};
