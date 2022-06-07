import styled from "styled-components";

export const LinksMenu = styled.ul`
  // margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${(p) => p.theme.cardBGColor};
  // border-radius: 10px;
`;

export const LinksItem = styled.li`
  margin-right: 10px;

    &:last-child {
      margin-right: 0;
  }
`;