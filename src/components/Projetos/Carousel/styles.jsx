import styled from 'styled-components';

export const CarouselEstilizado = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .carousel {
    display: flex;
    gap: 15px;

    img {
      border-radius: 10px;
      transition: transform 0.3s ease-in-out;
      width: 16.875rem;      
    }
  }
  
  .carousel-botoes {
    display: flex;
    gap: 16px;

    button {
      background-color: #030303;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      height: 64px;
      transition: background-color 0.3s ease-in-out;
      width: 64px;

      &:hover {
        background-color: #755CDE;
      }
    }
  }

  @media screen and (min-width: 768px) {
    gap: 3.5rem;

    .carousel {
      gap: 30px;

      img {
        width: 33.75rem;
      }
    }
  }
`;

