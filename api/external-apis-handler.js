const externalApiInvoker = require("../services/external-api-invoker");

const externalAPIHandler = (app) => {

    app.post('/externalapihandler/socialhandle', async(req , res) => {

        let response = {
            twitter : 'err',
            instagram : 'err'
        }
        let twitterRes = '';
        let instaRes = '';

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
        
        if (typeof twitterRes === 'number') {
            response.twitter = twitterRes;
        }
        if (typeof instaRes === 'number') {
            response.instagram = instaRes;
        }
        res.end(JSON.stringify(response));
    });
}

module.exports = {
    invokeAPI : externalAPIHandler
}