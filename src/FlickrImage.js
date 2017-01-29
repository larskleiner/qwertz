import React, { Component } from 'react';
import { Col, Button, Grid, Row, Thumbnail } from 'react-bootstrap';

export default class FlickrImage extends Component {

  render() {
    let item = this.props.item[0];
    let link = "https://www.flickr.com/photos/45872427%40N00/" + item.id + "?rb=1";
    let source = "https://farm" + item.farm + ".staticflickr.com/" + item.server + "/" + item.id + "_" + item.secret + ".jpg";
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={3} md={6}>
              <Thumbnail href={link} src={source} />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}
