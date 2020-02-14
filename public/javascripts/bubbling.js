// 用户块
function bubbling_user() {
    $.ajax({
        type: 'get',
        url: 'bubbling/bubbling.jsp',
        success(res) {
            if (res.code == 0) {
                var userInfo = JSON.stringify(res.data)
                userInfo = JSON.parse(userInfo)
                console.log(userInfo)
                var str = ''
                userInfo.forEach(element => {
                    str += `
                <!-- 开始-->
                <div class="col-md-12 col-sm-12 cont1 mb-3 ">
                <div class="col-md-12 cont_one d-flex  justify-content-between ">
                    <div class='head col-md-3'>
                        <ul class='head_01  d-flex  justify-content-between form-inline'>
                            <li>
                                <img src="${element.u_logo}">
                            </li>
                            <li>
                                <a href="#">${element.u_nickname}</a>
                            </li>
                            <li>
                                <a href="#">#孤独#</a>
                            </li>
                            <li>
                                <span>3小时前</span>
                            </li>
                        </ul>
                    </div>
                    <span class=" sp">
                        <img src="images/bubbling/yuandiancaidan.png">
                    </span>
    
                </div>
                <div class="col-md-12 cont_two">
                    <p>${element.u_introduction}</p>
         
               
    
                </div>
                <div class="col-md-12 cont_three">
                    <span>
                        <img src="images/bubbling/xiaoxi.png">
                    </span>
                    <span>1</span>
                    <span>
                        <img src="images/bubbling/xihuan.png">
                    </span>
                    <span>0</span>
    
                </div>
            </div>
            <!-- 结束-->
                `
                });
                document.querySelector('.xr').innerHTML = str

            }
        }

    })

}
//  标签块
bubbling_user()
//   点击获取表情
let arrbq=[]
function obtainbq(){
    $('.bq').on('click', '.mouh', function () {
        var key_data = $(this).attr('key-data')
        $('#textarea').append(key_data + '  ')
        arrbq.special(this)
        console.log(this,arrbq)
    })
}
obtainbq()
//点击表情 显示表情框
$('.expression').on('click', function () {
    $('.pos-a').toggle(300)
})


// 点击获取冒泡里面的文本
$('.btn').on('click', function () {
    fbmp()

})
//发表冒泡
function fbmp() {
    $.ajax({
        type: 'get',
        url: 'bubbling/bubblingSendmp.jsp',
        data: {
            textarea: $('.textarea').val()
        },
        success(res) {
            console.log(res)

        }
    })
}