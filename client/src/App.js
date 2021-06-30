import styled from 'styled-components/macro';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';

import HeaderNavigation from './components/HeaderNavigation';
import Home from './pages/Home';
import QuizForm from './pages/Quizform';
import DMELogo from './assets/dme_logo.jpg';

function App() {
  const [users, setUsers] = useState([]);

  async function addUser(user) {
    try {
      const result = await fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const userSaved = await result.json();
      setUsers([...users, userSaved]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <HeadWrapper>
        <a href="https://www.dm-entertainment.de/dme-radio">
          <Logo src={DMELogo} alt="Back to DME-Radio Website" />
        </a>
        <HeaderNavigation />
        <Switch>
          <Route exact path="/">
            <div>
              <Home />
            </div>
          </Route>
          <Route path="/Quizform">
            <div>
              <QuizForm onAddUser={addUser} />
            </div>
          </Route>
        </Switch>
      </HeadWrapper>
    </div>
  );
}

const HeadWrapper = styled.header`
  background: var(--primary);
  display: grid;
  margin: 0.5rem;
  padding: 1.2rem;
  place-items: center;
  text-align: center;
  width: 375px;
`;

const Logo = styled.img`
  width: 150px;
  margin: 0 auto;
`;

export default App;
