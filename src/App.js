import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Activity from './pages/Activity/Activity';
import Overview from './pages/Overview/Overview';
import Users from './pages/Users/Users';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Overview} />
        <Route path="/activity" component={Activity} />
        <Route path="/users" component={Users} />
      </Router>
    );
  }
}

export default App;
