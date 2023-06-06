import { useNavigate } from "react-router";
import {
  ButtonCadastrar,
  ButtonList,
  Container,
  Content,
  Header,
} from "./Home.style";

export default function Home() {
  
  const navigate = useNavigate()

  function renderProducts(){
    navigate('http://localhost:5173')
  }
  
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
