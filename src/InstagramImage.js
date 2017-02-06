import React, { Component } from 'react';
import { Col, Button, Grid, Row } from 'react-bootstrap';
import InstagramEmbed from 'react-instagram-embed';

export default class InstagramImage extends Component {

  render() {
    let link = "https://www.instagram.com/p/BPgC0hkAL53/";
    return (
      <div className="photo-section">
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <InstagramEmbed
                url={link}
                maxWidth={500}
                hideCaption
                containerTagName='div'
                onLoading={() => {}}
                onSuccess={() => {}}
                onFailure={() => {}}
              />
            </Col>
            <Col xs={8} md={3}>
              <p>Some more recent photos are now available on Instagram as well.</p>
              <p>
                <Button href={link} bsStyle="info">View on Instagram »</Button>
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}