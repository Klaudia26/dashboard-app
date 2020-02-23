import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

class Navigation extends Component {
  render() {
    return (
      <div className={styles.nav}>
        <Link to="/activity">activity</Link>
        <Link to="/users">users</Link>
        <Link to="/">overview</Link>
      </div>
    );
  }
}

export default Navigation;
