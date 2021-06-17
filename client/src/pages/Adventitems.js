
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import initialAdvent from './Items';

export default function QuizItems(props) {

  const [quizItem, setQuizItem] = useState(initialAdvent);

  const { id, item, day } = props;


  const showQuizItems = initialAdvent.map(quizGift => 
      <Items key={quizGift.id}>{quizGift.item}</Items>  
      )

  return (
    <Liste>
      {showQuizItems}
    </Liste>
  )}
;

// Fehlerprophylaxe für Devs und Dokumentation
QuizItems.propTypes = {
  id: PropTypes.number,
  item: PropTypes.string,
  day: PropTypes.number
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