import styled from "styled-components";
import { breakpoints } from "../../../utils/breakPoints";

export const List = styled.ul`
    margin-top: 10px;
    display: grid;
    color: black;
    gap: 20px;
    grid-template-columns: 1fr;
        @media ${breakpoints.tablet} {
            grid-template-columns: 1fr 1fr;
    }
        @media ${breakpoints.laptop} {
        grid-template-columns: 1fr 1fr 1fr;
    }

    & img {
        margin-top: 10px;
        border-radius: 20px;
    }
`;
