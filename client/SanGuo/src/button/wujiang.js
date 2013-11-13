//武将按钮
cc.wujiangBtn = cc.MenuItemSprite.extend({

    init:function () {
        var btn_normal=cc.Sprite.create(s_btn_wujiang);
        var btn_press=cc.Sprite.create(s_btn_wujiang);
        var btn_disable=cc.Sprite.create(s_btn_wujiang);
        this.initWithNormalSprite(btn_normal, btn_press,btn_disable,
            this.func, this);
        return true;
    },



    func:function(){//跳转到武将

        alert("武将");
    }
});

cc.wujiangBtn.createeee = function () {
    var sg = new cc.wujiangBtn();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};