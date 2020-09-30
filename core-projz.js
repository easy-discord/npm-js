const https = require('https');
const http = require('http');
var querystring = require('querystring');
var request = require('request');

module.exports = {
    get: function(subject) {
        if(subject == 'regions'){
            const options = {
                url: 'http://api.projz.com/v1/configs/content-regions',
                headers: {
                    'rawDeviceId': '028ea1542319398d391fac834f5c9c6ad6bc3cbff533b26ab5d4cbc0f444fab037d8b9dcd4b297fc31',
                    'appType': 'en-US',
                    'appVersion': '1.0.3',
                    'osType': '2',
                    'deviceType': '1',
                    'countryCode': 'PT',
                    'reqTime': '1601325862',
                    'Accept-Language': 'en-US',
                    'Content-Type': 'application/json; charset=utf-8',
                    'User-Agent': 'com.projz.z.android/1.0.3-2713 (Linux; U; Android 9; FIG-LX1; Build/FIG-LX1 9.1.0.175(C4)',
                    'Host': 'api.projz.com',
                    'Accept-Encoding': 'gzip',
                    'Connection': 'Keep-Alive'
                    }
                };
            
              function callback(error, response, body) {
                if (!error && response.statusCode == 200) {
                  const info = JSON.parse(body);
                  console.log(info);
                }
              }
              request(options, callback);
        }
      },
    hw: function(subject) {
    console.log('Input: ' + subject);
    }
  };