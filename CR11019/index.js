const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // fixed!!!
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
