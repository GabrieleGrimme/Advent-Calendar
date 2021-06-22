import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import CalBackground from '../assets/cal_background.svg';
import initialAdvent from '../Items';

export default function AdvCal(props) {
  //const [quizItem, setQuizItem] = useState(initialAdvent);

  const { id, item, day } = props;

  const showAdvCal = initialAdvent.map((advDay) => (
    <Items key={advDay.id}>{advDay.id}</Items>
  ));

  return <Door>{showAdvCal}</Door>;
}

// Fehlerprophylaxe für Devs und Dokumentation
AdvCal.propTypes = {
  id: PropTypes.number,
  item: PropTypes.string,
  day: PropTypes.number,
};

const Door = styled.section`
  background-size: auto;
  background: url(${CalBackground});
  display: grid;
  gap: 10px;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  margin-top: 1rem;
`;

const Items = styled.article`
  background: var(--secondary);
  border-radius: 5rem;
  color: var(--third);
  font-size: 2rem;
  margin: 0.2rem;
  padding: 1rem;
  place-items: center;
  :hover {
    background: transparent;
    color: var(--secondary);
  }
`;
