/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-10-9
 * Time: 下午10:21
 * To change this template use File | Settings | File Templates.
 */

sgd.bars = sgd.bars || {};
sgd.bars.Bottom = cc.Menu.extend({
    initialize:function (button_base,envir) {

        //添加底下功能按钮背景
        var layer_bg = cc.Sprite.create(s_toolbar_bottom_bg);
        this.addChild(layer_bg,0);
        layer_bg.setAnchorPoint(cc.p(0,0));
        layer_bg.setPosition(cc.p(0,0));

        for(var i=0;i<button_base.length;i++)
        {
            var btn_normal=cc.Sprite.create(button_base[i].image_normal);
            var btn_press=cc.Sprite.create(button_base[i].image_touch);
            var btn_disable=cc.Sprite.create(button_base[i].image_disable);
            var _menuItemSprite  = cc.MenuItemSprite.create(btn_normal, btn_press,btn_disable,button_base[i].callback,envir);
            this.addChild(_menuItemSprite);
            var margin = 40/7;
            _menuItemSprite.setAnchorPoint(cc.p(0,0));
            _menuItemSprite.setPosition(cc.p((i+1)*margin+100*i,5));
        }


       // this.initWithArray(new Array(_menuItemSprite));

        return true;
    }
});

sgd.bars.Bottom.create = function (button_base,envir) {
    var ret = new sgd.bars.Bottom();
    if (ret && ret. initialize(button_base,envir)) {
        return ret;
    }
    //return null;
};
