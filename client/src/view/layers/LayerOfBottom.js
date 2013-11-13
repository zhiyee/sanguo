/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-9-22
 * Time: 上午11:45
 * To change this template use File | Settings | File Templates.
 */
cc.layers.LayerOfBottom = cc.layers.LayerBase.extend({
    adjustSize:null,
    init:function () {
        var bRet = false;
        if (this._super()) {
            this.setAnchorPoint(cc.p(0.5,0));
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
        this.adjustSize.setBottomCenterGlobal();
    }
});

cc.layers.LayerOfBottom.create = function () {
    var ret = new cc.layers.LayerOfBottom();
    if (ret && ret.init()) {
        return ret;
    }
    return null;
};