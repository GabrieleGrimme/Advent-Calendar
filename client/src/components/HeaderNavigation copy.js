import {NavLink} from 'react-router-dom';
import styled from 'styled-components/macro';

export default function HeaderNavigation() {
  return (
    <Nav>
      <NavLinkStyled exact to="/" className="link">
        Home
      </NavLinkStyled>
      <NavLinkStyled to="/pokemon-list" className="link">
        Pokemon Liste
      </NavLinkStyled>
      <NavLinkStyled to="/favorites" className="link">
        Favorites
      </NavLinkStyled>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

const NavLinkStyled = styled(NavLink)`
  display: inline-flex;
  border: 1px solid red;
  border-radius: 3rem;
  padding: 6px 8px 4px 8px;
  text-decoration: none;
  background-image: linear-gradient(#ff0f7b, #f89b29);
  color: var(--primary);
  :hover {
    background: transparent;
    color: #ff0f7b;
  }
`;
