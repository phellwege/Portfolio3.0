import React, {useState} from 'react';
import { Router } from '@reach/router';
import { ThemeProvider } from 'styled-components';
import Main from './views/Main';
import PartyTimeDetails from './views/PartyTimeDetails';
import CoffeeShopDetails from './views/CoffeeShopDetails';
import StarWarsDetails from './views/StarWarsDetails';
import EventPlannerDetails from './views/EventPlannerDetails';
import TipCalcDetails from './views/TipCalcDetails';
import './App.css';



function App() {
const [theme, setTheme] = useState({mode: 'light'})

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <React.Fragment>
          <Router>
            <Main path="/"/>
            <PartyTimeDetails path="/PartyTimeDetails"/>
            <CoffeeShopDetails path="/CoffeeShopDetails"/>
            <StarWarsDetails path="/StarWarsDetails"/>
            <EventPlannerDetails path="/EventPlannerDetails"/>
            <TipCalcDetails path="/TipCalcDetails"/>
          </Router>
      </React.Fragment>
      </div>
    </ThemeProvider>
  );
}

export default App;
