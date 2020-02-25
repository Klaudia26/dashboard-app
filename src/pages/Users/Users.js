import React, { Component } from 'react';
import UsersList from '../../components/UsersList/UsersList';
import axios from 'axios';

class Users extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const url = 'http://localhost:3001/users';
    const response = await axios.get(url);

    this.setState({
      users: response.data,
    });
    // console.log('stan', this.state);
  }

  render() {
    return (
      <>
        <UsersList users={this.state.users} />
      </>
    );
  }
}

export default Users;
