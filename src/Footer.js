import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Badge from 'react-bootstrap/lib/Badge';

export default class Footer extends React.Component {
  render() {
    return (
      <Grid>
        <hr />
        <footer>
          <p>
            © 2017 <Badge>qwertz ltd</Badge> ·
            Registered in England and Wales no 6012848 ·
            View this site on <a href="https://github.com/larskleiner/qwertz">GitHub</a>
          </p>
        </footer>
      </Grid>
    );
  }
}
