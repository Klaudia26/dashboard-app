import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

class Navigation extends Component {
  render() {
    return (
      <div className={styles.nav}>
        <h5>Main</h5>
        <Link to="/activity">Activity</Link>
        <Link to="/users">Users</Link>
        <Link to="/">Overview</Link>
      </div>
    );
  }
}

export default Navigation;
