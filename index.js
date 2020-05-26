const fetch = require('node-fetch');
var express = require('express');

var app = express();

var port = 5000;

app.listen(port, () => console.log(`Listening on ${port}`));

var REDMINE_API_KEY = "168c24c0b281137336e02714eff228e0f6119d43";

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
});


app.get('/latest_issues', (req, res) => {
    let request = require('request');
    let options = {
        'url': `https://${REDMINE_API_KEY}:X@redmine.ors.it/projects.json`
    };

    try {
        request(options, function (err, resp) {
            if (err) throw new Error(err);
            res.json(resp.body);
        })
    }
    catch (e) {
        console.log(e);
    }
});

app.get("/json_api", (req, res) => {
    let request = require('request');
    let options = {
        'method': 'GET',
        'headers' : {
            'Access-Control-Allow-Origin' : '*'
        },
        'url': 'https://jsonplaceholder.typicode.com/todos/1'
    };
    try {
        request(options, function (error, response) {
            if (error) throw new Error(error);
            res.json(response.body);
        });
    }
    catch (e) {
        console.server(e);
    }
});

app.get("/campaigns", (req, res) => {
    let request = require('request');
    let options = {
        'method': 'GET',
        'url': 'http://squashtm:8080/squash/api/rest/latest/campaigns/'
    };
    try {
        request(options, function (error, response) {
            if (error) throw new Error(error);
            res.json(response.body);
        });
    }
    catch (e) {
        console.server(e);
    }
});


app.get('/placeholder', (req, res) => {
    !async function(){
        let data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.blob())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.error(error);
            });
        
        console.log(data);
        }();
})


app.get('https://jsonplaceholder.typicode.com/todos/1', (req, res) => {
    res.send('https://jsonplaceholder.typicode.com/todos/1')
})

