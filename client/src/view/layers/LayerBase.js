/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-9-15
 * Time: 上午7:59
 * To change this template use File | Settings | File Templates.
 */
cc.layers = cc.layers || {};
sgd.layers = sgd.layers || {};
cc.layers.LayerBase = cc.Layer.extend({

    init:function () {
        var bRet = false;
        if (this._super()) {
            var selfPointer = this;
            this.setAnchorPoint(cc.p(0.5,0.5));
            var size = cc.Director.getInstance().getWinSize();

            selfPointer.adjustSizeForWindow();
            window.addEventListener("resize", function (event) {
                selfPointer.adjustSizeForWindow();
            });

            bRet = true;
        }
        return bRet;
    },
    adjustSizeForWindow:function(){

    }

});

cc.layers.LayerBase.create = function () {
    var ret = new cc.layers.LayerBase();
    if (ret && ret.init()) {
        return ret;
    }
    return null;
};

