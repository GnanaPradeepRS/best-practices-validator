const express = require('express')
const bodyParser = require('body-parser');
const bestPracticesValidation = require('./api/best-practices-validation');
const governModelValidator = require('./api/govern-model-validator');
const externalAPIHandler = require('./api/external-apis-handler');

const cors = require('cors');

// var corsOptions = {
//     origin: 'http://localhost:8080',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

const app = express()

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: true}));
bestPracticesValidation.validate(app);
governModelValidator.validate(app);
externalAPIHandler.invokeAPI(app);

let port = process.env.PORT || 7071;
app.listen(port, () => console.log("app running on port : ", port))