import styled from "styled-components";
import { breakpoints } from "utils/breakpoints";

export const Wrapper = styled.div`
  @media ${breakpoints.tablet} {
    display: flex;
  }
  padding: 20px;
  margin-top: 10px;
  background-color: ${(p) => p.theme.cardBGColor};

  // border-radius: 4px;
  // -webkit-box-shadow: 0px 0px 0px 5px #a0a0a0, inset 0px 10px 27px -8px #141414,
  //   inset 0px -10px 27px -8px #b1a2a3, 5px 5px 15px 5px rgba(181, 181, 181, 0);
  // box-shadow: 0px 0px 0px 5px #a0a0a0, inset 0px 10px 27px -8px #141414,
  //   inset 0px -10px 27px -8px #b1a2a3, 5px 5px 15px 5px rgba(181, 181, 181, 0);
`;

export const Thumb = styled.div`
  & img {
    margin: 0 auto;
    // border-radius: 5px;
    width: 100%;

      @media ${breakpoints.tablet} {
        width: 340px;
    }
      @media ${breakpoints.laptop} {
        width: 360px;
    }
  }
`;

export const Information = styled.div`
  margin-left: 0;
  margin-top: 20px;

    @media ${breakpoints.tablet} {
      margin-top: 0;
      margin-left: 20px;
  }

    @media ${breakpoints.laptop} {
      margin-left: 25px;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: ${(p) => p.theme.altBG};
  font-size: 22px;
  font-weight: 700;
  font-family: "Comfortaa", sans-serif;

    @media ${breakpoints.laptop} {
      font-size: 26px;
  }
`;

export const Subtitle = styled.p`
  margin-top: 4px;
  margin-bottom: 30px;
  color: ${(p) => p.theme.lightBG};
  font-size: 20px;
  font-weight: 700;
  font-family: "Comfortaa", sans-serif;

    @media ${breakpoints.laptop} {
      font-size: 22px;
  }
`;

export const CardsDescription = styled.div`
height: 60px;
background-color: ${(p) => p.theme.cardBGColor};
`;

export const BlockTitle = styled.h3`
  margin-top: 20px;
  color: ${(p) => p.theme.accentColor};
  font-size: 18px;
  font-weight: 700;
  font-family: "Comfortaa", sans-serif;

    @media ${breakpoints.laptop} {
      font-size: 20px;
  }
`;

export const Paragraph = styled.p`
  margin-top: 10px;
  color: ${(p) => p.theme.altBG};
  font-size: 14px;
  font-weight: 400;
  font-family: "Comfortaa", sans-serif;
  text-align: justify;
  padding-right: 10px;

    @media ${breakpoints.laptop} {
      font-size: 16px;
  }
`;
