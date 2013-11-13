/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-9-22
 * Time: 上午11:32
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-9-15
 * Time: 上午7:59
 * To change this template use File | Settings | File Templates.
 */
cc.layers.LayerOfCenter = cc.layers.LayerBase.extend({
    adjustSize:null,
    init:function () {
        var bRet = false;
        if (this._super()) {
            this.setAnchorPoint(cc.p(0.5,0.5));
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
        this.adjustSize.setCenterGlobal();
    }

});

cc.layers.LayerOfCenter.create = function () {
    var ret = new cc.layers.LayerOfCenter();
    if (ret && ret.init()) {
        return ret;
    }
    return null;
};

