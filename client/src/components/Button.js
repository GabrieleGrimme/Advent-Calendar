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
    border-radius: 5rem;
    box-shadow: 15px 0px 150px 12px rgba(255, 255, 255, 0.8),
      0 0 40px 9px rgba(255, 253, 224, 0.7);
    color: var(--secondary);
    transition: all 1s ease-in-out;
  }
`;

export default Button;
