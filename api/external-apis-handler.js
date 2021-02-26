const externalApiInvoker = require("../services/external-api-invoker");

const externalAPIHandler = (app) => {

    app.post('/externalapihandler/socialhandle', async(req , res) => {

        let response = {
            twitter : 'err Twtr',
            instagram : 'err IG',
            linkedin : 'errored Li'
        }
        let twitterRes = '';
        let instaRes = '';
        let linkedinRes = '';

        let request = JSON.parse(JSON.stringify(req.body.params));

        try{
            twitterRes = await externalApiInvoker.invokeAPI('twitter' , request.twitter.username );
        }
        catch{
            response.twitter = 'seems like no twitter details are provided';
        }

        try {
            instaRes = await externalApiInvoker.invokeAPI('instagram' , request.instagram.username , request.instagram.id);
        } catch (error) {
            response.instagram = 'seems like no instagram details are provided';
        }
        try {
            linkedinRes = await externalApiInvoker.invokeAPI('linkedin' ,  null , request.linkedin.id);
        } catch (error) {
            linkedinRes = 'errored';
        }
        
        if (typeof twitterRes === 'number') {
            response.twitter = twitterRes;
        }

        response.linkedin = linkedinRes;

        if (typeof instaRes === 'number') {
            response.instagram = instaRes;
        }

        res.end(JSON.stringify(response));
    });
}

module.exports = {
    invokeAPI : externalAPIHandler
}