import styled from 'styled-components';

export const CabecalhoEstilizado = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1110px;
  padding: 1rem 1rem 2rem 1rem;

  img {    
    width: 3rem;
  }

  @media screen and (min-width: 768px) {
    padding: 2rem 2.5rem 4rem 2.5rem;

    img {
      width: 4rem;
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 2rem 0 4rem 0;
  }
`;
