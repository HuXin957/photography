
$.ajax({
    type:'get',
    url:'special/special.jsp',
    success(res){
        console.log(res)
        if(res.code==0){
            var userInfo=JSON.stringify(res.data)
            userInfo = JSON.parse(userInfo)
            var str=''
            var length=userInfo.length
            console.log(userInfo.length)
            console.log(userInfo[0].img_introduction,userInfo[0].thematic_introduction,userInfo[0].thematic_name)
            userInfo.forEach(element => {
               console.log(element.topisimg)
               str+=`
               <!-- 开始 -->
               <div class="col-md-6 col-sm-6 col-xs-5  special_item ">
                   <div class="col-md-12 d col-sm-12 col-xs-5  special_item ">
                       <ul class="col=md-12 main_ul ">
                           <li>
                               <img src="${element.topisimg}"
                                   class="img-responsive " data_author_id="${element.tempautoincr}">
                               <span class='title'>${element.thematic_name}</span>
                           </li>
                           <li class="title_details">
                               <p>${element.thematic_introduction}</p>
                           </li>
                           <li>
                               <p>已更新
                                   <sapn>6</sapn>篇故事</p>
                           </li>
                       </ul>
                   </div>
               </div>
               <!-- 结束 -->
               `
           });
           document.querySelector('.aa').innerHTML=str
        }
    }
})


