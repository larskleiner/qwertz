import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class Dev extends Component {
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
        <Button bsStyle='primary' onClick={this.openModal}>Web Development »</Button>
        <Modal bsSize="large" show={this.state.open} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Web Development</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Sit quia nemo quis enim provident porro eaque accusamus tenetur provident aliquid commodi? Velit nesciunt maiores obcaecati totam praesentium sint vitae exercitationem quaerat maxime iusto et! Consequatur aspernatur sit impedit
            </p>
            <p>
              <Button href="https://www.linkedin.com/in/larskleiner" bsStyle="info">View on linkedin »</Button>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle='primary' onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </p>
    );
  }
}
