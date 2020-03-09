import React, { Component } from 'react';
import { connect } from 'react-redux';

import { description } from './description';
import './main_screen.css';

class ResultPane extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.responseData !== this.props.responseData)
      setTimeout(
        document
          .getElementById('desc')
          .scrollIntoView({ behavior: 'smooth', block: 'start' }),
        1000
      );
  }

  getDescription = method => {
    if (method === 'ABOUT')
      return (
        <span>
          This is a simple implementation of HTTP Methods using{' '}
          <a href='https://reactjs.org'>React</a> &{' '}
          <a href='https://github.com/reduxjs/redux-thunk'>Redux-Thunk</a>. It
          uses{' '}
          <a href='https://jsonplaceholder.typicode.com/'>JSONPlaceholder</a>, a
          fake online Rest API. <br />
          <br />
          Github:
          <a href='https://github.com/PlabanJr/rest_api' className='git-link'>
            {' '}
            github.com/HTTP_Methods
          </a>
        </span>
      );

    return description[method].desc;
  };

  render() {
    const { currentMethod, responseData, error } = this.props;

    return (
      <div className='result-pane'>
        <h4 style={{ marginTop: '0' }}>{currentMethod}</h4>
        <div className='desc' id='desc'>
          {this.getDescription(currentMethod)}
          {'  '}
          {currentMethod !== 'ABOUT' && (
            <a className='read-more' href={description[currentMethod].url}>
              Read more...
            </a>
          )}
        </div>

        <div
          className='request-wrapper'
          style={!responseData ? { opacity: 0 } : { opacity: 1 }}
        >
          {responseData && (
            <div className='response-wrapper'>
              <h4>Response</h4>
              <pre id='response'>
                {JSON.stringify(responseData, undefined, 4)}
              </pre>
            </div>
          )}
        </div>

        <div
          className='error-wrapper'
          style={!error ? { opacity: 0 } : { opacity: 1 }}
        >
          {error && (
            <div className='response-wrapper'>
              <h4>Error</h4>
              <pre id='response'>{error.message}</pre>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    responseData: state.responseData,
    currentMethod: state.currentMethod,
    formMode: state.formMode,
    formData: state.formData,
    error: state.error
  };
};

export default connect(mapStateToProps, {})(ResultPane);
