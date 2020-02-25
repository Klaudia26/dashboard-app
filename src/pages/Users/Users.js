import React, { Component } from 'react';
import UsersList from '../../components/UsersList/UsersList';
import axios from 'axios';
import Toolbar from '../../components/Toolbar/Toolbar';
import Header from '../../components/Header/Header';

class Users extends Component {
  state = {
    users: [],
    selectUser: '',
  };

  async componentDidMount() {
    const url = 'http://localhost:3001/users';
    const response = await axios.get(url);

    this.setState({
      users: response.data,
    });
  }

  removeUser = async () => {
    const url = `http://localhost:3001/users/${this.state.selectUser}`;
    const response = await axios.delete(url);

    if (response.status === 200 || response.status === 201) {
      this.setState({
        users: this.state.users.filter(
          (user) => user.id !== this.state.selectUser
        ),
      });
    }
  };

  activeUser = (userId) => {
    this.setState({
      selectUser: userId,
    });
  };

  render() {
    return (
      <>
        <Header header="Users" />
        <Toolbar
          handleRemoveFile={this.removeUser}
          isSelected={!!this.state.selectUser}
          showButton
        />
        <UsersList
          users={this.state.users}
          selectUser={this.state.selectUser}
          activeUser={this.activeUser}
        />
      </>
    );
  }
}

export default Users;
