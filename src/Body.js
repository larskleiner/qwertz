import React, { Component } from 'react';
import { Col, Glyphicon, Grid, Jumbotron, Row } from 'react-bootstrap';
import About from './About';
import Photos from './Photos';
import Dev from './Dev';

export default class Body extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Lars Kleiner</h1>
            <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
            <About />
          </Grid>
        </Jumbotron>
        <Grid>
          <Row>
            <Col md={6}>
              <h2>
                <Glyphicon glyph="cog" />
                Web Development
              </h2>
              <p>Adipisicing ratione incidunt eaque expedita rerum porro inventore. Nihil sit ipsam iure officiis sit eos at quibusdam natus dignissimos natus dolore! Vel doloremque ipsa alias nihil harum laborum necessitatibus rerum?</p>
              <Dev />
            </Col>
            <Col md={6}>
              <h2>
                <Glyphicon glyph="camera" />
                Photos
              </h2>
              <p>Sit quia nemo quis enim provident porro eaque accusamus tenetur provident aliquid commodi? Velit nesciunt maiores obcaecati totam praesentium sint vitae exercitationem quaerat maxime iusto et! Consequatur aspernatur sit impedit.</p>
              <Photos />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
