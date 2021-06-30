import { useState } from 'react';
import styled from 'styled-components/macro';
import validateUser from '../lib/validations';

import Skull from '../assets/skull.svg';
import { Button } from './Button';

export default function EmailSubmitAfterQuiz({ onAddUser }) {
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
    if (validateUser(user)) {
      onAddUser(user);
      setUser(initialUser);
      setIsError(false);
    } else {
      setIsError(true);
    }
  }

  function updateUser(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;

    setUser({ ...user, [fieldName]: fieldValue });
  }

  return (
    <Wrapper>
      <form onSubmit={handleFormSubmit}>
        {isError && (
          <ErrorBox>
            <span>
              <img src={Skull} alt="Falsche Eingabe" />
            </span>
            <span>Bitte überprüfe deine Formulareingabe!</span>
          </ErrorBox>
        )}

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
          <Button onClick={() => setUser(initialUser)} type="reset">
            {' '}
            X{' '}
          </Button>
        </Buttons>
      </form>
    </Wrapper>
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

const Buttons = styled.section`
  gap: 6rem;
  display: flex;
  justify-content: space-around;
`;

const ErrorBox = styled.div`
  border: 2.4px dotted red;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 0.5fr 3fr;
  font-weight: bolder;
  padding: 1rem;
  place-items: center;
`;
