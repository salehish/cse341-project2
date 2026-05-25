require('dotenv').config();

const express = require('express');

const connectDB = require('./database/connect');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/', require('./routes'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('Project 2 API running');
});

connectDB();

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});