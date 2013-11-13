/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-9-25
 * Time: 下午10:11
 * To change this template use File | Settings | File Templates.
 */
sgd.layers.Main = cc.layers.LayerOfCenter.extend({
    _name:'Layer_Login',
    _textField_user:null,
    _textField_pwd:null,
    init:function () {
        var bRet = false;
        if (this._super()) {
            //添加底下功能按钮背景

            //添加大背景
            var bg = cc.Sprite.create(s_main_bg);
            this.addChild(bg,0);
            bg.setAnchorPoint(cc.p(0,0));
            bg.setPosition(cc.p(0,0));

            //添加菜单功能背景及菜单
            var btns = sgd.viewModels.Buttons.bottom;

            var bottom_menu = sgd.bars.Bottom.create(btns,this);
            this.addChild(bottom_menu);
            bottom_menu.setPosition(cc.p(0,0));
            bottom_menu.setAnchorPoint(cc.p(0,0));

            bRet = true;
        }
        return bRet;
    }
});

sgd.layers.Main.create = function (userData) {
    var obj = new sgd.layers.Main(userData);
    if (obj && obj.init(userData)) {
        return obj;
    }
    return null;
};
