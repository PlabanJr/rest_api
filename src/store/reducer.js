import {
  UPDATE_CURRENT_METHOD,
  UPDATE_FORM_DATA,
  GET,
  POST,
  PUT,
  PATCH,
  DELETE,
  LOADING,
  ERROR
} from './action/types';

export const MODES = {
  LESS: 'less',
  MORE: 'more'
};

const initialState = {
  currentMethod: 'ABOUT',
  formMode: MODES.MORE,
  responseData: null,
  formData: {},
  error: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOADING:
      return Object.assign({}, state, {
        loading: payload
      });

    case UPDATE_CURRENT_METHOD:
      const mode =
        payload === 'GET' || payload === 'DELETE' ? MODES.LESS : MODES.MORE;

      return Object.assign({}, initialState, {
        currentMethod: payload,
        formMode: mode
      });

    case UPDATE_FORM_DATA:
      return Object.assign({}, state, { formData: payload });

    case GET:
      return Object.assign({}, state, {
        responseData: payload.res,
        loading: payload.loading
      });

    case POST:
      return Object.assign({}, state, {
        responseData: payload.res,
        loading: payload.loading
      });

    case PUT:
      return Object.assign({}, state, {
        responseData: payload.res,
        loading: payload.loading
      });

    case PATCH:
      return Object.assign({}, state, {
        responseData: payload.res,
        loading: payload.loading
      });

    case DELETE:
      return Object.assign({}, state, {
        responseData: payload.res,
        loading: payload.loading
      });

    case ERROR:
      return Object.assign({}, state, {
        error: payload.error,
        loading: payload.loading
      });

    default:
      return initialState;
  }
}
