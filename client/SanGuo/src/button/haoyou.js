//好友按钮
cc.haoyouBtn = cc.MenuItemSprite.extend({

    init:function () {
        var btn_normal=cc.Sprite.create(s_btn_haoyou);
        var btn_press=cc.Sprite.create(s_btn_haoyou);
        var btn_disable=cc.Sprite.create(s_btn_haoyou);
        this.initWithNormalSprite(btn_normal, btn_press,btn_disable,
            this.func, this);
        return true;
    },

    func:function(){//跳转到好友

    }
});

cc.haoyouBtn.createeee = function () {
    var sg = new cc.haoyouBtn();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};