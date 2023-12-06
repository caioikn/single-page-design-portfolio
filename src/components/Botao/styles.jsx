import styled from 'styled-components';

export const BotaoEstilizado = styled.button`
  background-color: ${props => props.$corFundo || '#030303'};
  
  border: none;
  border-radius: 28px;
  color: #FFF7F0;
  cursor: pointer;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.75rem;
  padding: 8px 28px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.$corFundoHover || '#755CDE'};
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
    padding: 14px 45px;
  }
`;