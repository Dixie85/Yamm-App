require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const recipeRoutes = require('./routes/recipeRoutes');
var cors = require('cors')

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());
app.use(cors())

app.use('/api', recipeRoutes);

app.listen(PORT, HOST, () => {
  console.log(`Server is running on port: http://${HOST}:${PORT}/ `);
});
