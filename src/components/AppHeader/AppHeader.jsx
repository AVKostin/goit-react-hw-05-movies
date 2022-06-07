import {Wrapper} from "./AppHeader.module";
import Container from "UI/container";
import Navigation from "components/Navigation";

export default function Header(){
  return (
    <Wrapper>
      <Container>
        <Navigation />
      </Container>
    </Wrapper>
  );
};