import React from 'react';
import 'bootstrap/less/bootstrap.less';
import './styles/custom-styles.css';

import Body from './Body';
import Footer from './Footer';

React.render(
  <div>
    <Body />
    <Footer />
  </div>
  , document.getElementById('app'));
