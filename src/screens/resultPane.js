import React, { Component } from 'react';

import { description } from './description';
import './main_screen.css';

export default class ResultPane extends Component {
  render() {
    return (
      <div className='result-pane'>
        <h4>GET</h4>
        <div className='desc'>{description['GET'].desc}</div>
        <a classNam='read-more' href={description['GET'].url}>
          Read more...
        </a>
      </div>
    );
  }
}
