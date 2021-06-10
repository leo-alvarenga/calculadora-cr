import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
