import styled from 'styled-components/macro';
import { Button } from './Button';

const GameOver = ({ pts }) => {
  const refreshPage = () => window.location.reload();

  return (
    <>
      <Title>Game Over</Title>
      <Points>Du hast {pts} von 5!</Points>
      <Button onClick={refreshPage}> Nochmal? </Button>
    </>
  );
};

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

export default GameOver;
