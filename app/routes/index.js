var express = require('express');
var router = express.Router();
var personController = require('../controllers/personController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET people. */
router.get('/api/collection', personController.getPeople);


/* POST person. */
router.post('/api/collection', personController.postPerson);


module.exports = router;
