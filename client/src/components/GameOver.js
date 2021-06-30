import styled from 'styled-components/macro';
import EmailSubmitAfterQuiz from './EmailSubmitAfterQuiz';
import { Button } from './Button';

const GameOver = ({ pts }) => {
  const refreshPage = () => window.location.reload();

  return (
    <GameOverBox>
      <Title>Game Over</Title>
      <Button onClick={refreshPage}> Nochmal? </Button>
      <Points>Du hast {pts} von 3 Punkten!</Points>
      <FootNote>
        Um an der Verlosung teilzunehmen, trage dich bitte mit deinem Namen und
        Email in die Liste ein.
      </FootNote>
      <EmailSubmitAfterQuiz />
    </GameOverBox>
  );
};

const GameOverBox = styled.div`
  background: linear-gradient(rgb(0, 0, 0), rgb(210, 68, 68));
  border-radius: 0.5rem;
`;

const Title = styled.h1`
  font-family: 'Courier New', Courier, monospace;
  font-size: 24px;
  margin-top: 4rem;
`;

const Points = styled.p`
  font-family: 'Courier New', Courier, monospace;
  font-size: 18px;
  margin-bottom: 3rem;
`;

const FootNote = styled.article`
  font-size: 14px;
  margin-top: 1rem;
`;

export default GameOver;
