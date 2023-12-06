import Botao from '../Botao';
import Imagem from '../Imagem';
import { CabecalhoEstilizado } from './styles';

export default function Cabecalho() {
  return (
    <CabecalhoEstilizado> 
      <Imagem 
        src='images/logo.svg'
        alt='Logo'
      /> 
      
      <Botao />
    </CabecalhoEstilizado>
  );
}
