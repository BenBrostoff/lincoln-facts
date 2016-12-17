const RESPONSES = require('./responses.constants');

const getRand = arr => arr[Math.floor(Math.random() * arr.length)];

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

module.exports = {
  getActionMap,
};
