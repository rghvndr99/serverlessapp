'use strict';

module.exports.todo = async (event,context, callback) => {
  const res= {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'to Do',
        input: event,
      },
      null,
      2
    ),
  };
  callback(null,res, ); 

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.todos = async (event,context, callback) => {
  const res= {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'toDos',
        input: event,
      },
      null,
      2
    ),
  };
  callback(null,res, ); 

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

