import React, { Component } from 'react';
import { Badge, Grid } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      <Grid>
        <hr />
        <footer>
          <div>
            © 2017 <Badge>qwertz ltd</Badge> ·
            Registered in England and Wales no 6012848 ·
            View this site on <a href="https://github.com/larskleiner/qwertz">GitHub</a>
          </div>
        </footer>
      </Grid>
    );
  }
}
