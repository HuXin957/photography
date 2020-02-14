const mysql=require('mysql')
module.exports={
    config:{
        host:'172.16.13.32',
        port:3306,
        user:'baikai',
        password:'123456',
        database:'one'
    },
    connection(sql,arr,callback){
        const pool=mysql.createPool(this.config)
        pool.getConnection((err,connection)=>{
            if(!err){
                connection.query(sql,arr,callback)
                connection.release()
            }else{
                return err
            }
        })

    }
}