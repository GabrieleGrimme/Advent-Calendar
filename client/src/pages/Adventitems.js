import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { useState } from 'react';
import initialAdvent from '../Items';

const td = new Date(); // aktuelles Datum und aktuelle Zeit
const today = td.getDate(); // aktueller Tag

export default function QuizItems(props) {
  const [quizItem, setQuizItem] = useState(initialAdvent);
  const { id, item, day } = props;

  const showQuizItems = initialAdvent.map((quizItem) => {
    return <Liste>{showQuizItems}</Liste>;
  });
}

// Fehlerprophylaxe für Devs und Dokumentation
QuizItems.propTypes = {
  id: PropTypes.string,
  item: PropTypes.string,
  day: PropTypes.string,
};

const Liste = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const Items = styled.li`
  color: var(--third);
  font-size: 1.5rem;
  list-style: none;
  margin-top: 0;
  padding-top: 0;
`;
