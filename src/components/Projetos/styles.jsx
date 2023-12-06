import styled from 'styled-components';

export const ProjetosEstilizado = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
  padding-bottom: 6.25rem;

  @media screen and (min-width: 768px) {
    padding-bottom: 7.5rem;
    gap: 3.5rem;

    h2 {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 5.5rem;
  }
`;
