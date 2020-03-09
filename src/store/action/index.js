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
} from './types';
import { HttpGET, HttpPOST, HttpPUT, HttpPATCH, HttpDELETE } from '../helpers';

export const updateMethod = method => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_CURRENT_METHOD,
      payload: method
    });
  };
};

export const updateFormData = formData => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_FORM_DATA,
      payload: formData
    });
  };
};

export const httpGet = id => {
  return (dispatch, getState) => {
    dispatch({
      type: LOADING,
      payload: true
    });

    HttpGET(id)
      .then(res => {
        dispatch({
          type: GET,
          payload: {
            res: res.data,
            loading: false
          }
        });
      })
      .catch(e => {
        dispatch({
          type: ERROR,
          payload: {
            error: e,
            loading: false
          }
        });
      });
  };
};

export const httpPost = formData => {
  return (dispatch, getState) => {
    dispatch({
      type: LOADING,
      payload: true
    });

    HttpPOST(formData)
      .then(res => {
        dispatch({
          type: POST,
          payload: {
            res: res.data,
            loading: false
          }
        });
      })
      .catch(e => {
        dispatch({
          type: ERROR,
          payload: {
            error: e,
            loading: false
          }
        });
      });
  };
};

export const httpPut = formData => {
  return (dispatch, getState) => {
    dispatch({
      type: LOADING,
      payload: true
    });

    HttpPUT(formData)
      .then(res => {
        dispatch({
          type: PUT,
          payload: {
            res: res.data,
            loading: false
          }
        });
      })
      .catch(e => {
        dispatch({
          type: ERROR,
          payload: {
            error: e,
            loading: false
          }
        });
      });
  };
};

export const httpPatch = formData => {
  return (dispatch, getState) => {
    dispatch({
      type: LOADING,
      payload: true
    });

    HttpPATCH(formData)
      .then(res => {
        dispatch({
          type: PATCH,
          payload: {
            res: res.data,
            loading: false
          }
        });
      })
      .catch(e => {
        dispatch({
          type: ERROR,
          payload: {
            error: e,
            loading: false
          }
        });
      });
  };
};

export const httpDelete = id => {
  return (dispatch, getState) => {
    dispatch({
      type: LOADING,
      payload: true
    });

    HttpDELETE(id)
      .then(res => {
        dispatch({
          type: DELETE,
          payload: {
            res: res.data,
            loading: false
          }
        });
      })
      .catch(e => {
        dispatch({
          type: ERROR,
          payload: {
            error: e,
            loading: false
          }
        });
      });
  };
};
