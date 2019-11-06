const rp = require('request-promise');

module.exports = {
    async openSlackModal(trigger_id, body) {
      const accessToken = 'xoxp-95775465747-523056176851-810793712706-ab49692a49706100b03f196b3cc1fe4d'
      const options = {
            method: 'POST',
            uri: 'https://slack.com/api/views.open',
            headers: {
                'User-Agent': 'Request-Promise',
                'Content-type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: body,
            json: true // Automatically stringifies the body to JSON
        };
         
        await rp(options)
            .then(function (data) {
                // POST succeeded...
                console.log(data);
            })
            .catch(function (err) {
                // POST failed...
                console.log(err);
            });
    }
}
