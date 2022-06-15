import styled from "styled-components";
import { breakpoints } from "../../../utils/breakPoints";

export const Wrapper = styled.div`
  padding: 10px;
  border-radius: 4px;
  background-color: ${(p) => p.theme.mainColor};
  border: 1px solid ${(p) => p.theme.lightBG};
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const AuthorName = styled.span`
  margin-left: 20px;
  text-transform: uppercase;
  color: ${(p) => p.theme.accentColor};
  font-size: 14px;
  font-weight: 700;
  font-family: "Comfortaa", sans-serif;
`;

export const Text = styled.p`
  color: ${(p) => p.theme.lightBG};
  font-size: 12px;
  font-weight: 200;
  line-height: calc( 16 / 12);
  padding: 0 15px 10px 30px;
  text-indent: 1.5em;
  text-align: justify;

  font-family: "Comfortaa", sans-serif;
      @media ${breakpoints.laptop} {
        font-size: 16px;
  }
`;

export const Avatar = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #000;
`;

export const NoAvatar = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: aqua;
`;