import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { useState } from 'react';
import initialAdvent from '../Items';

const td = new Date(); // aktuelles Datum und aktuelle Zeit
const today = td.getDate(); // aktueller Tag

const geschenkeFuerHeute = initialAdvent.filter(
  (geschenk) => geschenk.day === today
);
console.log(geschenkeFuerHeute);

export default function QuizItems(props) {
  const showQuizItems = initialAdvent.map((quizItem) => {
    const { id, item, day } = quizItem;
    return (
      <Item key={id}>
        {item} {day}
      </Item>
    );
  });

  if (geschenkeFuerHeute) {
    return <Liste>{showQuizItems}</Liste>;
  }
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

const Item = styled.li`
  color: var(--third);
  font-size: 1.2rem;
  list-style: none;
  margin-top: 0;
  padding-top: 0;
`;
