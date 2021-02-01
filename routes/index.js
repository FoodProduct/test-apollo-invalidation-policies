var express = require('express');
/**
 * NB: The following line causes an Error because the cache/* subdirectories are not transpiled into cjs
 * and the `import` syntax throws an error in a Node environment
 * */
const apolloClientCacheHelpers = require('@apollo/client/cache/inmemory/helpers');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
