var express = require('express');
var router = express.Router();
const db = require('./../utils/db.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// 生成导航栏
router.get('/getnav',(req,res)=>{
    let sql='SELECT * FROM styletab WHERE style_id IN (SELECT style_id FROM articletab)'
    db.connection(sql,[],(err,data)=>{
      // res.json(data)
      if(!err){
        if(data.length>0){
          res.json({code:0,msg:'ok',data})
        }else{
          res.json({code:2,msg:'未查询到数据'})
        }
      }else{
        res.json({code:1,msg:'查询出错'})
      }
    })
})

// 生成主内容数据
router.get('/getgrid',(req,res)=>{
  let sql='select * from styletab'
  db.connection(sql,[],(err,data)=>{
    // res.json(data)
    if(!err){
      if(data.length>0){
        res.json({code:0,msg:'ok',data})
      }else{
        res.json({code:2,msg:'未查询到数据'})
      }
    }else{
      res.json({code:1,msg:'查询出错'})
    }
  })
})
module.exports = router;