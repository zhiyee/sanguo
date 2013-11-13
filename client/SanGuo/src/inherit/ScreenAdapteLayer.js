cc.ScreenAdapteLayer = cc.Menu.extend({

    init:function () {
        var bRet = false;
        if (this._super()) {
            bRet = true;
        }
        return bRet;
    },
    scaleToDesign:function()  {
        DesignWidth = 640;
        this.screenWidth = winSize.width;
        if(this.screenWidth < DesignWidth)
        {
            var bili = this.screenWidth / DesignWidth;
            this.setScaleX(bili);
           // this.setScaleY(bili);
        }
    }
//
//    PositionToLeftTop:function(){
//        this.parent.width
//        this.parent.height
//        this.width
//        this.height
//
//        this.x = 0;
//        this.y = this.height;
//
//    },

});

cc.ScreenAdapteLayer.create = function () {
    var sg = new cc.ScreenAdapteLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};
