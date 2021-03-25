const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

const data = require('./static/testData');
console.log(data);
const app = express();
const PORT = 3000;

nunjucks.configure('static', {
  autoescape: true,
  express: app
});

app.get('/', (req, res) => {
  return res.render(path.resolve(__dirname + '/static/index.html'), data);
});
app.use(express.static('static'));

app.listen(PORT, () => {
  console.log(`Starting server on port ${PORT}`);
});
