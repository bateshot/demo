var express = require('express');
var router = express.Router();
var personController = require('../controllers/personController.js');
var colorsController = require('../controllers/colorsController.js')



/* GET people. */
router.get('/api/collection', personController.getPeople);


/* POST person. */
router.post('/api/collection', personController.postPerson);


/* GET colors. */
router.get('/api/colors', colorsController.getColors);

/* GET home page. */
router.get('*', function(req, res, next) {
  res.redirect('/index.html');
});


module.exports = router;
