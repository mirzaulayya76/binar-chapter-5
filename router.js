const express = require('express');
const router = express.Router();
const controller = require('./controller/controller');      

router.get('/', controller.home); 

router.get('/info', controller.info);

router.get('/bio', controller.bio);

router.get('/render', controller.render);

module.exports = router