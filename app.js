'use strict';

// Enable actions client library debugging
process.env.DEBUG = 'actions-on-google:*';

const Assistant = require('actions-on-google');
const express = require('express');
const bodyParser = require('body-parser');

const getRand = (arr) => arr[Math.floor(Math.random() * arr.length)];

const RESPONSES = require('./responses.constants');

const app = express();
app.set('port', (process.env.PORT || 8080));
app.use(bodyParser.json({type: 'application/json'}));

app.post('/', function (request, response) {
  console.log('headers: ' + JSON.stringify(request.headers));
  console.log('body: ' + JSON.stringify(request.body));

  const assistant = new Assistant.ApiAiAssistant({request, response});
  const actionMap = new Map();
  Object.keys(RESPONSES).forEach((k) => {
    const res = RESPONSES[k];
    if (res.type === 'single') {
      actionMap.set(k, (a) => a.tell(res.content));
    }

    if (res.type === 'multi') {
      actionMap.set(k, (a) => a.tell(getRand(res.content)));
    }
  });

  assistant.handleRequest(actionMap);
  console.log('Success.')
});

// Start the server
var server = app.listen(app.get('port'), function () {
  console.log('App listening on port %s', server.address().port);
  console.log('Press Ctrl+C to quit.');
});