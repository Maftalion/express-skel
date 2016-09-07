const express = require('express');
const router = require('./router');
const app = express();

//Create static files
app.use(express.static(__dirname)); // --> point to Client Files

//Set Port
const port = (process.env.PORT || 8080);

//Initialize Router
app.use(router);

//Listen on port
app.listen(port, () => console.log(`Listening on port ${port}`));
