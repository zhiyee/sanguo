/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-9-22
 * Time: 上午11:45
 * To change this template use File | Settings | File Templates.
 */
cc.layers.LayerOfTop = cc.layers.LayerBase.extend({
    adjustSize:null,
    init:function () {
        var bRet = false;
        if (this._super()) {
            this.setAnchorPoint(cc.p(0.5,1));
            bRet = true;
        }
        return bRet;
    },
    adjustSizeForWindow:function(){
        if(!this.adjustSize){
            this.adjustSize = new cc.AdjustSizeForWindow();
            this.adjustSize.init(this);
        }
        this.adjustSize.scale();
        this.adjustSize.setTopCenterGlobal();
    }
});

cc.layers.LayerOfTop.create = function () {
    var ret = new cc.layers.LayerOfTop();
    if (ret && ret.init()) {
        return ret;
    }
    return null;
};