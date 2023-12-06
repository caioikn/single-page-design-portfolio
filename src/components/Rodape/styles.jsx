import styled from 'styled-components';

export const RodapeEstilizado = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem 2rem 1rem;
  margin: 0 auto;
  max-width: 1110px;

  img {
    width: 48px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 2.5rem 3.75rem 2.5rem;
    margin: 0 auto;

    img {
      width: 64px;
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 0 0 4rem 0;
  }
`;
