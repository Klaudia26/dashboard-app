import React, { Component } from 'react';
import Upload from '../Upload/Upload';
import ModalFile from '../Modal/ModalFile';
import { FaTrash } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

import styles from './Toolbar.module.scss';

class Toolbar extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div className={styles.toolbar}>
        <button
          className={styles.icon}
          onClick={this.props.handleRemoveFile}
          disabled={!this.props.isSelected}
        >
          <FaTrash />
        </button>
        {this.props.showButton ? (
          <Link to="/users/create">
            <button className={styles.icon}>
              <MdAdd />
            </button>
          </Link>
        ) : (
          <Upload openModal={this.openModal} />
        )}

        {this.state.isModalOpen && (
          <ModalFile
            uploadImage={this.props.uploadImage}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}
export default Toolbar;
