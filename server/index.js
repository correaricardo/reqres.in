// General imports
const api_helper = require('./api/helper')
const express = require('express');
const app = express();

// Settings
app.set('appName', 'Rest api from reqres.in')
app.set('port', 5000)

// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Router
app.get('/users', (req, res) => {
    let page = req.query.page;
    api_helper.apiCall(`https://reqres.in/api/users?page=${page}`)
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

// Server
app.listen(app.get('port'), () => {
    console.log(app.get('appName'))
    console.log(`Server on port ${app.get('port')}`);
});
