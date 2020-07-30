// Start Main App (2nd level)
import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Home from './components/Home.js'
import Intro from './components/Intro.js'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Intro} />
      <Route path="/game" component={Home} />
    </div>
  );
}

export default App;
