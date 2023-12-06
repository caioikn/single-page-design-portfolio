import styled from 'styled-components';

export const ContatoEstilizado = styled.section`
  align-items: center;
  background-color: #030303;
  border-radius: 10px;
  color: #FFF7F0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 0 auto 2.5rem auto;
  max-width: 1110px;
  padding: 3rem 1.5rem;
  width: 95%;

  .contato__conteudo {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h2 {
      font-size: 1.625rem;
    }

    p {
      line-height: 1.625rem;
      text-align: center;
    }
  }

  @media screen and (min-width: 768px) {
    gap: 1.65rem;
    margin: 0 auto 3.75rem auto;
    width: 91.5%;

    .contato__conteudo {
      gap: 1.65rem;

      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1.125rem;
        line-height: 1.75rem;
        width: 85%;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 5rem 6rem 5rem 4rem;
    flex-direction: row;
    justify-content: space-between;

    .contato__conteudo {
      align-items: flex-start;
      width: 56%;

      p {
        text-align: start;
        width: 100%;
      }
    }
  }
`;
