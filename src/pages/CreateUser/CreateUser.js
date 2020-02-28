import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import styles from './CreateUser.module.scss';
import axios from 'axios';
import FormField from '../../components/FormField/FormField';

class CreateUser extends Component {
  state = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    address: '',
    website: '',
    aboute: '',
    dateOfBirth: '',
    gender: 'female',
    loading: false,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
    });

    const user = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      website: this.state.website,
      aboute: this.state.aboute,
      dateOfBirth: this.state.dateOfBirth,
      gender: this.state.gender,
    };
    const url = 'http://localhost:3001/users';

    setTimeout(async () => {
      const res = await axios.post(url, user);
      this.props.history.push('/users');
      this.setState({
        loading: false,
      });
    }, 1000);
  };
  render() {
    const fields = [
      { type: 'text', value: this.state.name, name: 'name', label: 'Name' },
      {
        type: 'text',
        value: this.state.surname,
        name: 'surname',
        label: 'Surname',
      },
      { type: 'email', value: this.state.email, name: 'email', label: 'Email' },
      { type: 'tel', value: this.state.phone, name: 'phone', label: 'Phone' },
      {
        type: 'text',
        value: this.state.address,
        name: 'address',
        label: 'Address',
      },
      {
        type: 'date',
        value: this.state.dateOfBirth,
        name: 'dateOfBirth',
        label: 'Date Of Birth',
      },
      {
        type: 'url',
        value: this.state.website,
        name: 'website',
        label: 'Website',
      },
      {
        type: 'file',
        value: this.state.media,
        name: 'media',
        label: 'Choose file',
      },
      {
        type: 'radio',
        value: this.state.gender,
        name_1: 'male',
        label_1: 'Male',
        name_2: 'female',
        label_2: 'Female',
      },
    ];
    return (
      <>
        <Header header="Complete the fields" />
        <form onSubmit={this.handleSubmit} className={styles.createUserForm}>
          {fields.map((field) => {
            if (field.type === 'radio') {
              return (
                <div className={styles.formItem}>
                  <label htmlFor="male" className={styles.radioLabel}>
                    Male
                    <input
                      type="radio"
                      onChange={this.handleChange}
                      name="gender"
                      checked={this.state.gender === 'male'}
                      value="male"
                      id="male"
                      className={styles.input}
                    />
                  </label>
                  <label htmlFor="female" className={styles.radioLabel}>
                    Female
                    <input
                      type="radio"
                      onChange={this.handleChange}
                      name="gender"
                      checked={this.state.gender === 'female'}
                      value="female"
                      id="female"
                      className={styles.input}
                    />
                  </label>
                </div>
              );
            }
            return <FormField field={field} handleChange={this.handleChange} />;
          })}
          <div className={styles.formItem}>
            <label htmlFor="select" className={styles.label}>
              Select{' '}
            </label>
            <select id="select" className={styles.select}>
              <option value="single">Single</option>
              <option value="maried">Maried</option>
            </select>
          </div>
          <textarea
            onChange={this.handleChange}
            value={this.state.aboute}
            name="aboute"
            className={styles.textarea}
            placeholder="Tell us something about yourself"
          ></textarea>
          <button
            type="submit"
            className={styles.btn}
            disabled={this.state.loading}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}
export default CreateUser;
