import React, { Component } from 'react';
import axios from 'axios';
import CardList from '../../components/CardList/CardList';
import Header from '../../components/Header/Header';
import styles from './Overview.module.scss';
import Toolbar from '../../components/Toolbar/Toolbar';

class Overview extends Component {
  state = {
    pictures: [],
    selectedCard: '',
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

  uploadImage = async (fileUrl) => {
    const newItem = {
      name: '',
      createdAt: new Date(),
      url: fileUrl,
    };

    const url = 'http://localhost:3001/pictures';
    const res = await axios.post(url, newItem);

    this.setState({
      pictures: this.state.pictures.concat(res.data),
    });
  };

  handleRemoveFile = async () => {
    if (!this.state.selectedCard) {
      return;
    }
    const url = `http://localhost:3001/pictures/${this.state.selectedCard}`;
    const res = await axios.delete(url);

    if (res.status === 200 || res.status === 201) {
      this.setState({
        pictures: this.state.pictures.filter(
          (picture) => picture.id !== this.state.selectedCard
        ),
      });
    }
  };

  selectCard = (cardId) => {
    this.setState({
      selectedCard: cardId,
    });
  };

  render() {
    return (
      <div className={styles.overview}>
        <Header header="Overview" />
        <Toolbar
          uploadImage={this.uploadImage}
          handleRemoveFile={this.handleRemoveFile}
          isSelected={!!this.state.selectedCard}
        />
        <CardList
          pictures={this.state.pictures}
          selectCard={this.selectCard}
          isSelected={this.state.selectedCard}
        />
      </div>
    );
  }
}

export default Overview;
