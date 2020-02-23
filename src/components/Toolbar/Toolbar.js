import React, { Component } from 'react';
import Upload from '../Upload/Upload';
import Modal from '../Modal/Modal';

class Toolbar extends Component {
  state = {
    isModalOpen: false,
  };
  renderAction = () => (
    <>
      <button>upload file</button>
      <button onClick={this.closeModal}>cancel</button>
    </>
  );
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
            content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
            action={this.renderAction()}
          />
        )}
      </div>
    );
  }
}
export default Toolbar;
