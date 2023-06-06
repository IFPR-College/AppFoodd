import {
  ButtonCadastrar,
  ButtonList,
  Container,
  Content,
  Header,
} from "./Home.style";

export default function Home() {

  return (
    <Container>
      <Header>APPFood</Header>
      <Content>
        <ButtonList>Produtos</ButtonList>
        <ButtonCadastrar>Categorias</ButtonCadastrar>
      </Content>
    </Container>
  );
}
