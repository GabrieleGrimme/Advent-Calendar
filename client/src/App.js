
// import styled from 'styled-components/macro';

import { useEffect, useState } from 'react';

function App() {
  const [serverMessage, setServerMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/')
    .then((res) => res.json())
    .then((response) => setServerMessage(response));
  });
  
  return (
    <div className="App">
      <h1>Überschrift</h1>
    </div>
    )
}

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