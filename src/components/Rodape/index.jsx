import Botao from '../Botao';
import Imagem from '../Imagem';
import { RodapeEstilizado } from './styles';

export default function Rodape() {
  return (
    <RodapeEstilizado>
      <Imagem 
        src='/images/logo.svg'
        alt='Logo'
      />

      <Botao />
    </RodapeEstilizado>
  );
}