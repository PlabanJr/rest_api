/* eslint-disable no-template-curly-in-string */
export const description = {
  GET: {
    desc:
      'The HTTP GET method is used to request a resource from the server. Requests using GET method should only retrieve data (the server must not change its state).',
    url: 'https://reqbin.com/Article/HttpGet',
    important: "Click on 'GET' without any id to get all the Posts."
  },
  POST: {
    desc:
      'The HTTP POST method is used to create or add a resource on the server. Typically, the POST method adds new resources to the server, while the PUT method replaces an existing resource on the server.',
    url: 'https://reqbin.com/Article/HttpPost',
    important:
      "the resource will not be really created on the server but it will be faked as if. In other words, if you try to access a post using 101 as an id, you'll get a 404 error."
  },
  PUT: {
    desc:
      'The HTTP PUT method is used to update an existing resource on the server. Typically, the PUT method replaces an existing resource on the server, while the POST method creates or adds a resource on the server.',
    url: 'https://reqbin.com/Article/HttpPut',
    important:
      'the resource will not be really updated on the server but it will be faked as if.'
  },
  PATCH: {
    desc:
      'The HTTP PATCH method is used to make partial changes to an existing resource. Typically, the PATCH method applies partial modifications to a resource, while the PUT method performs a complete replacement of the resource.',
    url: 'https://reqbin.com/Article/HttpPatch',
    important:
      'the resource will not be really updated on the server but it will be faked as if.'
  },
  DELETE: {
    desc:
      'The HTTP DELETE method is used to delete a resource from the server. The DELETE method is defined as idempotent, which means that multiple identical DELETE requests should have the same effect as a single request.',
    url: 'https://reqbin.com/Article/HttpDelete',
    important:
      'the resource will not be really deleted on the server but it will be faked as if.'
  },
  ABOUT: {
    desc:
      'This is a simple implementation of HTTP Methods using React & Redux-Thunk. It uses JSONPlaceholder, a fake online Rest API.'
  }
};
