var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users cool. */
router.get('/cool', function(req, res, next) {
 // res.render('index', { title: 'you are so cool' });
 res.send('you are so cool');
});

/* GET users cool. */
router.get('/cool/beach', function(req, res, next) {
  // res.render('index', { title: 'praia!' });
  res.send('Lets go to the beach');
 });

 /* GET users cool. */
router.get('/ifc', function(req, res, next) {
  // res.render('index', { title: 'Bem vindo!' });
  res.send('Bem vindo ao IFC, mini querido');
 });

module.exports = router;
