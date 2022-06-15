import styled from "styled-components";
import { breakpoints } from "../../utils/breakPoints";

export const Wrapper = styled.div`
  @media ${breakpoints.tablet} {
    display: flex;
  }
  padding: 20px;
  margin-top: 10px;
  background-color: ${(p) => p.theme.cardBGColor};
`;

export const Thumb = styled.div`
  & img {
    margin: 0 auto;
    width: 100%;

      @media ${breakpoints.tablet} {
        width: 292px;
    }
      @media ${breakpoints.laptop} {
        width: 440px;
    }
  }
`;

export const Information = styled.div`
  margin-left: 10px;
  margin-top: 20px;

    @media ${breakpoints.tablet} {
      margin-top: 0;
      margin-left: 10px;
  }

    @media ${breakpoints.laptop} {
      margin-left: 10px;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: ${(p) => p.theme.altBG};
  font-size: 18px;
  font-weight: 700;
  font-family: "Comfortaa", sans-serif;
  padding-left:10px;
    @media ${breakpoints.tablet} {
       margin-bottom: 15px;
  }

    @media ${breakpoints.laptop} {
        font-size: 26px;
        padding-left:10px;
        margin-bottom: 20px;
  }
`;

export const CardsDescription = styled.div`
height: 60px;
background-color: ${(p) => p.theme.cardBGColor};


  padding-top: 10px;
  height: 80px;


`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;


export const Table = styled.table`
  width: 100%;
  border: none;
  text-align: left;
  border-collapse: separate;
  margin-bottom: 20px;
`;
export const Head = styled.th`
  font-weight: 500;
  font-size: 13px;
  line-height: 1.3333333333;
  letter-spacing: 0;
  margin-right: 15px;
  color: #8c8c8c;
 `;

export const Data = styled.td`
  font-size: 13px;
  line-height: 1.3333333333;
  letter-spacing: 0;
  color: #000;

`;

export const Rating = styled.span`
  padding: 1px 0px;
  color: #000;
  background-color: #f7f7f7;
  border-radius: 5px;

  font-weight: 500;
  font-size: 15px;
  line-height: 1.1666666667;
  letter-spacing: 0;
`;

export const RatingCards = styled.span`
 display: flex;
  align-items: top;
  justify-content: space-between;

`


export const RatingAccent = styled.span`
  padding: 5px 10px;
  margin-right: 5px;
  color: #000;
  background-color: #f7f7f7;
  border-radius: 5px;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.1666666667;
  letter-spacing: 0;
  color: #fff;
  background-color: #ff6b08;
`;

export const AboutSubtitle = styled.p`
  font-weight: 700;
  font-size: 12px;
  color: #000;
  letter-spacing: 0;
  text-transform: uppercase;
  line-height: 1.3333333333;
  margin-bottom: 10px;
  padding-left: 33px;
    @media ${breakpoints.tablet} {
      font-size: 14px;
  }

    @media ${breakpoints.laptop} {
      font-size: 15px;
  }

`;

export const Overview = styled.p`
font-weight: 200;
font-size: 12px;
line-height: calc( 16 / 12);
color: #000;
letter-spacing: 0;
padding-left:10px;
  text-indent: 1.5em;
  text-align: justify;

   @media ${breakpoints.laptop} {
      font-size: 14px;
`;
