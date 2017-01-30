import React, { Component } from 'react';
import { Col, Button, Grid, Row } from 'react-bootstrap';
import InstagramEmbed from 'react-instagram-embed';

export default class InstagramImage extends Component {

  render() {
    let link = "https://www.instagram.com/p/BPgC0hkAL53/";
    return (
      <div>
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
              <p>
                Sit quia nemo quis enim provident porro eaque accusamus tenetur provident aliquid commodi? Velit nesciunt maiores obcaecati totam praesentium sint vitae exercitationem quaerat maxime iusto et! Consequatur aspernatur sit impedit
              </p>
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