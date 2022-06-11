import styled from "styled-components";
import { breakpoints } from "utils/breakPoints";

export const Wrapper = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 337px;
  transform: scale(1);
  transition: transform ${(p) => p.theme.transition};
    @media ${breakpoints.tablet} {
      width: 320px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 4px 3px ${(p) => p.theme.cardsShadowColor};
    transform: scale(1.02);
  }
`;

export const Thumb = styled.div`
  // margin-bottom: 5px;
  // background-color: ${(p) => p.theme.skeletonFrom};
`;

export const Picture = styled.img`
  object-fit: cover;
  width: 100%;
  height: 507px;
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 12px;
  height: 26px;
  font-weight: 500;
  line-height: 12px / 14px;
  color: ${(p) => p.theme.accentBG};
  padding-left: 4px;
  padding-top: 4px;

`;

export const Genres = styled.p`
  margin-top: 4px;
  font-size: 12px;
  line-height: 12px / 14px;
  font-weight: 500;
  color: ${(p) => p.theme.genresColor};
  padding-left: 4px;
`;