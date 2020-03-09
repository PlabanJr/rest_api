import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputBar from './inputBar';
import ResultPane from './resultPane';
import { updateMethod } from '../store/action';
import { GET, POST, PUT, PATCH, DELETE } from '../store/action/types';

import './main_screen.css';

class MainScreen extends Component {
  handleClick = method => {
    if (this.props.currentMethod === method) return;
    this.props.updateMethod(method);
  };

  render() {
    return (
      <div className='wrapper'>
        <header className='header'>
          <span className='logo' onClick={() => (window.location = '/')}>
            HTTP METHODS{' '}
          </span>
          <div className='action-bar'>
            <button
              className='action-button'
              onClick={() => this.handleClick(GET)}
            >
              GET
            </button>
            <button
              className='action-button'
              onClick={() => this.handleClick(POST)}
            >
              POST
            </button>
            <button
              className='action-button'
              onClick={() => this.handleClick(PUT)}
            >
              PUT
            </button>
            <button
              className='action-button'
              onClick={() => this.handleClick(PATCH)}
            >
              PATCH
            </button>
            <button
              className='action-button'
              onClick={() => this.handleClick(DELETE)}
            >
              DELETE
            </button>
          </div>
        </header>

        <div className='body-wrapper'>
          <InputBar />
          <ResultPane />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentMethod: state.currentMethod
});

const mapDispatchToProps = dispatch => ({
  updateMethod: method => dispatch(updateMethod(method))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
