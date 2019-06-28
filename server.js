const express = require('express')
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const app = express()
const port = 3000

// Use Body Parser
// const jsonParser = bodyParser.json()
// const urlencodedParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!
app.use( expressValidator());

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

require('./controllers/plants.js')(app)
require('./data/plantparty-db');

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app