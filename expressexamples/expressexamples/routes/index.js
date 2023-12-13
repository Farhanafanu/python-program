var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const values=["aslam","farhana","naina","zayu"]
  const person={name:'aslam',comments:{comment:'this is sample comment',date:"05-06-2023"}}
  const persons={name:'fanu',admin:false}

  res.render('index', {persons,person});
});

module.exports = router;
