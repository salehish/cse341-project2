const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Project 2 API',
    description: 'Students and Courses API'
  },
  host: 'cse341-project2-hnxa.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const routes = ['./server.js'];

swaggerAutogen(outputFile, routes, doc);