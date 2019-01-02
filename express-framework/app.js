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

const path = require('path');
app.use('/public', express.static(path.join(__dirname, 'static')));

app.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});


// Http Post Request with Express and Body Parser Module //
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/', (req, res) => {

  const schema = Joi.object().keys({
    email: Joi.string().trim().email().required(),
    password: Joi.string().min(5).max(10).required()
  });

  Joi.validate(req.body, schema, (err, result) => {
    if (err) {
      console.log(err);
      res.send('an error has occured');
    } else {
      res.send('successfully posted data')
    }
    console.log(result);
  });
  // database work here
  // res.send('successfully posted data');
  // res.json({ success: true });
});

const Joi = require('joi');
