import styled from "styled-components";

export const LinksMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${(p) => p.theme.cardBGColor};
`;

export const LinksItem = styled.li`
  margin-right: 10px;

    &:last-child {
      margin-right: 0;
  }
`;
