
window.onload= function(){

    //轮播图部分
    var box=document.getElementById('banner');
    var ul=box.children[0].children[0];
    var ulLis = ul.children;
    //克隆第一张图片到最后
       ul.appendChild(ulLis[0].cloneNode(true));
    //插入 ol 里面的li
    var ol=box.children[0].children[1];
    for(var i=0;i<ulLis.length-1;i++){
      var li = document.createElement("li");
      ol.appendChild(li);
    }
    var olLis = ol.children;
    olLis[0].className="current";
    //动画部分
    var timer = null;
    var key = 0 ;  //用来控制图片的播放的
    var square=0;  //用来控制ol的小方块
     timer=setInterval(autoplay,3000);
     function autoplay() {
          key++;    //key==1
          if (key>ulLis.length-1) {
            key=1;
            ul.style.left=0;
      }
      animate(ul,-key*ulLis[0].offsetWidth)
      //小方块部分
      square++;
      square=square>olLis.length-1 ? 0 : square;
      for(var i=0;i<olLis.length;i++){
          olLis[i].className=""
      }
          olLis[square].className="current";
     }
     //鼠标经过olLis
     for(var i=0;i<olLis.length;i++){
          olLis[i].index=i;  //获取索引号
          olLis[i].onmouseover=function(){
            for(var i=0;i<olLis.length;i++){
              olLis[i].className="";
            }
            this.className="current";
            animate(ul,-this.index*ulLis[0].offsetWidth);
            key=square=this.index;
          }

     }
     // 鼠标经过和停止定时器
     box.onmouseover=function(){
      clearInterval(timer);
     }
     box.onmouseout=function(){
      timer=setInterval(autoplay,3000);
     }
     
    //缓慢动画封装
     function animate(ele,target) {
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            var step = (target-ele.offsetLeft)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            ele.style.left = ele.offsetLeft + step + "px";
            if(Math.abs(target-ele.offsetLeft)<=Math.abs(step)){
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        },30);   
     }
  }