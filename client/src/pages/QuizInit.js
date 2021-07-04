import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';

import Start from '../components/Start';
import Quiz from '../components/Quiz';

export default function QuizInit({ onAddUser }) {
  const [start, setStart] = useState(false);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get('https://dme.ceedee71.de/short.php')
      .then((res) => res.data)
      .then((data) => {
        setSongs({ songs: data });
        console.log(songs);
      });
  }, []);

  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1);
    }, 5000);
    return () => clearInterval(timer);
  });

  return (
    <div>
      <Wrapper>
        <main>
          <FootNote>Soundsoviele {seconds} Sekunden!</FootNote>
          <audio controls id="audioPlayer">
            <source
              src="https://server4.streamserver24.com:8080/proxy/darkmelo?mp=%2Fstream"
              type="audio/mpeg"
            />
          </audio>

          <QuizWrapper>
            <RadioTitle>
              DME-Radio einschalten, Quizfragen beantworten und tolle Preise
              gewinnen!
            </RadioTitle>
            <h2> Musik Quiz </h2>
            {start ? (
              <Quiz onAddUser={onAddUser} />
            ) : (
              <Start props={setStart} />
            )}
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
  margin-top: 1rem;
`;

const FootNote = styled.article`
  font-size: 14px;
  margin-bottom: 1rem;
`;
