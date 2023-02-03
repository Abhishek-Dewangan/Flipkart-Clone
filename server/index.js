const express = require('express');
const cors = require('cors');
require('dotenv').config();
const router = require('./routes/router');
const connection = require('./database/connection');
const {FlipkartScraper} = require('flipkart-scraper');
// Connecting to database
connection();

const app = express();
const port = process.env.PORT || 8080;

// App uses
app.use(express.json());
app.use(cors());
app.use('/api', router);

app.get('/', (req, res) => {
// res.send('Hello World');
const scraper = new FlipkartScraper(
  '<Affiliate-Id-Here>',
  '<Affiliate-Token-Here>'
);
scraper.on('data', (data) => {
  res.send(data);
  // console.log('hello')
});
scraper.start();
});

app.listen(port, () =>
  console.log(`Server is running on http://localhost:8080`)
);
