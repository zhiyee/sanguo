//副本按钮
cc.fubenBtn = cc.MenuItemSprite.extend({

    init:function () {
        var btn_normal=cc.Sprite.create(s_btn_fuben);
        var btn_press=cc.Sprite.create(s_btn_fuben);
        var btn_disable=cc.Sprite.create(s_btn_fuben);
        this.initWithNormalSprite(btn_normal, btn_press,btn_disable,
            this.func, this);
        return true;
    },

    func:function(){//跳转到副本

    }
});

cc.fubenBtn.createeee = function () {
    var sg = new cc.fubenBtn();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};