import React, { Component } from 'react';
import Upload from '../Upload/Upload';
import Modal from '../Modal/Modal';
import styles from './Toolbar.module.scss';

class Toolbar extends Component {
  state = {
    isModalOpen: false,
    mediaPreview: '',
    file: null,
  };
  renderAction = () => (
    <>
      <button onClick={this.closeModal}>cancel</button>
      <button onClick={this.uploadImage}>upload</button>
    </>
  );

  uploadImage = () => {
    this.props.uploadImage(this.state.file);
    this.closeModal();
  };

  renderModalContent = () => (
    <>
      <input type="file" onChange={this.handleFileChange} />
      <img
        className={styles.imagePreview}
        src={this.state.mediaPreview}
        alt="url"
      />
    </>
  );

  handleFileChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = window.URL.createObjectURL(file);

    this.setState({
      mediaPreview: imageUrl,
      file: file,
    });
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    return (
      <div>
        <Upload openModal={this.openModal} />
        {this.state.isModalOpen && (
          <Modal
            header="Upload file"
            content={this.renderModalContent()}
            action={this.renderAction()}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}
export default Toolbar;
