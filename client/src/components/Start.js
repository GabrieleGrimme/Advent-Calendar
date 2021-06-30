import styled from 'styled-components/macro';
import Button from './Button';
import Tree from '../assets/tree.svg';

const Start = ({ props }) => {
  const startQuiz = () => props(true);

  return (
    <StartQuiz>
      <XmasTree src={Tree} alt="DME-Radio Xmas Tree" />
      <Button onClick={startQuiz}>Los geht's!</Button>
    </StartQuiz>
  );
};

const StartQuiz = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
`;

const XmasTree = styled.img`
  width: 5rem;
  margin: 0 auto;
  :hover {
    background: transparent;
    box-shadow: 15px 0px 150px 12px rgba(255, 255, 255, 0.8),
      0 0 40px 9px rgba(255, 253, 224, 0.7);
    transition: all 1s ease-in-out;
  }
`;

export default Start;
