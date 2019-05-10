function Banner(opt){
    this.ulist = document.querySelector(opt.ulist);
    this.olist = document.querySelector(opt.olist);
    this.uLis = this.ulist.children;
    this.oLis = this.olist.children;
    this.left=document.querySelector(opt.left)
    this.right=document.querySelector(opt.right)
    this.init();
    this.id = 0;
    this.timer = null;
}

Banner.prototype = {
     constructor:Banner,
     init:function(){
        this.click();
        this.setTime();
        this.move();
        this.lCont();
        this.rCont();
     },
        //点击播放
     click:function(){
          var that = this;
          for(var i=0;i<this.oLis.length;i++){
                (function(n){
                     that.oLis[n].onclick = function(){
                         for(var j = 0; j<that.uLis.length;j++){
                             that.uLis[j].style.display = 'none'
                             that.oLis[j].className = ''
                         }
                         that.uLis[n].style.display = 'block'
                         that.oLis[n].className = 'bg'
                     }
                })(i)
          }
     },
     
     //自定义播放

     setTime:function(){
          var that = this;
            this.timer=setInterval(function(){
                 that.id++
                 if(that.id>that.uLis.length-1){that.id=0}
                 for(var i=0;i<that.uLis.length;i++){
                      that.uLis[i].style.display='none'
                      that.oLis[i].className=''
                 }
                 that.uLis[that.id].style.display='block'
                 that.oLis[that.id].className='bg'

             },2000)
     },

     //划过暂停
     move:function(){
          var that = this;
            this.ulist.onmouseover=function(){
                 clearInterval(that.timer)
            }
            this.ulist.onmouseout=function(){
                 that.setTime();
            }
     },

     //上一张

     lCont:function(){
         var that = this
         this.left.onclick=function(){
             that.id--
                 if(that.id>that.uLis.length-1){that.id=0}
                 for(var i=0;i<that.uLis.length;i++){
                      that.uLis[i].style.display='none'
                      that.oLis[i].className=''
                 }
                 that.uLis[that.id].style.display='block'
                 that.oLis[that.id].className='bg'
         }
     },
     //下一张
     rCont:function(){
         var that = this
         this.right.onclick=function(){
             that.id++
                 if(that.id>that.uLis.length-1){that.id=0}
                 for(var i=0;i<that.uLis.length;i++){
                      that.uLis[i].style.display='none'
                      that.oLis[i].className=''
                 }
                 that.uLis[that.id].style.display='block'
                 that.oLis[that.id].className='bg'
         }
     }



}