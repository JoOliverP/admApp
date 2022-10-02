import { Button } from '../../components/Button';
import { GroupCard } from '../../components/GroupCard';
import { Header } from '../../components/Header';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Header title='Produtos' />
      <GroupCard  title='Iphone 8'/>
      <GroupCard  title='Iphone 8'/>
      <GroupCard  title='Iphone 8'/>
      <GroupCard  title='Iphone 8'/>

      <Button title='Adicionar Produto' />
    </Container>
  );
}