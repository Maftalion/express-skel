const express = require('express')
const router = express.Router();
const controller = require('./controller.js');

//Set up route paths
router.route('/')
  .get(controller.getIndex)
  .post(/**/)


module.exports = router;
