import styled from "styled-components";
import { breakpoints } from "utils/breakpoints";

export const Wrapper = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;

    @media ${breakpoints.tablet} {
      gap: 20px;
      grid-template-columns: 1fr 1fr;
  }
    @media ${breakpoints.laptop} {
      gap: 15px;
      grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Item = styled.li`
  margin: 0 auto;
`;