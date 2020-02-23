import React, { Component } from 'react';
import axios from 'axios';
import CardList from '../../components/CardList/CardList';
import styles from './Overview.module.scss';

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
    // console.log('odp', response);
  }

  render() {
    return (
      <div className={styles.overview}>
        <CardList pictures={this.state.pictures} />
      </div>
    );
  }
}

export default Overview;
