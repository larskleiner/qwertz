import React, { Component } from 'react';
import { Col, Button, Grid, Modal, Row } from 'react-bootstrap';
import $ from 'jquery';
import FlickrImage from './FlickrImage';
import InstagramImage from './InstagramImage';

export default class Photos extends Component {
  constructor() {
    super();

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

    this.state = {
      open: false,
      item: []
    }
  }

  componentDidMount() {
    const flickrSource = "https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=4f57950ccacd369c46b811502a5d1cee&user_id=45872427%40N00&per_page=1&page=1&format=json&nojsoncallback=1";
    this.serverRequest = $.getJSON(
      flickrSource, { format: "json" }
    )
      .done(data => {
        this.setState({
          item: data.photos.photo
        });
      })
      .fail(console.error);
  }

  componentWillUnmount() {
    this.serverRequest.abort();
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
        <Modal bsSize="large" show={this.state.open} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Photos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Grid>
              <Row>
                <Col>
                  <FlickrImage item={this.state.item} />
                </Col>
                <Col>
                  <InstagramImage />
                </Col>
              </Row>
            </Grid>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle='primary' onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </p>
    );
  }
}
