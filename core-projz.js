const https = require('https');

module.exports = {
    get: function(subject) {
        if(subject == 'regions'){
            https.get('https://api.projz.com/v1/configs/content-regions', (resp) => {
                let data = '';

               
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                resp.on('end', () => {
                    console.log(JSON.parse(data).explanation);
                });

                }).on("error", (err) => {
                console.log("Error: " + err.message);
                });
        }
      },
    hw: function(subject) {
    console.log('Input: ' + subject);
    }
  };