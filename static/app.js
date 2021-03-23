const express = require('express');
const nunjucks = require('nunjucks')
const path = require('path');

const app = express();
const PORT = 3000;

nunjucks.configure('/static/', {
  autoescape: true,
  express: app
});

app.get('/', (req, res)=> {
  res.render(path.join(__dirname +'/index.html'));
})

app.listen(PORT, () => {
  console.log(`Starting server on port ${PORT}`)
}) 
