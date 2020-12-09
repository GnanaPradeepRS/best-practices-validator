const syntaxAPI = require('../api/syntax-validation')
const controller = require('../controllers/controller');

const governModelValidator = (app, payload) => {

    app.post('/validate', async (req, res) => {
        let model = req.body;

        let payload = {
            "entityModel": {
                "type": "businessRule",
                "data": {
                    "attributes": {
                        "definition": {
                            "values": [
                                {
                                    "value": ""
                                }
                            ]
                        },
                        "ruleType": {
                            "values": [
                                {
                                    "value": ""
                                }
                            ]
                        }
                    }
                }
            }
        }

        for (let i = 0; i < model.length; i++) {
            payload.entityModel.data.attributes.definition.values[0]['value'] = model[i].DEFINITION;
            payload.entityModel.data.attributes.ruleType.values[0]['value'] = model[i].TYPE;

            let keys = Object.keys(controller(model[i].DEFINITION))
            let values = Object.values(controller(model[i].DEFINITION))

            let str = '';
            let warn = ''
            for (let i = 0; i < keys.length; i++) {
                values[i].warnings.forEach((element , index) => {
                    str += `${index+1}. `+ element  + '\n'
                });
                warn += `${keys[i]} : \n ${str}` + '\n'            
            }
            model[i]['WARNINGS'] = warn
            let resp = await syntaxAPI.validate(JSON.stringify(payload))

            model[i]['MESSAGE'] = resp.response.entityModels[0].data.attributes.definition.properties.messages[0].messageType;
            model[i]['MESSAGE CODE'] = resp.response.entityModels[0].data.attributes.definition.properties.messages[0].messageCode;
            model[i]['ERROR MESSAGE'] = resp.response.entityModels[0].data.attributes.definition.properties.messages[0].message;

        }
        res.send(model)
    })
}

module.exports = {
    validate: governModelValidator
}