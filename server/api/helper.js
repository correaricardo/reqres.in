const request = require('request')

// Simple promesa encargada de gestionar la petición a la api
module.exports = {
    apiCall : function(url){
        return new Promise((resolve, reject) => {
            request(url, { json: true }, (err, res, body) => {
              if (err) reject(err)
              resolve(body)
            });
        })
    }
}