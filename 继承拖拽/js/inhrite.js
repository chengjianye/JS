

function inhrite(){
     Drop.apply(this,arguments);

}
    // inhrite.prototype.init=function(){
    //     this.move();
    // }
inhriteObj(Drop,inhrite)

function inhriteObj(superType,subType){
     var ins = Object.create(superType.prototype)
     ins.constructor = subType
     subType.prototype = ins
}

inhrite.prototype.move = function(e){
    console.log(1)
        var that = this
        var eve = e || window.event;
         mPos = {
             x:eve.pageX - this.pos.x,
             y:eve.pageY - this.pos.y
         }
         var min = that.opt.arrer[0]   
         console.log(min)  
         var max = that.opt.arrer[1]
         if(mPos.x < min){mPos.x = min}
         if(mPos.y < min){mPos.y = min}
         if(mPos.x > max){mPos.x = max}
         if(mPos.y > max){mPos.y = max}
         this.ele.style.left = mPos.x + 'px'
         this.ele.style.top = mPos.y + 'px'
    }




