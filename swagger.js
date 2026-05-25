const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Project 2 API',
        description: 'Books and Authors API'
    },
    host: 'cse341-project2-hnxa.onrender.com',
    schemes: ['http']
};

const outputFile = './swagger.json';
const routes = ['./server.js'];

swaggerAutogen(outputFile, routes, doc);