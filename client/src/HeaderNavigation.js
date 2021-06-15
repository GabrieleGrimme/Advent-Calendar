import {NavLink} from 'react-router-dom';
import styled from 'styled-components/macro';

export default function HeaderNavigation() {
  return (
    <Nav>
      <NavLinkStyled exact to="/" className="link">
        Adventskalender
      </NavLinkStyled>
      <NavLinkStyled to="/Quizform" className="link">
        Gewinnspiel
      </NavLinkStyled>
    </Nav>
  );
}

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  align-items: right;
`;

const NavLinkStyled = styled(NavLink)`
  color: var(--third);
  cursor: pointer;
  font-size: 1.8rem;
  padding: 0.2rem;
  text-decoration: none;
  :hover {
    background: transparent;
    color: var(--secondary);
  }
`;