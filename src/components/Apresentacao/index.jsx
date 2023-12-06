import Botao from '../Botao';
import Imagem from '../Imagem';
import { ApresentacaoEstilizada } from './styles';

export default function Apresentacao() {
  return (
    <ApresentacaoEstilizada>
      <Imagem 
        src='images/image-amy.webp'
        alt='Mulher com cabelos castanhos claros e um fundo verde'
      />

      <div className='apresentacao__conteudo'>
        <h2>I'm Amy, and I'd love to work on your next project</h2>

        <p>I love working with others to create beautiful design solutions. I've designed everything from brand illustrations to complete mobile apps. I'm also handy with a camera!</p>

        <Botao 
          corFundo='#EB7565'
          corFundoHover='#F6A560'
        />
      </div>
    </ApresentacaoEstilizada>
  );
}
