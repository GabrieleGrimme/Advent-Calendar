import React from 'react';
import styled, { css } from 'styled-components/macro';
import Button from './Button';

const Intro = styled.div`
  margin-top: 8em;
  text-align: center;
`;

const btnCSS = css`
  margin-top: 2em;
`;

const Start = ({ props }) => {
  const startQuiz = () => props(true);

  return (
    <Intro>
      <h2>Musik-Quiz</h2>
      <h4>Mit der richtigen Lösung, kannst du bei uns gewinnen!</h4>
      <Button onClick={startQuiz} css={btnCSS}>
        Los geht's!
      </Button>
    </Intro>
  );
};

export default Start;
