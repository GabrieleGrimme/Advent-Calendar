import styled from 'styled-components/macro';
import Button from './Button';
import { ReactComponent as Tree } from '../assets/tree.svg';

const Start = ({ props }) => {
  const startQuiz = () => props(true);

  return (
    <StartQuiz>
      <XmasTreeStyled src={Tree} alt="DME-Radio Xmas Tree" />
      <Button onClick={startQuiz}>Los geht's!</Button>
    </StartQuiz>
  );
};

const StartQuiz = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
`;

const XmasTreeStyled = styled(Tree)`
  width: 5rem;
  margin: 0 auto;

  .active & path {
    fill: var(--fifth);
    stroke: none;
  }
`;

export default Start;
