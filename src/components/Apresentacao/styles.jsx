import styled from 'styled-components';

export const ApresentacaoEstilizada = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 1rem 6.25rem 1rem;
  max-width: 1110px;
  margin: 0 auto;

  img {
    width: 18.75rem;
  }

  .apresentacao__conteudo {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    text-align: center;

    h2 {
      font-size: 1.625rem;
    }

    p {
      color: #7A746E;
      line-height: 1.625rem;
      width: 103%;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 0 2.5rem 7.5rem 0;
    gap: 70px;

    img {
      margin-left: -44px;
      width: 22.75rem;
    }

    .apresentacao__conteudo {
      align-items: flex-start;
      text-align: start;

      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1.125rem;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    gap: 125px;
    padding: 0 0 5.5rem 0;
    
    img {
      margin: 0;
      width: 28rem;
    }

    .apresentacao__conteudo {
      gap: 34px;

      h2 {
        font-size: 2.5rem;
      }
    }
  }
`;
