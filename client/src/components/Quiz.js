import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
import GameOver from './GameOver';

const Quiz = () => {
  const [quiz, setQuiz] = useState([]);
  const [number, setNumber] = useState(0);
  const [pts, setPts] = useState(0);

  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  const pickAnswer = (e) => {
    let userAnswer = e.target.outerText;

    if (quiz[number].answer === userAnswer) setPts(pts + 1);
    setNumber(number + 1);
  };

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=3&category=12&type=multiple')
      .then((res) => {
        setQuiz(
          res.data.results.map((item) => ({
            question: item.question,
            options: shuffle([...item.incorrect_answers, item.correct_answer]),
            answer: item.correct_answer,
          }))
        );
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <QuizBox>
      {quiz[number] && (
        <>
          <Question
            dangerouslySetInnerHTML={{ __html: quiz[number].question }}
          ></Question>

          <Options>
            {quiz[number].options.map((item, index) => (
              <Option
                key={index}
                dangerouslySetInnerHTML={{ __html: item }}
                onClick={pickAnswer}
              ></Option>
            ))}
          </Options>
        </>
      )}
      {number === 3 && <GameOver pts={pts} />}
    </QuizBox>
  );
};

const QuizBox = styled.div`
  background: linear-gradient(var(--primary), var(--third));
  border-radius: 0.5rem;
  font-family: 'Courier New', Courier, monospace;
  margin-top: 1rem;
  text-align: center;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
`;

const Option = styled.button`
  border: 1px solid var(--third);
  border-radius: 0.5rem;
  display: block;
  background: var(--fourth);
  color: var(--primary);
  margin: 0.5rem;
  padding: 0.2rem;
  text-decoration: none;
  transition: 0.3s;
  outline: none;
  user-select: none;
  cursor: pointer;
`;

const Question = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export default Quiz;
