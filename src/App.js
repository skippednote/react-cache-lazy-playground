import React, { Component, Suspense, lazy } from 'react';
import { Router } from '@reach/router';
import './App.css';
import Loading from './Loading';
import Header from './Header';
const HomePage = lazy(() => import('./HomePage'));
const UserPage = lazy(() => import('./UserPage'));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<Loading />}>
        <Header />
        <Router>
          <HomePage path="/" />
          <UserPage path="/users" />
        </Router>
      </Suspense>
    );
  }
}

export default App;
