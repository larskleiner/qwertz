import React, { Component } from 'react';
import { Col, Glyphicon, Grid, Jumbotron, Row } from 'react-bootstrap';
import Photos from './Photos';
import Dev from './Dev';

export default class Body extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Lars Kleiner</h1>
            <p>develops web applications for more then 15 years. He can help you connect your front end to your backend micro services or migrate your site to Drupal 8. Lars has over 10 years experience with PHP frameworks, especially <a href="http://www.drupal.org">Drupal</a> and <a href="http://symfony.com">Symfony</a>. This site is based on <a href="https://react-bootstrap.github.io/">React Bootstrap</a>.</p>
          </Grid>
        </Jumbotron>
        <Grid>
          <Row>
            <Col md={6}>
              <h2>
                <Glyphicon glyph="cog" />
                Web Development
              </h2>
              <p>Lars is a freelance web developer based in London and Hamburg, Germany. His clients include a range of enterprises across the UK and the European continent. Contact Lars via linkedin.</p>
              <Dev />
            </Col>
            <Col md={6}>
              <h2>
                <Glyphicon glyph="camera" />
                Photos
              </h2>
              <p>Lars frequently takes his camera along for walks around town and has assembled a portfolio of cityscapes of positively amazing places across the world.</p>
              <Photos />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
