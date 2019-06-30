require('dotenv').config();
const express = require('express')
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const methodOverride = require('method-override')
const app = express()
const port = 3000

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!
app.use( expressValidator());

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(methodOverride('_method'))

app.use(cookieParser())
require('./controllers/plants.js')(app);
require('./controllers/auth.js')(app);
require('./data/plantparty-db');

var checkAuth = (req, res, next) => {
  console.log("Checking authentication");
  if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
    req.user = null;
  } else {
    var token = req.cookies.nToken;
    var decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
  }

  next();
};
app.use(checkAuth);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app