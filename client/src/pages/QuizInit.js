import { useState } from 'react';
import styled from 'styled-components/macro';

import Start from '../components/Start';
import Quiz from '../components/Quiz';

export default function QuizInit() {
  const [start, setStart] = useState(false);

  return (
    <div>
      <Wrapper>
        <main>
          <RadioTitle>
            DME-Radio einschalten, Quizfragen beantworten und tolle Preise
            gewinnen!
          </RadioTitle>

          <audio controls id="audioPlayer">
            <source
              src="https://server4.streamserver24.com:8080/proxy/darkmelo?mp=%2Fstream"
              type="audio/mpeg"
            />
          </audio>

          <QuizWrapper>
            <FootNote>
              Hast du schon hinter das Kalendertürchen geschaut, was du heute
              gewinnen kannst?
            </FootNote>
            <h2> Musik Quiz </h2>
            {start ? <Quiz /> : <Start props={setStart} />}
          </QuizWrapper>
        </main>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.section`
  background: var(--primary);
  display: grid;
  padding: 1.2rem;
  place-items: center;
  text-align: center;
`;
const QuizWrapper = styled.article`
  margin: 0 auto;
`;

const RadioTitle = styled.article`
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  font-weight: bolder;
  margin-bottom: 1rem;
`;

const FootNote = styled.article`
  font-size: 14px;
  margin-top: 1rem;
`;
