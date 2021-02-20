const axios = require('axios');

const externalApiInvoker = async (apiName, username) => {

    let url = ''
    //ig api invokation
    if (apiName == "instagram") {
        url = `https://www.instagram.com/${username}/?__a=1`;

        try {
            let res = await axios({
              method: 'get',
              url: url
            });
            let data = res.data.graphql.user.edge_followed_by.count;
            return data;
          } catch (error) {     
              console.log(error)   
            return 'err';
          }
    }
    //twitter api invokation
    if (apiName === 'twitter') {
        url = `https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=${username}`;
        try {
            let res = await axios({
              method: 'get',
              url: url
            });
            let data = res.data[0].followers_count;
            return data;
          } catch (error) {     
              console.log(error)   
            return 'err';
          }
    }
}

module.exports = {
    invokeAPI: externalApiInvoker
}