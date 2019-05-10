function drop(){
     var box = document.getElementById('box'),
         flag = false,
         pos = null
     box.onmousedown = function(e){
          flag = true;
          var eve = e || window.event
          Pos = {
               x: eve.offsetX,
               y: eve.offsetY
          }
     }
     
     document.addEventListener('mousemove',function(e){
            if(flag){
                var eve = e || window.event
                initPos = { //获取鼠标位置
                     x: eve.pageX - Pos.x,
                     y: eve.pageY - Pos.y
                },
                win = { //视口的宽度
                     w:document.documentElement.clientWidth,
                     h:document.documentElement.clientHeight
                },
                boxPos = { //盒子的宽度
                     w:box.offsetWidth,
                     h:box.offsetHeight
                }
               if(initPos.x < 0){initPos.x = 0}
               if(initPos.y < 0){initPos.y = 0}
               if(initPos.x > win.w - boxPos.w){initPos.x = win.w - boxPos.w}
               if(initPos.y > win.h - boxPos.h){initPos.y = win.h - boxPos.h}
               box.style.left = initPos.x + 'px'
               box.style.top = initPos.y + 'px'
            }
     })
    
     document.addEventListener('mouseup',function(){
          flag = false
     })
     
}
drop();