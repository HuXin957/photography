function d(){
    $.ajax({
        type:'get',
        url:'specialInto//specialInto.jsp',
        success(res){
            console.log(res)
            if(res.code==0){
                var userInfo=JSON.stringify(res.data)
                userInfo = JSON.parse(userInfo)
                var str=''
            userInfo.forEach(element => {
                str+=`
                <li>
                <div class="col-md-12 specialinto_01_right_01_img">
                    <a href="#">
                        <img src="${element.commimg_url}">
                    </a>
                </div>
                <div class="col-md-12 specialinto_01_right_01_title">
                    <p>
                        <a href="">${element.author_name}</a>
                        <span class="ml-3">3个月前</span>
                    </p>
                    <p class="col-md-11">
                        <a href="#">${element.commcont}</a>
                    </p>
                </div>
            </li>
                `
            });
            document.querySelector('.specialinto_ul').innerHTML=str
            }
        }
    })
}
d()