function Dialog(opt) {
    this.btn = document.getElementById('btn')
    this.mClass = opt.mClass;
    this.bClass = opt.bClass;
    this.initPos = null;
    this.flag = false;
    this.init();
}
Dialog.prototype = {
    constructor: Dialog,
    init: function () {
        this.click();
    },
    click: function () {
        var that = this;
        btn.onclick = function () {
            var mask = document.createElement('div')
            var superType = document.body;
            mask.className = that.mClass
            superType.insertBefore(mask, superType.children[0])
            var div = document.createElement('div')
            div.innerHTML = `<p id = 'drop'>Love</p>
                             <section>我想你 Nan</section>
                             <button id = 'btns'>登录</button>
                             <button id = 'clear'>取消</button>
                            `
            div.className = that.bClass
            superType.insertBefore(div, superType.children[0])
            //登录
            btns = div.querySelector('#btns')
            //取消
            clear = div.querySelector('#clear')
            //拖拽标题
            drop = div.querySelector('#drop')

            btns.addEventListener('click', function () {
                superType.removeChild(mask)
                superType.removeChild(div)
            })
            clear.addEventListener('click', function () {
                superType.removeChild(mask)
                superType.removeChild(div)
            })

            drop.addEventListener('mousedown', function (e) {
                that.droping(e)
            })
            document.addEventListener('mousemove', function (e) {
                that.pos(e, div)
            })
            document.addEventListener('mouseup', function (e) {
                that.flag = false;
            })
        }
    },
    droping: function (e) {
        var eve = e || window.event;
        initPos = {
            x: eve.offsetX,
            y: eve.offsetY
        }
        this.flag = true
    },
    pos: function (e, div) {
        if (this.flag) {
            var eve = e || window.event,
                offPos = {
                    x: eve.pageX - initPos.x,
                    y: eve.pageY - initPos.y
                },
                win = {
                    w: document.documentElement.clientWidth,
                    h: document.documentElement.clientHeight
                },
                boxSize = {
                    w: div.offsetWidth,
                    h: div.offsetHeight
                }
            if (offPos.x < 0) { offPos.x = 0 }
            if (offPos.y < 0) { offPos.y = 0 }
            if (offPos.x > win.w - boxSize.w) { offPos.x = win.w - boxSize.w }
            if (offPos.y > win.h - boxSize.h) { offPos.y = win.h - boxSize.h }
            div.style.left = offPos.x + 'px'
            div.style.top = offPos.y + 'px'
            div.style.transform="translate(0%,0%)"
        }
    }
}