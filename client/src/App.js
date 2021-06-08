
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
