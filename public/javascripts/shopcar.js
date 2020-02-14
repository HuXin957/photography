// 数量增加
$('#sub').on('click',function(){
   var sub= $('.ipt_txt').val()
   if(sub>0){
       sub--;
       $('.ipt_txt').val(sub)
   }
})
// 数量减少
$('#add').on('click',function(){
    var add=$('.ipt_txt').val()
    add++;
    $('.ipt_txt').val(add)
})


// 渲染页面
var listdata=JSON.parse(sessionStorage.getItem('mydata'))
$('.goods_title').html(listdata[0].commodity_title);
$('.big_img').attr("src",listdata[0].commodity_cover);
$('.small_img').attr("src",listdata[0].commodity_cover);
$('.h1').html(listdata[0].commodity_title);
$('.type').html(listdata[0].commodity_type);
$('.money').html(listdata[0].commodity_place);
$('.num').html(listdata[0].commodity_details);
$('.author').html(listdata[0].commodity_photograper);
$('.size_num').html(listdata[0].commodity_size);
$('.year').html(listdata[0].commodity_year);
$('.info_txt').html(listdata[0].commodity_total);

// 立即购买
$('.buy_Btn').on('click',function(){
    window.location.href='order.html';
    goodsFn();
})
// 加入购物车按钮
var judge=true;
$('.add_Btn').on('click',function(){

    if(judge){
        goodsFn();
        judge=false; 
    }  
})
function goodsFn(){
    var goodscount=$('.ipt_txt').val()
    console.log()
    if(goodscount==0){
        goodscount=1;
    }
  $.ajax({
      type:'post',
      url:'shop/getorder.jsp',
      data:{
         orderid:listdata[0].commodity_id,
         orderimg:listdata[0].commodity_cover,
         orderprice:listdata[0].commodity_place,
         ordertitle:listdata[0].commodity_title,
         ordercount:goodscount
      },
      success:function(){
          $('.add_Btn').html('已加入到购物车'); 
      }
  })
}







