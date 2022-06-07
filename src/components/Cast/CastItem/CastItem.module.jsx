import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 156px;
`;

export const Photo = styled.img`
  border-radius: 0px;
`;

export const NoPhoto = styled.img`
  width: 156px;
  height: 234px;
  object-fit: cover;
  background-color: ${(p) => p.theme.altColor};
  border-radius: 0px;
`;

export const Title = styled.h4`
  margin-top: 5px;
  padding: 0 2px;
  color: ${(p) => p.theme.accentColor};
  font-family: ${(p) => p.theme.mainFF};
  font-size: 14px;
`;

export const Subtitle = styled.p`
  margin-top: 5px;
  padding: 0 2px;
  color: ${(p) => p.theme.accentBG};
  font-family: ${(p) => p.theme.mainFF};
  font-size: 13px;
  font-weight: bold;
`;