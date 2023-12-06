import styled from 'styled-components';

export const TituloEstilizado = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 32px;
  text-align: center;

  h1 {
    color: #030303;
    font-size: 2.25rem;
    font-weight: 700;
  }
  
  p {
    color: #7A746E;
    line-height: 1.625rem;
    width: 87%;
  }

  @media screen and (min-width: 768px) {
    gap: 27px;
    padding-bottom: 64px;

    h1 {
      font-size: 2.75rem;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.75rem;
      width: 573px;
    }
  }

  @media screen and (min-width: 1440px) {
    gap: 23px;
    padding-bottom: 80px;

    h1 {
      font-size: 3.5rem;
    }

    p {
      width: 730px;
    }
  }
`;
