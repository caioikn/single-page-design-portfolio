import TecnologiasItem from '../TecnologiasItem';
import { ListaEstilizada } from './styles';

export default function Tecnologias() {
  return (
    <ListaEstilizada>
      <TecnologiasItem 
        src='images/pattern-graphic-design.svg'
        titulo='Graphic Design'
      />

      <TecnologiasItem 
        src='images/pattern-ui-ux.svg'
        titulo='UI/UX'
      />

      <TecnologiasItem 
        src='images/pattern-apps.svg'
        titulo='Apps'
      />

      <TecnologiasItem 
        src='images/pattern-illustrations.svg'
        titulo='Illustrations'
      />
    
      <TecnologiasItem 
        src='images/pattern-photography.svg'
        titulo='Photography'
      />

      <TecnologiasItem 
        src='images/pattern-motion-graphics.svg'
        titulo='Motion Graphics'
        />
    </ListaEstilizada>
  );
}