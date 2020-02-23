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

  uploadImage = async (image) => {
    console.log(image);
    const payload = new FormData();

    payload.append('file', image);
    payload.append('upload_preset', 'shop-app');
    payload.append('cloud_name', 'kubaleski');

    const response = await axios.post(
      process.env.REACT_APP_CLOUDINARY_URL,
      payload
    );
    const newItem = {
      name: '',
      createdAt: new Date(),
      url: response.data.url,
    };
    const url = 'http://localhost:3001/pictures';
    const res = await axios.post(url, newItem);

    console.log('OPD', res.data);
    this.setState({
      pictures: this.state.pictures.concat(res.data),
    });
  };

  render() {
    return (
      <div className={styles.overview}>
        <Header header="Overview" />
        <Toolbar uploadImage={this.uploadImage} />
        <CardList pictures={this.state.pictures} />
      </div>
    );
  }
}

export default Overview;
