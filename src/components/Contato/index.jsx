import Botao from '../Botao';
import { ContatoEstilizado } from './styles';

export default function Contato() {
  return (
    <ContatoEstilizado>
      <div className='contato__conteudo'>
        <h2>Book a call with me</h2>

        <p>I'd love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>

      </div>

      <Botao 
        corFundo='#EB7565'
        corFundoHover='#755CDE'
      />
    </ContatoEstilizado>
  );
}