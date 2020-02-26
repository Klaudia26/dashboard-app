import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import styles from './CreateUser.module.scss';

class CreateUser extends Component {
  state = {
    users: [],
    name: '',
    surname: '',
    email: '',
    phone: '',
    address: '',
    website: '',
    aboute: '',
    dateOfBirth: '',
    gender: 'female',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <>
        <Header header="Complete the fields" />
        <form onSubmit={this.handleSubmit} className={styles.createUserForm}>
          <div className={styles.formItem}>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.name}
              name="name"
              placeholder=" "
              id="name"
              className={styles.input}
            />
            <label htmlFor="name" className={styles.label}>
              Name{' '}
            </label>
          </div>
          <div className={styles.formItem}>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.surname}
              placeholder=" "
              name="surname"
              id="surname"
              className={styles.input}
            />
            <label htmlFor="surname" className={styles.label}>
              Surname{' '}
            </label>
          </div>
          <div className={styles.formItem}>
            <input
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
              name="email"
              id="email"
              placeholder=" "
              className={styles.input}
            />
            <label htmlFor="email" className={styles.label}>
              Email{' '}
            </label>
          </div>
          <div className={styles.formItem}>
            <input
              type="tel"
              onChange={this.handleChange}
              value={this.state.phone}
              name="phone"
              placeholder=" "
              id="phone"
              className={styles.input}
            />
            <label htmlFor="phone" className={styles.label}>
              Phone{' '}
            </label>
          </div>
          <div className={styles.formItem}>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.address}
              name="address"
              placeholder=" "
              id="address"
              className={styles.input}
            />
            <label htmlFor="address" className={styles.label}>
              Address{' '}
            </label>
          </div>
          <div className={styles.formItem}>
            <input
              required
              type="date"
              onChange={this.handleChange}
              value={this.state.dateOfBirth}
              name="dateOfBirth"
              id="dateOfBirth"
              placeholder=" "
              className={styles.input}
            />
            <label htmlFor="dateOfBirth" className={styles.label}>
              Date Of Birth
            </label>
          </div>
          <div className={styles.formItem}>
            <input
              type="url"
              onChange={this.handleChange}
              value={this.state.website}
              name="website"
              placeholder=" "
              id="url"
              className={styles.input}
            />
            <label htmlFor="url" className={styles.label}>
              Url{' '}
            </label>
          </div>
          <div>
            <label htmlFor="media" className={styles.labelMedia}>
              Choose file
            </label>
            <input
              type="file"
              onChange={this.handleChange}
              name="media"
              className={styles.input}
              id="media"
            />
          </div>
          <div className={styles.formItem}>
            <select id="select" className={styles.select}>
              <option value="single">Single</option>
              <option value="maried">Maried</option>
            </select>
            <label htmlFor="select" className={styles.label}>
              Select{' '}
            </label>
          </div>
          <div className={styles.formItem}>
            <div>
              <label htmlFor="male" className={styles.label}>
                Male{' '}
              </label>
              <input
                type="radio"
                onChange={this.handleChange}
                name="gender"
                checked={this.state.gender === 'male'}
                value="male"
                id="male"
                className={styles.input}
              />
            </div>
            <div className={styles.female}>
              <label htmlFor="female" className={styles.label}>
                Female{' '}
              </label>
              <input
                type="radio"
                onChange={this.handleChange}
                name="gender"
                checked={this.state.gender === 'female'}
                value="female"
                id="female"
                className={styles.input}
              />
            </div>
          </div>
          <textarea
            onChange={this.handleChange}
            value={this.state.aboute}
            name="aboute"
            className={styles.textarea}
            placeholder="Tell us something about yourself"
          ></textarea>
          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </form>
      </>
    );
  }
}
export default CreateUser;
