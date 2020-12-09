const axios = require('axios');

const validateSyntax = async (body) => {
    let config = {
        method: 'post',
        url: 'https://rspactools.riversand.com/api/modelgovernservice/validate',
        headers: {
            'x-rdp-version': '8.1',
            'x-rdp-clientId': 'rdpclient',
            'x-rdp-tenantId': 'rspactools',
            'x-rdp-ownershipData': 'Nike',
            'x-rdp-userId': 'gnana.gundluu@riversand.com',
            'x-rdp-userName': 'Maryj',
            'x-rdp-firstName': 'Mary',
            'x-rdp-lastName': 'Jane',
            'x-rdp-userEmail': 'mary.jane@riversand.com',
            'x-rdp-userRoles': '["systemadmin"]',
            'Content-Type': 'application/json',
            'auth-client-id': ' 40PS7RT46qOgEMB075q1atjG64WQ7KbS',
            'auth-client-secret': ' KDK9CU1RppnAJgwNyxN2LDzeIQBeupEK9wutNYX0rTR4GDtSM1dY7dlezCoHy5Va'
        },
        data: body
    };

    // const request = 

    return new Promise(function (resolve, reject) {
        axios(config)
        .then(function (response) {
            // console.log(response.data)
            resolve(response.data);
        })
        .catch(function (error) {
            reject(error);
        });
    });
}

module.exports = {
    validate: validateSyntax
}
