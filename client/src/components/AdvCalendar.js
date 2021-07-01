import styled from 'styled-components/macro';
import { useState } from 'react';
import AdventModal from './AdventModal';
import CalBackground from '../assets/cal_background.svg';
import Data from '../data.json';

export default function AdvCal() {
  const [open, setOpen] = useState(false);
  const [openedDoor, setOpenedDoor] = useState({});

  function openModal(advDay) {
    setOpen(true);
    setOpenedDoor(advDay);
  }

  const showAdvCal = Data.map((advDay) => (
    <Door key={advDay.day} onClick={() => openModal(advDay)}>
      {advDay.day}
    </Door>
  ));

  return (
    <div>
      <AdvCalBackground>{showAdvCal}</AdvCalBackground>
      <AdventModal
        advDayContent={openedDoor}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

const AdvCalBackground = styled.section`
  background-size: auto;
  background: url(${CalBackground});
  border-radius: 0.5rem;
  display: grid;
  gap: 10px;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  margin-top: 1rem;
`;

const Door = styled.button`
  background: var(--secondary);
  border: none;
  border-radius: 0.5rem;
  color: var(--third);
  cursor: pointer;
  font-size: 2rem;
  padding: 0.8rem;
  place-items: center;
  :hover {
    background: transparent;
    border-radius: 5rem;
    box-shadow: 15px 0px 150px 12px rgba(255, 255, 255, 0.8),
      0 0 40px 9px rgba(255, 253, 224, 0.7);
    transition: all 1s ease-in-out;
  }
`;
