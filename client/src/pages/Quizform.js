import { useState } from 'react';
import styled from 'styled-components/macro';

import Start from '../components/Start';
import Quiz from '../components/Quiz';

import Skull from '../assets/skull.svg';
import { Button } from '../components/Button';

export default function QuizForm({ onAddUser }) {
  const initialUser = {
    name: '',
    vorname: '',
    email: '',
    datum: '',
  };

  const [user, setUser] = useState(initialUser);
  const [isError, setIsError] = useState(false);
  const [start, setStart] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();
    onAddUser(user);
    setUser(initialUser);
    setIsError(false);
  }

  function updateUser(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;

    setUser({ ...user, [fieldName]: fieldValue });
  }

  return (
    <div className="App">
      <Wrapper>
        <main>
          <form onSubmit={handleFormSubmit}>
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

            <InputField>
              <Label htmlfor="name">Name: </Label>
              <Input
                type="text"
                name="name"
                placeholder="Dein Name: "
                onChange={updateUser}
                value={user.name}
              />
              <Label htmlfor="vorname">Vorame: </Label>
              <Input
                type="text"
                name="vorname"
                placeholder="Dein Vorname: "
                onChange={updateUser}
                value={user.vorname}
              />
              <Label htmlFor="email">Email: </Label>
              <Input
                type="text"
                name="email"
                placeholder="Deine Email:"
                onChange={updateUser}
                value={user.email}
              />
            </InputField>

            <Buttons>
              <Button type="submit" value="">
                {'>'}
              </Button>
              <Button type="reset"> X </Button>
            </Buttons>
          </form>
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

const InputField = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: none;
  padding: 0.8rem;
`;

const Label = styled.label`
  color: var(--secondary);
  font-size: 0.6rem;
`;

const Input = styled.input`
  border-radius: 0.5rem;
`;

const QuizWrapper = styled.article`
  margin: 0 auto;
`;

const Buttons = styled.section`
  gap: 6rem;
  display: flex;
  justify-content: space-around;
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
