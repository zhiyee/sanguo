//任务按钮
cc.renwuBtn = cc.MenuItemSprite.extend({

    init:function () {
        var btn_normal=cc.Sprite.create(s_btn_renwu);
        var btn_press=cc.Sprite.create(s_btn_renwu);
        var btn_disable=cc.Sprite.create(s_btn_renwu);
        this.initWithNormalSprite(btn_normal, btn_press,btn_disable,
            this.func, this);
        return true;
    },

    func:function(){//跳转到任务

    }
});

cc.renwuBtn.createeee = function () {
    var sg = new cc.renwuBtn();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};