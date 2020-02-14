var express = require('express');


var db = require('./../utils/db.js')

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/special.jsp', (req, res) => {
  let sql = 'SELECT tempautoincr,author_id, thematic_name,thematic_introduction,topisimg FROM   articletopics AS a ,thematictab AS b WHERE a.author_id=b.thematic_id '
  db.connection(sql, [], (err, data) => {
    if (!err) {
      res.json({
        code: 0,
        msg: 'ok',
        data
      })
    } else {
      res.json({
        code: 1,
        msg: '查询有误'
      })
    }
  })
})

module.exports = router;