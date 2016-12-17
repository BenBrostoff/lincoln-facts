process.env.DEBUG = 'actions-on-google:*';

const Assistant = require('actions-on-google');
const express = require('express');
const bodyParser = require('body-parser');
const { getActionMap } = require('./actions');

const app = express();
app.set('port', (process.env.PORT || 8080));
app.use(bodyParser.json({ type: 'application/json' }));

app.post('/', (request, response) => {
  const assistant = new Assistant.ApiAiAssistant({ request, response });
  const actionMap = getActionMap();

  assistant.handleRequest(actionMap);
});

app.listen(app.get('port'));
