var express = require('express');
var db = require('./../utils/db.js')
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/bubbling.jsp', (req, res) => {
  let sql = 'select u_logo,u_nickname,u_introduction from usertab  ORDER BY u_id DESC '
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


// 发送冒泡
router.get('/bubblingSendmp.jsp', (req, res) => {
  let inp = req.query.textarea
  console.log(inp)
  let sqlarr = []
  sqlarr.push(inp)
  let sql = 'INSERT INTO usertab (u_nickname,u_logo,u_introduction) VALUES("我是你的爸爸4","images/indeximgs/1.jpg",?)'
  db.connection(sql, sqlarr, (err, data) => {
    if (!err) {
      res.json({
        code: 0,
        msg: 'ok',
        data
      })
    } else {
      res.json({
        code: 1,
        msg: 'err'
      })
    }
  })
})

module.exports = router;