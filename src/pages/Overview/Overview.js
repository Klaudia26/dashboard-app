import React, { Component } from 'react';
import axios from 'axios';
import CardList from '../../components/CardList/CardList';
import Header from '../../components/Header/Header';
import styles from './Overview.module.scss';
import Toolbar from '../../components/Toolbar/Toolbar';

class Overview extends Component {
  state = {
    pictures: [],
  };

  async componentDidMount() {
    const url = 'http://localhost:3001/pictures';
    const response = await axios.get(url);

    if (response.status >= 200 || response.status <= 300) {
      this.setState({
        pictures: response.data,
      });
    }
  }

  render() {
    return (
      <div className={styles.overview}>
        <Header header="Overview" />
        <Toolbar />
        <CardList pictures={this.state.pictures} />
      </div>
    );
  }
}

export default Overview;
