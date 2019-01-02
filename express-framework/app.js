const express = require('express');
const app = express();

app.listen(3000);

// app.get('/', (req, res) => {
//   res.send('Hello world!');
// });

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

const Joi = require('joi');

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


// Validaidation pt 2 //
const arrayString = ['banana', 'bacon', 'cheese'];
const arrayObjects = [{example: 'example1'}, {example: 'example2'}, {example: 'example3'}];
const userInput = {
  personalInfo: {
    streetAddress: '12312312334',
    city: 'Recife',
    state: 'PE'
  },
  preferences: arrayObjects
};

const personalInfoSchema = Joi.object().keys({
  streetAddress: Joi.string().trim().required(),
  city: Joi.string().trim().required(),
  state: Joi.string().trim().length(2).required()
});

const preferencesSchema = Joi.array().items(Joi.object().keys({
  example: Joi.string().required()
}));

const userInputschema = Joi.object().keys({
  personalInfo: personalInfoSchema,
  preferences: preferencesSchema
});

Joi.validate(userInput, userInputschema, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});

// Middleware //
app.use('/middleware', (req, res, next) => {
  req.loggedIn = false
  next();
});

// EJS //
app.set('view engine', 'ejs');

app.get('/:userQuery', (req, res) => {
  res.render('index', {
    data: {
      userQuery: req.params.userQuery,
      searchResults: ['book1', 'book3', 'book2'],
      loggedIn: req.loggedIn,
      username: "Pintor"
    }
  });
});
