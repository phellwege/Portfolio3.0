import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import StarWarsDetails from './views/StarWarsDetails';

import './App.css';



function App() {


  return (
      <div className="App">
        <React.Fragment>
          <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route exact path="/StarWarsDetails" element={<StarWarsDetails/>}/>
          </Routes>
      </React.Fragment>
      </div>
  );
}

export default App;
