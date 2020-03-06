import React, { Component } from 'react';

import InputBar from './inputBar';
import ResultPane from './resultPane';

import './main_screen.css';

export default class MainScreen extends Component {
  render() {
    return (
      <div className='wrapper'>
        <header className='header'>
          REST API
          <div className='action-bar'>
            <button className='action-button' value='GET' autofocus>
              GET
            </button>
            <button className='action-button' value='post'>
              POST
            </button>
            <button className='action-button' value='put'>
              PUT
            </button>
            <button className='action-button' value='patch'>
              PATCH
            </button>
            <button className='action-button' value='delete'>
              DELETE
            </button>
          </div>
        </header>

        <div className='body-wrapper'>
          <InputBar buttonText='One' />
          <ResultPane />
        </div>
      </div>
    );
  }
}
