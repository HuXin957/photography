var express = require('express');
var router = express.Router();
const db=require('./../utils/db.js')

router.get('/getshop.jsp',(req,res)=>{
    let sql='select * from commoditytab'
    db.connection(sql,[],(err,data)=>{
        if(!err){
            res.json({
                code:0,
                msg:'请求成功！',
                data:data
            })
        }else{
            res.json({
                code:1,
                msg:'请求失败！',
            })
        }
    })
})

router.get('/getshopinfo.jsp',(req,res)=>{
    let id_num=req.query.id_num;
    let sql='select * from commoditytab where commodity_id=?'
    db.connection(sql,id_num,(err,data)=>{
        if(!err){
            res.json({
                code:0,
                msg:'请求成功',
                data:data
            })
        }else{
            res.json({
                code:1,
                msg:'请求失败',
            })
        }
    })
})

// 加入购物车
router.post('/getorder.jsp',(req,res)=>{
    let orderid=req.body.orderid;
    let orderimg=req.body.orderimg;
    let orderprice=req.body.orderprice;
    let ordertitle=req.body.ordertitle;
    let ordercount=req.body.ordercount;

    let sqlsel='select * from ordertab where u_id=?'
    new Promise((resolve,reject)=>{
        db.connection(sqlsel,[orderid],(err,data)=>{
            if(!err){
                if(data.length==0){
                   resolve(data)
                }else{
                    res.json({
                        code:1,
                        msg:'未查询到数据'
                    })
                }
               
            }else{
               reject(err)
            }
        })
    }).then(result=>{
        let sql=`insert into ordertab (u_id,order_num,order_quantity,commodity_id,order_status) values (?,?,?,?,?)`;
        let strArr=[orderid,orderimg,orderprice,ordertitle,ordercount]
        db.connection(sql,strArr,(err,data)=>{
            if(!err){
                res.json({
                    code:0,
                    msg:'成功',
                    data
                })
            }else{
                res.json({
                    code:1,
                    msg:'失败'
                })
            }
        })
    }).catch(err=>{
        res.json({
            code:1,
            msg:'查询出错'
        })
    })
})

// 订单界面渲染
router.get('/getmyorder.jsp',(req,res)=>{
    let sql='select * from ordertab';
    db.connection(sql,[],(err,data)=>{
        if(!err){
            res.json({
                code:0,
                msg:'请求成功',
                data
            })
        }else{
            res.json({
                code:1,
                msg:'请求失败'
            })
        }
    })
})
// 删除功能
router.post('/getdel.jsp',(req,res)=>{
    let sql='DELETE FROM ordertab where u_id=?';
    let user_id=req.body.user_id;
    db.connection(sql,[user_id],(err,data)=>{
        if(!err){
            res.json({
                code:0,
                msg:'请求成功',
            })
        }else{
            res.json({
                code:1,
                msg:'请求失败'
            })
        }
    })
})

module.exports = router;