import styled from 'styled-components/macro';

export const Button = styled.button`
  background: black;
  border: 1px solid var(--third);
  border-radius: 0.5rem;
  color: var(--third);
  cursor: pointer;
  font-weight: bolder;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  padding: 0.4rem;
  :hover {
    background: transparent;
    border-radius: 5rem;
    box-shadow: 15px 0px 150px 12px var(--shadowfirst),
      0 0 40px 9px var(--shadowsecond);
    color: var(--secondary);
    transition: all 1s ease-in-out;
  }
`;

export default Button;
