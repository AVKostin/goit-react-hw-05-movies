import styled from "styled-components";

export const Button = styled.button`
    padding: 8px;
    border-radius: 4px;
    border: none;
    width: 100px;
    background-color: ${(p) => p.theme.buttonBG};
    color: ${(p) => p.theme.mainColor};
    font-family: ${(p) => p.theme.mainFF}, sans-serif;
    transition: background-color ${(p) => p.theme.transition},
    color ${(p) => p.theme.transition};
        &:hover {
            cursor: pointer;
            color: ${(p) => p.theme.mainColor};
            background-color: ${(p) => p.theme.accentTextColor};
    }
`;