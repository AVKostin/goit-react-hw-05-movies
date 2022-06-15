import styled from "styled-components";
import { breakpoints } from "../utils/breakPoints";

export const Wrapper = styled.div`
    margin: 0 auto;
    padding: 0 20px;
        @media ${breakpoints.mobile} {
            max-width: 400px;
}

    @media ${breakpoints.tablet} {
        min-width: 768px;
        padding: 0 70px;
}
    @media ${breakpoints.laptop} {
        min-width: 1024px;
        padding: 0 30px;
}
`;