
import styled from 'styled-components/macro';
//import loadFromDatabase from '../controller/lib/databaseHelpers';

// import { useEffect, useState } from 'react';
//import DMELogo from './assets/dme_logo_klein.jpg';
import Tree from './assets/tree.svg';
import Skull from './assets/skull.svg';

/* const advent = 
        { 1: ['CD Deine Lakaien: Dual', 'CD Felix Marc'],
          2: ['CD Croona: Ascend', 'Shirt DME-Radio', 'Buttons and Pen DME-Radio'],
          3: ['CD Scheuber: Numb', 'Book The Cure'],
          4: ['CD Omnimar: Darkpop', 'Autograph, Maria from Omnimar'],
          5: ['Poster von Agonoize', '1 Mini-Headphone']
        };
*/

function App() {

    return (
      <div className="App">
        <Wrapper> 
            <audio controls id="audioPlayer">
            <source src="https://server4.streamserver24.com:8080/proxy/darkmelo?mp=%2Fstream" type="audio/mpeg" />
            </audio>
          <article>
          <img src={Skull} alt="Skull" />
            DME-Radio einschalten, Quizfrage beantworten und
            und tolle Preise gewinnen!
          </article>
          
          <Question>Hier steht die Quizfrage!</Question>
          
          <article>
            <Liste>
              <Answer> Answer1 </Answer>
            </Liste>
          </article>
          
          <H2>Heute verlosen wir:</H2>
          
          <ItemsWrapper>
            <div>
              <img src={Tree} alt="Tree" />
            </div>
            <div>
              <Liste>
                <Items>CD Deine Lakaien</Items>
                <Items>Fanshirts</Items>
                <Items>Sticker</Items>
              </Liste>
              </div>
          </ItemsWrapper>

          <InputField>
          <Label htmlfor="name">Name: </Label>
            <Input 
              type="text" 
              name="name" 
              placeholder="Dein Name: "
            />
            <Label htmlFor="email">Email: </Label>
            <Input 
              type="text" 
              name="email" 
              placeholder="Deine Email:"
            />
          </InputField>
          
           <Buttons>
              <Button> Send </Button>
              <Button type="reset"> Cancel </Button>
            </Buttons>
      
        </Wrapper>
      </div>
    )
}

const Wrapper = styled.section`
  border: 1px solid green;
  display: grid;
  margin: 0.5rem;
  padding: 1.2rem;
  place-items: center;
  width: 400px;
`;

const H2 = styled.h2`
  color: var(--third);
  font-size: 2rem;
  margin: 0 auto;
`;

const Question = styled.article`
  background: var(--secondary);
  border: 1px solid var(--third);
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
  color: var(--secondary);
  padding: 0.5rem;
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
  font-size: 0.8rem;
`;

const Input = styled.input`
  border-radius: 0.5rem;
`;

const Items = styled.li`
  color: var(--third);
  font-size: 1.5rem;
  list-style-type: none;
  margin-top: 0;
  padding-top: 0;
`;

const ItemsWrapper = styled.article`
border: 1px solid green;
  display: flex;
  margin: 0 auto;
  padding: 0.2rem;
`;

const Buttons = styled.section`
  gap: 6rem;
  display: flex;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: var(--third);
  cursor: pointer;
  font-weight: bolder;
  font-size: 1.0rem;
  padding: 0.2rem;
`;

/*
const BooksButtonStyled = styled(BooksButton)`
  .active & path {
    fill: var(--tertiary);
    stroke: none;
  }
`;
Dabei müsstet ihr im SVG gucken, ob ihr einen path, ein rect oder was auch immer verändern müsst. Btw. so wie ich es verstanden habe ersetzt “title” bei SVGs das “alt” Tag (für die accessibility).
*/

export default App;

/* aus dem simple node server
const fs = require('fs'); //CommonJS <> ES6 Modules (import fs from 'fs')

const name = 'Bulbasaur';

fs.writeFile('pokemon.txt', 'Pokemon #1 ' + name, (error) =>  { // schreibe in den text, 
    if (error) {
        console.log(error.message);// wird ein error Objekt übergeben
        return false;
}

console.log('File was written.');

});
*/