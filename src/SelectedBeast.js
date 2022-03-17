import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
      <Modal
        show={this.props.showModal}
        onHide={this.props.hideModal}
      >
       <Modal.Header closeButton>
         
       </Modal.Header>
        <Modal.Body>
          <img class="modalImage" src = {this.props.image_url} alt = "horned beast"/>
          <p>{this.props.description}</p>
        </Modal.Body>
        <Modal.Title></Modal.Title>
      </Modal>
      </>
    )
  }
};

export default SelectedBeast;