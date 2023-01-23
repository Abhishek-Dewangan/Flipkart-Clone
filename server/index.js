const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () =>
  console.log(`Server is running on http://localhost:8080`)
);
