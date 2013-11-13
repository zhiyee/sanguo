//城池按钮
cc.chengchiBtn = cc.MenuItemSprite.extend({

    init:function () {
        var btn_normal=cc.Sprite.create(s_btn_chengchi);
        var btn_press=cc.Sprite.create(s_btn_chengchi);
        var btn_disable=cc.Sprite.create(s_btn_chengchi);
        this.initWithNormalSprite(btn_normal, btn_press,btn_disable,
            this.func, this);
        return true;
    },

    func:function(){//跳转到城池

    }
});

cc.chengchiBtn.createeee = function () {
    var sg = new cc.chengchiBtn();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};