        var city = document.querySelector('#city')
        var qu = document.querySelector('#qu')
        var province = document.querySelector('#province')

        $(cityArr).each(function (index, item) {
            $(province)[0].innerHTML += `<option value='${item.name}'>${item.name}</option>`
        })
        $(city)[0].innerHTML += `<option>${cityArr[0].city[0].name}</option>`
        var arr = $(cityArr)[0].city[0].districtAndCounty
        $(arr).each(function (index, item) {
            $(qu)[0].innerHTML += `<option value='${item}'>${item}</option>`
        })

        province.onchange = function () {
            var _this = this
            var provinceDetail = cityArr.filter(function (item, index) {//根据选择的 省的vlaue 过滤数组中对应的 项目
                if (item.name == _this.value) {
                    return item
                }
            })
            city.innerHTML = ""
            provinceDetail[0].city.forEach(function (item, index) {
                city.innerHTML += `<option  value='${item.name}'>${item.name}</option>`
            })
            qu.innerHTML = ""
            provinceDetail[0].city[0].districtAndCounty.forEach(function (item, index) {
                qu.innerHTML += `<option>${item}</option>`
            })
            addressFn();
        }

    




        city.onchange = function () {
            var plen = province.selectedIndex;  //获取点击省栏的选中下标，
            var clen = this.selectedIndex;     //获取点击自身时也就是点击城市栏返回的下标
            var save = cityArr[plen].city[clen]  //通过dir输出可以看出cityArr的结构从而获取省的子集（city）用save变量存起来

            qu.innerHTML = ""
            save.districtAndCounty.forEach(function (item, index) {//districtAndCounty是city的一个数组名，我们把city赋值给了save,遍历把区全部输出
                qu.innerHTML += `<option>${item}</option>`
                addressFn();
            })

        }
        qu.onchange=function(){
            addressFn();
        }



$('.shop_address').on('click',function(){
    $('.address_chose').css('display','block')
    $(this).css('display','none')
})
$('.cancel').on('click',function(){
    $('.address_chose').css('display','none')
    $('.shop_address').css('display','block')
})

function addressFn(){
    var myprovince=province.value;
    var mycity=city.value;
    var myqu=qu.value;
    var addresstxt=`${myprovince}  ${mycity}  ${myqu}  `
    $('.ipt_address').val(addresstxt)
}

// 全选按钮
$('.all_ipt').on('click',function(){
    var i=0;
    var all_qian=0;
    if(this.checked==true){
        $('.chose_check').each(function(){
            i++;
            this.checked='true';
        })
        $('.list_ul li').each((index,item)=>{
            var _qian = $(item).find('.qian').html();
            var num =parseInt(_qian)
            all_qian+=num
            
         })
        
        $('.sel_num').html(i)
        $('.b_right_box b').html(all_qian);
    }else{
        $('.sel_num').html("0")
        $('.b_right_box b').html('0');
        $('.chose_check').each(function(){
            this.checked=!this.checked;
        })
    }
 
    
})
//删除按钮
$('.list_ul').on('click','.del_btn',function(){ 
   this_li = $(this).parent().parent()
    delFn()
    
})


function delFn() {
   var user_id= $(this_li).attr('dataid');
    $.ajax({
        type:'post',
        url:'/shop/getdel.jsp',
        data:{
            user_id:user_id
        },
        success:function(res){
           this_li.remove()
        }
    })
}

// 商品选择按钮
 
$('.list_ul').on('click','.chose_check',function(){
    var j=0;
    var allqian=0;
    $('.all_ipt').prop('checked',false)
    $('.chose_check').each((index,item)=>{
        if(item.checked==true){
          var items= $(item).parents()[1]
      var money= $(items).find('.qian').html()
        var num= parseInt(money)
        allqian+=num;
           j++;
        }
       
    })
    $('.b_right_box b').html(allqian);
    $('.sel_num').html(j)
    
})
   
// 结算
$('.b_right_box button').on('click',function(){
    $('.weixin').css('display','block');
    var Sheight=(document.body.scrollHeight)
   $('.zhezhao').css('height',`${Sheight}px`)
   $('.zhezhao').css('display','block')
})
$('.zhezhao').on('click',function(){
    $('.weixin').css('display','none');
    $('.zhezhao').css('display','none')
})
//遮罩层





function orderFn(){
    $.ajax({
        type:'get',
        url:'/shop/getmyorder.jsp',
        
        success:function(res){
            var orderdata=res.data
            let str=''
            orderdata.forEach((item,index)=>{
                var mystr= item.order_quantity//价格
                var n=parseInt(mystr.substr(1));//截取价格
                var allmoney=n*item.order_status;
               

                 str+=`<li dataid=${item.u_id}>
            <div class="list_chose">
                <input type="checkbox" class="chose_check">
            </div>
            <div class="list_name">
                <img src="${item.order_num}">
                <span>${item.commodity_id}</span>
            </div>
            <div class="list_price">
                <span>${item.order_quantity}</span>
            </div>
            <div class="list_count">
                <span>${item.order_status}</span>
            </div>
            <div class="list_allprice">
                <span class='qian'>${allmoney}</span>
            </div>
            <div class="list_del">
                <button class="del_btn">删除</button>
            </div>
        </li>`
       
            })
            $('.list_ul').append(str);
        }
    })
}
orderFn()