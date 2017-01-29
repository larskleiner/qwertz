import React, { Component } from 'react';
import { Button, Col, Grid, Image, Row } from 'react-bootstrap';

export default class FlickrImage extends Component {

  render() {
    let item = this.props.item[0];
    let link = "https://www.flickr.com/photos/45872427%40N00/" + item.id + "?rb=1";
    let source = "https://farm" + item.farm + ".staticflickr.com/" + item.server + "/" + item.id + "_" + item.secret + ".jpg";
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <image src={source} responsive />
            </Col>
            <Col xs={8} md={3}>
              <p>
                Sit quia nemo quis enim provident porro eaque accusamus tenetur provident aliquid commodi? Velit nesciunt maiores obcaecati totam praesentium sint vitae exercitationem quaerat maxime iusto et! Consequatur aspernatur sit impedit
              </p>
              <p>
                <Button href={link} bsStyle="info">View on Flickr »</Button>
              </p>
            </Col>
            <Col xsOffset={6}>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}
