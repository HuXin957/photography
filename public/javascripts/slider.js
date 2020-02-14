;(function(){
    var _global;
    _global=(function(){
        return this
    })()

    function slider(obj){
        this.selector=document.querySelector(obj.selector);
        this.w=obj.w;
        this.h=obj.h;
        this.imgsrc=obj.imgsrc;
        this.speed=obj.speed;
        this.txt=obj.txt;
        this.num=obj.num;
        this.times=obj.times;
        this.init();
    }

    slider.prototype.init=function(){
        //大盒子样式
        this.selector.style.width=this.w+'px';
        this.selector.style.height=this.h+'px';

        //ul样式
        var imgul=document.createElement('ul');
        imgul.className='imgul';
        imgul.style.width=this.w*(this.num+2)+'px';
        imgul.style.height=this.h+'px';
        imgul.style.whiteSpace='nowrap';
        imgul.style.left=0;
        this.selector.appendChild(imgul);
        var imgarr=this.imgsrc;
        var imgarrlast=imgarr[imgarr.length-1];
        imgarr.push(imgarr[0]);
        imgarr.unshift(imgarrlast);

        var txtarr=this.txt;
        var txtlast=txtarr[txtarr.length-1];
        txtarr.push(txtarr[0]);
        txtarr.unshift(txtlast);

        var timearr=this.times;
        var timelast=timearr[timearr.length-1];
        timearr.push(timearr[0]);
        timearr.unshift(timelast)
        //li创建
        for(let i=0,imglen=imgarr.length;i<imglen;i++){
            let imgli=document.createElement('li');
            imgli.style.background=`url(${imgarr[i]})`;
            imgli.style.display='inline-block';
            imgli.style.height=this.h+'px';
            imgli.style.width=this.w+'px';
            imgli.style.backgroundSize='cover';
            imgli.style.backgroundPosition='center';
            imgli.style.position='relative';
            imgul.appendChild(imgli);

              //创建文字

        let imgtxt=document.createElement('div');
        imgtxt.className='imgtxt';
        let p_txt=document.createElement('p');
        p_txt.innerHTML=this.txt[i];
        let p_time=document.createElement('p');
        p_time.innerHTML=this.times[i];
        p_txt.className='p_txt';
        p_time.className='p_time';
        imgtxt.appendChild(p_txt);
        imgtxt.appendChild(p_time);
        imgli.appendChild(imgtxt);
        }

         img_w=this.w;
         img_left=this.w*this.num;
         timer=null;
        speed=this.speed;
         num=this.num;

        function slider_sInvl(){
            imgul_left= parseInt(imgul.style.left);
            imgul.style.left=parseInt(imgul_left-img_w)+'px';

            if(imgul_left<=-img_left){//如果ul的left 小于img_left
                
                imgul.style.left=0+'px';
                imgul.style.transition="none";
                timer=setInterval(function(){
                    imgul.style.left=-img_w+'px'
                    imgul.style.transition=".5s";
                    clearInterval(timer)
                },16)
            }else{
                imgul.style.transition=".5s";
            }
  
        }
        setInterval(slider_sInvl,1000)

       
    }

    !('slider' in _global)&&(_global.slider=slider)
})()