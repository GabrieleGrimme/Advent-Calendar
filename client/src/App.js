
import styled from 'styled-components/macro';
import HeaderNavigation from './HeaderNavigation';
import Home from './pages/Home';
import QuizForm from './pages/Quizform';
import {Switch, Route} from 'react-router-dom';
//import loadFromDatabase from '../controller/lib/databaseHelpers';
import { useEffect, useState } from 'react';
import DMELogo from './assets/dme_logo2_klein.jpg';
import Tree from './assets/tree.svg';
import Skull from './assets/skull.svg';


function App() {
 
  const [quizs, setQuizs] = useState([]);
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
    )
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
  width: 100px;
  margin: 0 auto;
`;

export default App;
