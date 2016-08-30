const app = require ('express')();
const rounter = require('./router');

const port = (process.env.PORT || 8080);

app.use('/', router);

app.listen(port,
  () => console.log(`Listening on port ${port}`));
