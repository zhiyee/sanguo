/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-10-9
 * Time: 下午10:17
 * To change this template use File | Settings | File Templates.
 */
sgd.layers.ToolbarBottom = cc.layers.LayerOfBottom.extend({
    _name:'layers.ToolbarBottom',
    init:function () {
        var bRet = false;
        if (this._super()) {
            //添加底下功能按钮背景
            var bg = cc.Sprite.create(s_toolbar_bottom_bg);
            this.addChild(bg);
            bg.setAnchorPoint(cc.p(0.5,0.5));
            cc.AdjustSizeForWindow.setCenter(bg);

            for(var i=0;i<sgd.ViewModel.Toolbar_Bottom_Buttons.length;i++){
                var btn = new sgd.Button_Toolbar_Bottom.create(sgd.ViewModel.Toolbar_Bottom_Buttons[i],this);
                this.addChild(bg);
                var margin = 40/7;
                btn.setPosition(cc.p((i+1)*margin+100*i,5));
            }
            bRet = true;
        }
        return bRet;
    }
});

sgd.layers.ToolbarBottom.create = function () {
    var obj = new sgd.layers.ToolbarBottom();
    if (obj && obj.init()) {
        return obj;
    }
    return null;
};
