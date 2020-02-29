import React, { Component } from 'react';
import Modal from './Modal';
import styles from './Modal.module.scss';
import axios from 'axios';

class ModalFile extends Component {
  state = {
    mediaPreview: '',
    file: null,
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
  renderAction = () => (
    <>
      <button onClick={this.props.closeModal}>Cancel</button>
      <button onClick={this.uploadImage}>Upload</button>
    </>
  );
  uploadImage = async () => {
    const payload = new FormData();

    payload.append('file', this.state.file);
    payload.append('upload_preset', 'shop-app');
    payload.append('cloud_name', 'kubaleski');

    const response = await axios.post(
      process.env.REACT_APP_CLOUDINARY_URL,
      payload
    );

    this.props.uploadImage(response.data.url);
    this.props.closeModal();
  };

  render() {
    return (
      <>
        <Modal
          header="Upload file"
          content={this.renderModalContent()}
          action={this.renderAction()}
          closeModal={this.props.closeModal}
        />
      </>
    );
  }
}
export default ModalFile;
