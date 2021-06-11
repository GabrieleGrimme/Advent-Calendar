//import './App.css';
import { useState } from 'react';
import Card from './Card';
import styled from 'styled-components/macro';
import ProfessorEich from './ProfessorEich';
import Eich from './images/professorEich.png';
import PokemonLogo from './images/pokemon-logo.svg';

function App() {
  const initialPokemon = [
    { name: 'Pikachu', type: 'Elektro' },
    { name: 'Glumanda', type: 'Feuer' },
    { name: 'Bisasam', type: 'Pflanze' },
    { name: 'Schiggy', type: 'Wasser' },
    { name: 'Smettbo', type: 'Käfer' },
    { name: 'Blitza', type: 'Elektro' },
    { name: 'Vulpix', type: 'Feuer' },
    { name: 'Pummeluff', type: 'Fee' },
  ];
  const [pokemon, setPokemon] = useState(initialPokemon);
  const [professorEich, setProfessorEich] = useState([]);
  function sendToProfessorEich(name) {
    const pokemonToAdd = pokemon.find((pokemon) => pokemon.name === name);
    setProfessorEich([...professorEich, pokemonToAdd]);
    releasePokemon(name);
  }
  function releasePokemon(name) {
    const remainingPokemon = pokemon.filter((pokemon) => pokemon.name !== name);
    setPokemon(remainingPokemon);
  }
  function fromEichToLiberty(name) {
    const pokemonToAdd = professorEich.find((pokemon) => pokemon.name === name);
    setPokemon([pokemonToAdd, ...pokemon]);
    const remainingPokemon = professorEich.filter(
      (pokemon) => pokemon.name !== name
    );
    setProfessorEich(remainingPokemon);
  }
  return (
    <div className="App">
      <ImageWrapper className="imageWrapper">
        <img className="PokemonLogo" src={PokemonLogo} alt="Pokemon Logo" />
        <h3>Pokémon bei Professor Eich ({professorEich.length}) </h3>
      </ImageWrapper>
      <EichWrapper>
        <img src={Eich} alt="Professor Eich" />
        {professorEich.map((pokemon) => (
          <ProfessorEich
            name={pokemon.name}
            type={pokemon.type}
            fromEichToLiberty={fromEichToLiberty}
          />
        ))}
      </EichWrapper>
      {pokemon.map((pokemon) => (
        <Card
          name={pokemon.name}
          type={pokemon.type}
          sendToProfessorEich={sendToProfessorEich}
        />
      ))}
    </div>
  );
}

const ImageWrapper = styled.section`
  display: grid;
  place-items: center;
`;

const EichWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  
  img {
    width: 8rem;
  }
`;


export default App;
