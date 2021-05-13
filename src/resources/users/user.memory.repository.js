const fs = require('fs');

const filePath = 'src/resources/data/user.json';

const getAll = async () =>
  // TODO: mock implementation. should be replaced during task development
  // [];

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;

    return JSON.parse(data);
  });
module.exports = { getAll };
