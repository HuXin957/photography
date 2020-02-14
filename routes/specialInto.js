var express = require('express');


var db = require('./../utils/db.js')

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
router.get('/specialInto.jsp', (req, res) => {
    let sql = ' SELECT c.commodity_id,  b.tempautoincr , a.author_id, a.author_name,c.commimg_url,c.commcont FROM articletopics AS a ,thematictab AS b ,commimgtab AS c WHERE c.commodity_id=1 AND b.tempautoincr=c.commodity_id  AND  b.thematic_id=a.author_id'
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