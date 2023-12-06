import { useState } from 'react';
import { CarouselEstilizado } from './styles';

export default function Carousel() {
  const images = [
    { id: 1, image: '/images/image-slide-1.jpg', alt: 'Blue background with blue details.'},
    { id: 2, image: '/images/image-slide-2.jpg', alt: 'Various shapes on a blue background.'},
    { id: 3, image: '/images/image-slide-3.jpg', alt: 'A hand holding the newspaper.'},
    { id: 4, image: '/images/image-slide-4.jpg', alt: 'Books and records stacked.'},
    { id: 5, image: '/images/image-slide-5.jpg', alt: 'A hand holding the cellphone'},
  ];

  const [indexAtual, setIndexAtual] = useState(0);

  const mostraSlide = (index) => {
    if (index < -2) {
      setIndexAtual(images.length - 3);
    } else if (index > images.length - 3) {
      setIndexAtual(-2);
    } else {
      setIndexAtual(index);
    }
  };

  const voltaSlide = () => {
    mostraSlide(indexAtual - 1);
  };

  const proximoSlide = () => {
    mostraSlide(indexAtual + 1);
  };

  return (
    <CarouselEstilizado>
      <div className='carousel'>
        {images.map((item) => (
          <img 
            key={item.id}
            src={item.image}
            alt={item.alt}
            style={{ transform: `translateX(${-indexAtual * 105}%)` }}
          />
        ))}
      </div>

      <div className='carousel-botoes'>
        <button onClick={voltaSlide}>
          <svg width='15' height='16' xmlns='http://www.w3.org/2000/svg'><path fill='#FFF' d='M8 0 0 8l8 8 1.687-1.687-5.121-5.12h10.241V6.807H4.566l5.121-5.12z'/></svg>
        </button>
        
        <button onClick={proximoSlide}>
          <svg width='15' height='16' xmlns='http://www.w3.org/2000/svg'><path fill='#FFF' d='m6.808 16 8-8-8-8-1.687 1.687 5.121 5.12H.001v2.386h10.241l-5.121 5.12z'/></svg>
        </button>
      </div>
    </CarouselEstilizado>
  );
}
