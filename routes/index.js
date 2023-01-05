var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/case', function(req, res, next) {
  res.render("case")
});

router.get('/journal', function(req, res, next) {
  res.render("journal")
});
router.get('/blog', function(req, res, next) {
  res.render("blog")
});
router.get('/about', function(req, res, next) {
  res.render("about")
});
router.get('/contact', function(req, res, next) {
  res.render("contact")
});

module.exports = router;
