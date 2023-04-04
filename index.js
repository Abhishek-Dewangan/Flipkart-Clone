const express = require('express');
const cors = require('cors');
require('dotenv').config();
const router = require('./routes/router');
const connection = require('./database/connection');

// Connecting to database
connection();

const app = express();
const port = process.env.PORT || 8080;

// App uses
app.use(express.json());
app.use(cors());
app.use('/api', router);

app.get('/', async (req, res) => {
  res.send('Welcome to Flipkart');
});

app.listen(port, () =>
  console.log(`Server is running on http://localhost:8080`)
);
