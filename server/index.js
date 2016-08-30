const express = require('express');
const router = require('./router');
const app = express();

// app.use(express.static(__dirname));

const port = (process.env.PORT || 8080);

app.use(router);

app.listen(port,
  () => console.log(`Listening on port ${port}`));
