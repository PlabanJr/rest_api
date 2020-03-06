import React, { Component } from 'react';

import './main_screen.css';

export default class InputBar extends Component {
  render() {
    const { buttonText } = this.props;

    return (
      <div className='input-bar'>
        <form id='form'>
          <input type='text' placeholder='id' className='input-fields' />
          <input type='text' placeholder='User Id' className='input-fields' />
          <input type='text' placeholder='Title' className='input-fields' />
          <textarea placeholder='Body' className='text-area' />
          <button
            type='submit'
            className='action-button submit-button'
            value={buttonText}
          >
            {buttonText}
          </button>
        </form>
      </div>
    );
  }
}
