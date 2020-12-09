const express = require('express')
const bodyParser = require('body-parser');
const bestPracticesValidation = require('./api/best-practices-validation');
const governModelValidator = require('./api/govern-model-validator');

const app = express()
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: true}));
bestPracticesValidation.validate(app);
governModelValidator.validate(app);

let port = process.env.PORT || 7071;
app.listen(port, () => console.log("app running on port : ", port))