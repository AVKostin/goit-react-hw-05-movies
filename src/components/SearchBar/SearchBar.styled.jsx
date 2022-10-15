import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 280px;
  margin-right: 10px;
  background-color: "#ffffff";
  padding-left: 20px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid ${(p) => p.theme.accentTextColor};
  color: ${(p) => p.theme.accentBG};
`;
