window.onload = function () {

    nav()
}
// 时间戳转换为距离现在多长时间
function getTimeUntilNow(mss) {
    var date1 = (new Date() * 1 - new Date(mss) * 1)
    var days = date1 / 86400000;
    if (days > 1) {
        return days + " 天前";
    };
    var hours = Math.floor((date1 % 86400000) / (3600 * 1000));
    if (hours > 1) {
        return hours + " 小时前 ";
    };
    var minutes = Math.floor((date1 % 86400000) % (3600 * 1000) / (60 * 1000));
    if (minutes > 0) {
        return minutes + " 分钟前 ";
    };
    var seconds = (mss % (1000 * 60)) / 1000;
    return "刚刚 ";
}

// 时间戳
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, // 月份
        "d+": this.getDate(), // 日
        "h+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + ""));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

//菜单栏鼠标移入
function menuHover() {
    $('.menu_item').hover(function () {
        $(this).find($('.menu_item_a')).addClass('menu_item_a_hover')
    }, function () {
        $(this).find($('.menu_item_a')).removeClass('menu_item_a_hover')
    });
}


// 菜单栏生成
function nav() {
    $.ajax({
        type: 'get',
        url: 'theindex/getnav',
        success: function (res) {
            var data1 = res.data
            if (res.code == 0) {
                let str = ''
                data1.forEach((item, index) => {
                    str += `<li class="menu_item" data-num="${item.style_id}">
                    <a class="menu_item_a"><span>${item.style_name}摄影</span></a>
                </li>`
                });
                $('.nav_menu').append(str)
                //菜单栏鼠标移入
                menuHover()

            } else if (code == 2) {
                console.log(res.msg)
            }
        }
    })
}

// 菜单栏生成
function nav() {
    $.ajax({
        type: 'get',
        url: 'theindex/getgrid',
        success: function (res) {
            var data1 = res.data
            if (res.code == 0) {
                let str = ''
                data1.forEach((item, index) => {
                    str += `<li class="menu_item" data-num="${item.style_id}">
                    <a class="menu_item_a"><span>${item.style_name}摄影</span></a>
                </li>`
                });
                $('.nav_menu').append(str)
                //菜单栏鼠标移入
                menuHover()

            } else if (code == 2) {
                console.log(res.msg)
            }
        }
    })
}





function griditem(obj){
    var str=`<div class="grid_item">
    <div class="cover_img" data-i="${obj.ind}" style="background-image: url(./../${obj.bgimg});"></div>
    <div class="post_info">
        <div class="post_header">
            <a class="">${obj.author}</a>
            <time>${obj.timer}</time>
        </div>
        <h2>
            <a  data-i="${obj.ind}">${obj.tit}</a>
        </h2>
    </div>
</div>`
}






























// var GridItem = function (obj) {
//     this.author=obj.author
//     this.timer=obj.timer
//     this.tit=obj.tit
//     this.bgimg=obj.bgimg
//     this.ind=obj.ind
//     this.target=obj.target
//     this.str=''
//     this.init();
// }
// GridItem.prototype = {
//     constructor: GridItem,
//     init() {
//         this.str=`<div class="grid_item">
//         <div class="cover_img data-i="${this.ind}"></div>
//         <div class="post_info">
//             <div class="post_header">
//                 <a class="">${this.author}</a>
//                 <time>${this.timer}</time>
//             </div>
//             <h2>
//                 <a>${this.tit}</a>
//             </h2>
//         </div>
//     </div>`
//     this.target.append(this.str)
//     },
//     func1() {

//     }
// }

// var s=new GridItem({
//     author:'aaa',
//     timer: getTimeUntilNow(1111111111000),
//     tit:'aaaaaaaassssssssssssssssss',
//     bgimg:'./../images/indeximgs/1.jpg',
//     ind:1,
//     target:$('.grid_bor')
// })