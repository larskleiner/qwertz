import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class About extends Component {
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
        <Button bsStyle='primary' bsSize='large' onClick={this.openModal}>About »</Button>
        <Modal bsSize="large" show={this.state.open} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>About</Modal.Title>
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
