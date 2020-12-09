const controller = require('../controllers/controller');

const bestPracticesValidate = (app) => {
    app.post('/bestPractices/warnings', (req, res) => {
        let request = JSON.parse(JSON.stringify(req.body.params.businessRules));
        let requestKeys = Object.keys(request);
        let requestValues = Object.values(request);
        let errorFlag = 0;
        let obj = {
            businessRules : {}
        }
    
        for (let i = 0; i < requestKeys.length; i++) {
            let resp = controller(requestValues[i]);
            let responseBR = {}
            if (Object.keys(resp).length > 0) {
                
                responseBR = {
                    errorKeywords : resp,
                    status : 'error'
                } 
                errorFlag++;
                obj.businessRules[requestKeys[i]] = responseBR
            }
        }
    
        if (!(errorFlag > 0)) {
            obj = {
                message : 'The Business Rules are following the Best practices recommended',
                status : 'success'
            }
        }
    
        let response = obj
    
        res.send({ response: response })
    });

    app.post('/bestPractices/all', (req, res) => {
        let request = JSON.parse(JSON.stringify(req.body.params.businessRules));
        let requestKeys = Object.keys(request);
        let requestValues = Object.values(request);
        let errorFlag = 0;
        let obj = {
            businessRules : {}
        }
    
        for (let i = 0; i < requestKeys.length; i++) {
            let resp = controller(requestValues[i]);
            let responseBR = {}
            if (Object.keys(resp).length > 0) {
                
                responseBR = {
                    errorKeywords : resp,
                    status : 'error'
                } 
                errorFlag++;            
            }
            else{
                responseBR = {
                    message : 'This Business Rule is following the Best practices recommended',
                    status : 'success'
                }
            }
            obj.businessRules[requestKeys[i]] = responseBR
        }
    
        let response = obj
    
        res.send({ response: response })
    });

}

module.exports = {
    validate : bestPracticesValidate
}