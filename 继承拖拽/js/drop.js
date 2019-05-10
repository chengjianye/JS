function Drop(opt){
     this.ele = typeof el === 'string' ? document.getElementById(opt.el) : opt.el;
     this.init();
     this.opt = opt;
     this.arrer = opt.arrer
     this.pos = null;
}

Drop.prototype = {
     constructor:Drop,
     init:function(){
        this.bindEvent()
     },
     bindEvent:function(){
         var that = this
         this.ele.onmousedown = function(e){
             var eve = e || window.event;
             that.pos = {
                 x:eve.offsetX,
                 y:eve.offsetY
             }
             document.onmousemove = function(e){
                  that.move(e)
             }
             document.onmouseup = function(){
                    document.onmousemove = null;
                    document.onmouseup = null;
             }
         }
     },
     move:function(e){
        var eve = e || window.event;
         mPos = {
             x:eve.pageX - this.pos.x,
             y:eve.pageY - this.pos.y
         }
         this.ele.style.left = mPos.x + 'px'
         this.ele.style.top = mPos.y + 'px'
     }
}