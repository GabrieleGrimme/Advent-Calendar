import { useEffect, useState } from 'react';

import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import AdventModal from './AdventModal';
import CalBackground from '../assets/cal_background.svg';
import Data from '../data.json';

export default function AdvCal(props) {
  //Set the month for testing (0 == January, 11 == December)
  const month = 5;
  const today = new Date();

  const { id, text, day } = props;

  const showAdvCal = Data.map((advDay) => (
    <Items key={advDay.day}>{advDay.day}</Items>
  ));

  return (
    <div>
      <AdventModal />
      <Door>{showAdvCal}</Door>;
    </div>
  );
}

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
  cursor: pointer;
  font-size: 2rem;
  margin: 0.2rem;
  padding: 1rem;
  place-items: center;
  :hover {
    background: transparent;
    box-shadow: 15px 0px 100px 12px rgba(255, 255, 255, 0.8),
      0 0 40px 9px rgba(255, 253, 224, 0.7);
    transition: all 1s ease-in-out;
  }
`;
