import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import './main_screen.css';
import { MODES } from '../store/reducer';
import {
  httpGet,
  updateFormData,
  httpPost,
  httpPut,
  httpPatch,
  httpDelete
} from '../store/action';
import { description } from './description';
import { GET, POST, PUT, PATCH, DELETE } from '../store/action/types';

class InputBar extends Component {
  state = {
    id: '',
    userId: '',
    title: '',
    body: '',
    buttonDisabled: true,
    notNullText: ''
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.currentMethod !== this.props.currentMethod)
      this.setState({
        id: '',
        userId: '',
        title: '',
        body: '',
        buttonDisabled: true,
        notNullText: ''
      });
  };

  handleOnClick = () => {
    const { get, updateFormData, currentMethod, post, put, patch } = this.props;
    const { id, userId, title, body } = this.state;

    updateFormData({ id, userId, title, body });

    switch (currentMethod) {
      case GET:
        get(id);
        break;
      case POST:
        post({ id, userId, title, body });
        break;
      case PUT:
        put({ id, userId, title, body });
        break;
      case PATCH:
        patch({ id, userId, title, body });
        break;
      case DELETE:
        if (!id) {
          this.setState({ notNullText: "Id can't be empty!" });
          return;
        } else {
          this.setState({ notNullText: '' });
        }
        this.props.delete(id);
        break;

      default:
        break;
    }
  };

  render() {
    const { currentMethod, formMode, loading } = this.props;
    const { id, userId, title, body, notNullText } = this.state;
    const isDisabled = currentMethod === 'ABOUT';
    const isLess = formMode === MODES.LESS;
    const isPostMethod = currentMethod === POST;
    const formStyle = isPostMethod
      ? { height: '240px' }
      : isLess
      ? { height: '72px' }
      : { height: '320px' };

    return (
      <div className='input-bar'>
        <div className='notNullText'>{notNullText}</div>
        <form id='form' style={formStyle}>
          {!isPostMethod && (
            <input
              value={id}
              type='text'
              placeholder='id'
              className='input-fields'
              onChange={e => this.setState({ id: e.target.value })}
              disabled={isDisabled}
              required
            />
          )}
          <input
            value={userId}
            type='text'
            placeholder='User Id'
            className='input-fields'
            onChange={e => this.setState({ userId: e.target.value })}
            disabled={isDisabled || isLess}
            required
          />
          <input
            value={title}
            type='text'
            placeholder='Title'
            className='input-fields'
            onChange={e => this.setState({ title: e.target.value })}
            disabled={isDisabled || isLess}
            required
          />
          <textarea
            value={body}
            placeholder='Body'
            className='text-area'
            onChange={e => this.setState({ body: e.target.value })}
            disabled={isDisabled || isLess}
            required
          />
        </form>

        <button
          type='submit'
          className='action-button submit-button'
          onClick={this.handleOnClick}
          disabled={isDisabled || loading}
        >
          {loading ? (
            <Loader type='Puff' color='#fff' height={20} width={20} />
          ) : currentMethod === 'ABOUT' ? (
            GET
          ) : (
            currentMethod
          )}
        </button>

        <div
          className='important-text'
          style={description[currentMethod].important && { opacity: 1 }}
        >
          {description[currentMethod].important &&
            `Note: ${description[currentMethod].important}`}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentMethod: state.currentMethod,
  formMode: state.formMode,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  get: method => dispatch(httpGet(method)),
  post: method => dispatch(httpPost(method)),
  put: method => dispatch(httpPut(method)),
  patch: method => dispatch(httpPatch(method)),
  delete: method => dispatch(httpDelete(method)),
  updateFormData: method => dispatch(updateFormData(method))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputBar);
