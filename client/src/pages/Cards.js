
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

export default function Card(props) {
  // const name = props.name;
  // const type = props.type
  const { name, type } = props;
  return (
    <CardWrapper>
      <h2>{name}</h2>
      <p>{type}</p>
    </CardWrapper>
  );
}
const CardWrapper = styled.article`
  color: ivory;
  padding: 0.3rem;
  margin: 0.2rem;
  border-radius: 0.5rem;
  display: grid;
  place-items: center;
  h2,
  p {
    text-shadow: 0 -0.5px 2px lightslategray;
  }
  button {
    border: none;
    background: transparent;
    cursor: pointer;
    transition: transform ease-out 0.2s;
  }
  button:hover {
    transform: rotate(-25deg);
    transition: transform ease-in 0.3s;
  }
`;

// Fehlerprophylaxe für Devs und Dokumentation
Card.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

