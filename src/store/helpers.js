import axios from 'axios';

export const HttpGET = id => {
  return new Promise((resolve, reject) => {
    const url = id
      ? `https://jsonplaceholder.typicode.com/posts/${id}`
      : `https://jsonplaceholder.typicode.com/posts`;

    axios
      .get(url)
      .then(response => resolve(response))
      .catch(e => reject(e));
  });
};

export const HttpPOST = formData => {
  return new Promise((resolve, reject) => {
    const url = `https://jsonplaceholder.typicode.com/posts`;

    axios
      .post(url, formData)
      .then(response => resolve(response))
      .catch(e => reject(e));
  });
};

export const HttpPUT = formData => {
  return new Promise((resolve, reject) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${formData.id}`;

    axios
      .put(url, formData)
      .then(response => resolve(response))
      .catch(e => reject(e));
  });
};

export const HttpPATCH = formData => {
  return new Promise((resolve, reject) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${formData.id}`;

    axios
      .patch(url, formData)
      .then(response => resolve(response))
      .catch(e => reject(e));
  });
};

export const HttpDELETE = id => {
  return new Promise((resolve, reject) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    axios
      .delete(url)
      .then(response => resolve(response))
      .catch(e => reject(e));
  });
};
