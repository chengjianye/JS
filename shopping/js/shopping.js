function Shopping(opt){
     this.cAll = Array.from(document.querySelectorAll(opt.cAll))
     this.cek = Array.from(document.querySelectorAll(opt.cek))
     this.dAll = document.querySelector(opt.dAll);
     this.table = document.querySelector(opt.table);
     this.tBody = this.table.tBodies[0];
     this.add = opt.add;
     this.reduce = opt.reduce;
     this.del = opt.del;
     this.n = document.querySelector(opt.n);
     this.m = document.querySelector(opt.m)
     this.init();
}
Shopping.prototype = {
     constructor:Shopping,
     init:function(){
         this.check();
         this.remove();
         this.bindEvent()
     },
        //点击全选
     check:function(){
         var that = this
         this.cAll.map(function(item){
              item.addEventListener('click',function(){     
                    var ced = this.checked;
                   that.cek.forEach(function(item){
                        item.checked = ced
                   })
              })
         })       
     },
        //删除
     remove:function(){
         var that = this
          this.dAll.onclick = function(){
              if(!confirm('确定要删除吗'))return
              var ckAll = Array.from(that.tBody.querySelectorAll(':checked'))
              ckAll.map(function(item){
                   that.tBody.removeChild(item.parentNode.parentNode)
              })
          }
     },
        //绑定事件
     bindEvent:function(){
           var that = this;
           this.tBody.onclick = function(e){
                 var eve = e || event,
                     tar = eve.target || eve.srcElement;
                 if(tar.nodeName === 'SPAN'){
                     if(tar.className === that.add){
                        that.addFn(tar)//调用加
                      }else if(tar.className === that.reduce){
                            that.reduceFn(tar)//调用减
                      }else if(tar.className === that.del){
                            that.delFn(tar)
                    }
                 }else if(tar.nodeName === 'INPUT' && tar.type === 'checkbox'){
                    //调用合计 
                    that.countTotal();
                }
           }
     },
     //加
     addFn:function(cur){
          var children = cur.parentNode.children;
          children[0].style.opacity = 1
          children[1].value = children[1].value * 1 + 1
          this.conut(cur,children[1].value)
          this.countTotal()
     },
     //减
     reduceFn:function(cur){
          var children = cur.parentNode.children;
          if(children[1].value <= 1){
              children[0].style.opacity = 0
              return;
          }
          children[1].value = children[1].value * 1 - 1
          this.conut(cur,children[1].value)
          this.countTotal()
     },
     //小计
     conut:function(cur,n){
          var children = cur.parentNode.parentNode.children;
          var price = children[2].innerText;
          var subtotal =children[4]
          subtotal.innerHTML = (price * n).toFixed(2)
     },
     //删除单行
     delFn:function(car){
         if(!confirm('确定要删除吗'))return
          this.tBody.removeChild(car.parentNode.parentNode)
     },
     //合计
     countTotal:function(){
          var product = Array.from(this.tBody.querySelectorAll(':checked'));
          var sum = 0;
          var money = 0;
          product.forEach(function(item){
                var tr = item.parentNode.parentNode;
                var n = tr.querySelector('input[type=text]').value * 1;
                var p = tr.children[4].innerHTML * 1;
                sum += n;
                money += p;
          });
          
          this.n.innerHTML =sum;
          this.m.innerHTML = money.toFixed(2);
     }
}