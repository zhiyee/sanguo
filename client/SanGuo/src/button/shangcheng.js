//商城按钮
cc.shangchengBtn = cc.MenuItemSprite.extend({

    init:function () {
        var btn_normal=cc.Sprite.create(s_btn_shangcheng);
        var btn_press=cc.Sprite.create(s_btn_shangcheng);
        var btn_disable=cc.Sprite.create(s_btn_shangcheng);
        this.initWithNormalSprite(btn_normal, btn_press,btn_disable,
            this.func, this);
        return true;
    },

    func:function(){//跳转到商城

    }
});

cc.shangchengBtn.createeee = function () {
    var sg = new cc.shangchengBtn();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};