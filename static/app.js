const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.get('/', (req, res)=> {
  res.render(path.join(__dirname +'/index.html'));
})

app.listen(PORT, () => {
  console.log(`Starting server on port ${PORT}`)
}) 
