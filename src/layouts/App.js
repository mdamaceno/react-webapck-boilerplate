import React from 'react';
import { Route } from 'react-router-dom';
import IndexPage from '../pages/Index';

const App = () => {
  return (
    <div>
      <h1>Welcome to React Webpack Boilerplate!</h1>
      <Route exact path="/" component={ IndexPage }/>
    </div>
  );
}

export default App;
