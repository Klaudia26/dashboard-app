import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Activity from './pages/Activity/Activity';
import Overview from './pages/Overview/Overview';
import Users from './pages/Users/Users';
import Navigation from './components/Navigation/Navigation';
import Topbar from './components/Topbar/Topbar';
import CreateUser from './pages/CreateUser/CreateUser';
import styles from './App.module.scss';
import './Styles/globalStyles.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Topbar />
          <Navigation />
          <div className={styles.wrapper}>
            <Switch>
              <Route exact path="/" component={Overview} />
              <Route path="/activity" component={Activity} />
              <Route exact path="/users" component={Users} />
              <Route path="/users/create" component={CreateUser} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
