import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';

export default class Photos extends React.Component {
  constructor() {
    super();

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

    this.state = {
      open: false
    }
  }

  closeModal() {
    this.setState({open: false})
  }

  openModal() {
    this.setState({open: true})
  }

  render() {
    return (
      <p>
        <Button bsStyle='primary' onClick={this.openModal}>Photos »</Button>
        <Modal show={this.state.open} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Photos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This demonstrates how to use the Modal component from React-Bootstrap
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle='primary' onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </p>
    );
  }
}
