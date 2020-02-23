import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Activity from './pages/Activity/Activity';
import Overview from './pages/Overview/Overview';
import Users from './pages/Users/Users';
import Navigation from './components/Navigation/Navigation';
import Topbar from './components/Topbar/Topbar';
import './Styles/globalStyles.scss';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Topbar />
          <Navigation />
          <div className={styles.wrapper}>
            <Route exact path="/" component={Overview} />
            <Route path="/activity" component={Activity} />
            <Route path="/users" component={Users} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
