import styled from 'styled-components/macro';

export const Button = styled.button`
  background: none;
  border: 1px solid var(--third);
  border-radius: 0.5rem;
  color: var(--third);
  cursor: pointer;
  font-weight: bolder;
  font-size: 1.2.5rem;
  padding: 0.4rem;
  :hover {
    background: transparent;
    color: var(--secondary);
  }
`;

export default Button;
