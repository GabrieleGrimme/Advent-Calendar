import React from 'react';
import styled, { css } from 'styled-components/macro';
import Button from './Button';

const Start = ({ props }) => {
  const startQuiz = () => props(true);

  return (
    <Intro>
      <h4>Mit der richtigen Lösung, kannst du bei uns gewinnen!</h4>
      <Button onClick={startQuiz}>Los geht's!</Button>
    </Intro>
  );
};

const Intro = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

export default Start;
