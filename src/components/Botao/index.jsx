import { BotaoEstilizado } from './styles';

export default function Botao({ corFundo, corFundoHover }) {
  return (
    <BotaoEstilizado
      $corFundo={corFundo}
      $corFundoHover={corFundoHover}
    >
      Free Consultation
    </BotaoEstilizado>
  );
}