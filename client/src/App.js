
import styled from 'styled-components/macro';
//import loadFromDatabase from '../controller/lib/databaseHelpers';

// import { useEffect, useState } from 'react';
//import DMELogo from './assets/dme_logo_klein.jpg';
//import Tree from './assets/tree.svg';
//import Skull from './assets/skull.svg';

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
          <article>DME-Radio einschalten, Quizfrage beantworten und
            und tolle Preise gewinnen!
          </article>
          <QuizQuestion>Hier steht die Quizfrage!</QuizQuestion>
          <article>
            <ul>
              <QuizAnswer>Answer1</QuizAnswer>
          </ul>
          </article>
          <h2>Heute verlosen wir:</h2>
          <article>
            <ul>
              <li>CD Deine Lakaien</li>
              <li>Fanshirts</li>
              <li>Sticker</li>
            </ul>
          </article>
          <div>
          <label htmlfor="name"> Dein Name </label>
            <input 
              type="text" 
              name="name" 
            />
            <label htmlFor="email"> Deine Email </label>
            <input 
              type="text" 
              name="email" 
            />
          </div>
        <Button>Send</Button>
        <Button type="reset">Cancel</Button>
    </div>
  </Wrapper>
    )
}

const Wrapper = styled.section`
  display: grid;
  place-items: center;
`;

const QuizQuestion = styled.article`
  background: var(--primary);
  border-radius: 5rem;
  color: var(--secondary);
`;

const QuizAnswer = styled.li`
  background: var(--fourth);
  border-radius: 3rem;
  color: var(--secondary);
`;


const QuizAnswer = styled.li`
  background: var(--fourth);
  border-radius: 3rem;
  color: var(--secondary);
`;

const Button = styled.button`
  border-radius: 3rem;
  border: 1px solid var(--fifth);
  background: var(--secondary);
  cursor: pointer;
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