process.env.DEBUG = 'actions-on-google:*';

const Assistant = require('actions-on-google');
const express = require('express');
const bodyParser = require('body-parser');

const getRand = arr => arr[Math.floor(Math.random() * arr.length)];

const RESPONSES = require('./responses.constants');

const getActionMap = () => {
  const map = new Map();
  Object.keys(RESPONSES).forEach((k) => {
    const res = RESPONSES[k];
    if (res.type === 'single') {
      map.set(k, a => a.tell(res.content));
    }

    if (res.type === 'multi') {
      map.set(k, a => a.tell(getRand(res.content)));
    }
  });

  return map;
};

const app = express();
app.set('port', (process.env.PORT || 8080));
app.use(bodyParser.json({ type: 'application/json' }));

app.post('/', (request, response) => {
  const assistant = new Assistant.ApiAiAssistant({ request, response });
  const actionMap = getActionMap();

  assistant.handleRequest(actionMap);
});

app.listen(app.get('port'));
