import styled from 'styled-components/macro';
//import loadFromDatabase from '../controller/lib/databaseHelpers';
import { useEffect, useState } from 'react';

import QuizItems from './QuizItems';
import Tree from '../assets/tree.svg';
import Skull from '../assets/skull.svg';

export default function QuizForm({ onAddUser }) {
  const initialUser = {
    name: '',
    vorname: '',
    email: '',
    datum: '',
  };

  const [user, setUser] = useState(initialUser);
  const [isError, setIsError] = useState(false);

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
            <audio controls id="audioPlayer">
              <source
                src="https://server4.streamserver24.com:8080/proxy/darkmelo?mp=%2Fstream"
                type="audio/mpeg"
              />
            </audio>
            <article>
              DME-Radio einschalten, Quizfrage beantworten und und tolle Preise
              gewinnen!
            </article>

            <Question>
              Hier steht die Quizfrage! Hier steht die Quizfrage! Hier steht die
              Quizfrage!
            </Question>

            <article>
              <Liste>
                <Answer> ... Answer1 ... </Answer>
                <Answer> ... Answer2 ... </Answer>
                <Answer> ... Answer3 ... </Answer>
                <Answer> ... Answer4 ... </Answer>
              </Liste>
            </article>

            <H2>Gewinnspiel:</H2>

            <ItemsWrapper>
              <div>
                <img src={Tree} alt="Tree" />
              </div>
              {/*
              <div>
                <QuizItems />
              </div>
              */}
            </ItemsWrapper>

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

const H2 = styled.h2`
  color: var(--third);
  font-size: 1.5rem;
  margin: 0 auto;
`;

const Question = styled.article`
  background: var(--fourth);
  border-radius: 0.5rem;
  color: var(--primary);
  margin-top: 1.5rem;
  padding: 0.5rem;
`;

const Liste = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const Answer = styled.li`
  background: var(--fourth);
  border-radius: 0.5rem;
  color: var(--primary);
  list-style: url(${Skull});
  margin: 0.5rem;
  padding: 0.2rem;
`;

const InputField = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: none;
  padding: 0.7rem;
`;

const Label = styled.label`
  color: var(--secondary);
  font-size: 0.6rem;
`;

const Input = styled.input`
  border-radius: 0.5rem;
`;

const ItemsWrapper = styled.article`
  align-items: flex-end;
  justify-content: space-around;
  display: flex;
  margin: 0 auto;
  padding: 0.2rem;
`;

const Buttons = styled.section`
  gap: 6rem;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  background: none;
  border: 1px solid var(--third);
  border-radius: 5rem;
  color: var(--third);
  cursor: pointer;
  font-weight: bolder;
  font-size: 1.5rem;
  padding: 0.8rem;
  :hover {
    background: transparent;
    color: var(--secondary);
  }
`;
