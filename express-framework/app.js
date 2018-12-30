const express = require('express');
const app = express();

app.listen(3000);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/example', (req, res) => {
  res.send('Hello example!');
});

app.get('/example/:name/:age', (req, res) => {
  console.log(req.params); // route parameters (data we need)
  console.log(req.query); // query parameters (optional data)
  const { name, age } = req.params;
  res.send(name + " : " + age);
})
