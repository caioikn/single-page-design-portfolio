import Tecnologias from '../Tecnologias';
import Titulo from '../Titulo';
import { HeroEstilizado } from './styles';

export default function Destaque() {
  return (
    <HeroEstilizado>
      <Titulo />

      <Tecnologias />
    </HeroEstilizado>
  );
}