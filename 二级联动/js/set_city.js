function City(opt) {
    this.sels = document.getElementById(opt.select1);
    this.selt = document.getElementById(opt.select2);
    this.init();
}
City.prototype = {
    constructor: City,
    init: function () {
        this.render();
    },
    render: function () {
        var cities = {
            '河北省': ['石家庄', '张家口市', '承德市', '秦皇岛市', '唐山市', '廊坊市', '保定市', '沧州市', '衡水市', '邢台市', '邯郸市'],
            '山西省': ['太原市', '大同市', '朔州市', '阳泉市', '长治市', '晋城市', '忻州地区', '吕梁地区', '晋中市', '临汾地区', '运城地区']
        };
        for (var k in cities) {
            var option = new Option(k, k);
            this.sels.appendChild(option);
        }
        var that = this;
        this.sels.onchange = function () {
            //省份
            var citys = that.sels.value;
            if (typeof cities[citys] === 'undefined') {
                that.selt.innerHTML = '<option value="0">选择城市</option>';
            };
            for (var i = 0; i < cities[citys].length; i++) {
                var num = i + 1;
                that.selt.options[num] = new Option(cities[citys][i], cities[citys][i]);
            };
        }
    }
}