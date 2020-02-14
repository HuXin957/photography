function getshop(){
    $.ajax({
        type:'get',
        url:'/shop/getshop.jsp',
        success:function(res){
             str='';
            if(res.code==0){
               list_num=`<span>共有${res.data.length}个出售商品 </span>`
               $('.caption').append(list_num)
                res.data.forEach((item,index)=>{
                    
                    str+=` <li>
                    <div class="card_box">
                        <a href="#">
                            <div class="card_trumb">

                                <div class="card_img">
                                <img src=${item.commodity_cover} class="card_trumb_in">
                                </div>  
                            </div>      
                        </a>
                        <div class="shop_list_title"> 
                            <h4><a href="#">${item.commodity_title
                            }</a></h4>
                        </div>
                        <div class="c_price">
                            <div class="price_num">
                                <b>${item.commodity_place
                                }</b>
                            </div>
                            <div class="pop_up">
                                <div class="pop_num">
                                    <span>已售：<b>1</b></span>
                                </div>
                                <div class="pop_btn">
                                    <a href="#" class="p_buy" data-id=${item.commodity_id}>购买</a>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                    
                </li>`
                })
                $('.card_ul').append(str)
            }
        }
    })
}
getshop();

// 购买按钮请求Ajax
function buyAjax(data_id){
    $.ajax({
        type:'get',
        url:'/shop/getshopinfo.jsp',
        data:{
            id_num:data_id
        },
        success:function(res){
            if(res.code==0){
                sessionStorage.setItem('mydata',JSON.stringify(res.data))
            }
        }
    })
}

$('.card_ul').on('click','.p_buy',function(e){
    e.preventDefault();
   var id_num= $(this).attr("data-id");
    buyAjax(id_num);
    window.location.href='shopcar.html';
})



