import React, { Component } from 'react';
import { Button, Col, Grid, Image, Row } from 'react-bootstrap';

export default class FlickrImage extends Component {

  render() {
    let item = this.props.item[0];
    let link = "https://www.flickr.com/photos/45872427%40N00/" + item.id + "?rb=1";
    let source = "https://farm" + item.farm + ".staticflickr.com/" + item.server + "/" + item.id + "_" + item.secret + ".jpg";
    return (
      <div className="photo-section">
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <a href={link}>
                <image src={source} responsive />
              </a>
            </Col>
            <Col xs={8} md={3}>
              <p>With almost 500 pictures, the photostream on Flickr includes some of the best photos Lars uploaded through the last 10 years.</p>
              <p>
                <Button href={link} bsStyle="info">View on Flickr »</Button>
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}
