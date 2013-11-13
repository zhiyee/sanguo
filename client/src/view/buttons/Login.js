/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-9-25
 * Time: 下午10:22
 * To change this template use File | Settings | File Templates.
 */
sgd.buttons = sgd.buttons || {};
sgd.buttons.Login = cc.Menu.extend({
    initialize:function (text,callback,envir) {
        var btn_normal=cc.Sprite.create(s_login_btn_bg);
        var btn_press=cc.Sprite.create(s_login_btn_bg);
        var btn_disable=cc.Sprite.create(s_login_btn_bg);
        var _menuItemSprite  = cc.MenuItemSprite.create(btn_normal, btn_press,btn_disable,callback,envir);
        _menuItemSprite.name = text;

        var Label_Title = cc.LabelTTF.create(text, sgd.Settings.Client.FONT, sgd.Settings.Client.FONT_SIZE);
        _menuItemSprite.addChild(Label_Title, 1);
        Label_Title.setAnchorPoint(cc.p(0.5, 0.5));
        cc.AdjustSizeForWindow.setCenter(Label_Title);

        this.initWithArray(new Array(_menuItemSprite));

        return true;
    }
});

sgd.buttons.Login.create = function (text,callback,envir) {
    var ret = new sgd.buttons.Login();
    if (ret && ret. initialize(text,callback,envir)) {
        return ret;
    }
    //return null;
};