import styled from 'styled-components';

export const ListaEstilizada = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  gap: 24px 25px;

  li {
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 24px;

    img {
      align-self: flex-end;
    }

    h2 {
      color: #FFFFFF;
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  li:nth-child(1) {
    background-color: #755CDE;
    gap: 94px;
    grid-area: 1 / 1 / 3 / 3;
  }  

  li:nth-child(2) {
    background-color: #F6A560;
    gap: 40px;
    grid-area: 3 / 1 / 4 / 2;
  }  

  li:nth-child(3) {
    background-color: #F39E9E;
    gap: 40px;
    grid-area: 3 / 2 / 4 / 3;
  }  

  li:nth-child(4) {
    background-color: #EB7565;
    gap: 16px;
    grid-area: 4 / 1 / 5 / 3;
  } 

  li:nth-child(5) {
    background-color: #61C4B7;
    gap: 40px;
    grid-area: 5 / 1 / 6 / 3;
  }

  li:nth-child(6) {
    background-color: #552049;
    gap: 40px;
    grid-area: 6 / 1 / 7 / 3;
  }

  @media screen and (min-width: 768px) {
    gap: 24px 24px;
    grid-template-columns: repeat(4, 1fr);

    li:nth-child(2) {
      grid-area: 1 / 3 / 2 / 4;
    }

    li:nth-child(3) {
      grid-area: 1 / 4 / 2 / 5;
    }

    li:nth-child(4) {
      grid-area: 2 / 3 / 3 / 5;
    }

    li:nth-child(5) {
      grid-area: 3 / 1 / 4 / 3;
    }

    li:nth-child(6) {
      grid-area: 3 / 3 / 4 / 5;
    }

    @media screen and (min-width: 1440px) {
      grid-template-columns: repeat(6, 1fr);

      li:nth-child(5) {
        grid-area: 1 / 5 / 2 / 7;
      }

      li:nth-child(6) {
        gap: 16px;
        grid-area: 2 / 5 / 3 / 7;
      }
    }
  }
`;