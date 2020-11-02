'use strict';

const todosReadAll = require('./todos-read-all.js');

module.exports.readAll = (event, context, callback) => {
  todosReadAll(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'App planet started successfully!'
        
      },
      null,
      2
    ),
  };

};
