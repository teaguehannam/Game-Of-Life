// Start Main App (2nd level)
import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Home from './components/Home.js'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
