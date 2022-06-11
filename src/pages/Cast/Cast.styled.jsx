import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  background-color: ${(p) => p.theme.mainColor};

    & .noCredits {
      font-size: 15px;
  }
`;

export const Item = styled.li`
  padding: 5px;
`;