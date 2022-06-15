import {Wrapper} from "./AppHeader.styled";
import Container from "../../UI/container";
import Navigation from "../../components/Navigation";

export default function Header(){
  return (
    <Wrapper>
      <Container>
        <Navigation />
      </Container>
    </Wrapper>
  );
};