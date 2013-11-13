
cc.BottomToolLayer = cc.ScreenAdapteLayer.extend({


    init:function (btns,bottomToolLayer_bg) {
        var bRet = false;
        if (this._super()) {

            //添加底下功能按钮背景
            var layer_bg = cc.Sprite.create(bottomToolLayer_bg);
            this.addChild(layer_bg,0);
            layer_bg.setAnchorPoint(cc.p(0,0));
            layer_bg.setPosition(cc.p(0,0));


            //添加6个按钮
            var menu = cc.Menu.create();

            for(var i=0;i<btns.length;i++)
            {
               menu.addChild(btns[i]);
               var margin = 40/7;
               btns[i].setAnchorPoint(cc.p(0,0));
               btns[i].setPosition(cc.p((i+1)*margin+100*i,5));
            }

        //   menu.alignItemsHorizontally(5);

            this.addChild(menu,1);
            menu.setAnchorPoint(cc.p(0,0));
            menu.setPosition(0, 0);
           // this.schedule(this.update, 0.1);
            //屏幕适配（缩放）
          //  this.scaleToDesign();

            bRet = true;
        }

        return bRet;
    }

//   scaleToDesign:function()
//    {
//        this.designWidth = 320;
//        DesignWidth = 640;
//       this.screenWidth = 1280;
//
//        if(this.screenWidth < DesignWidth) this.setScaleX(this.screenWidth / DesignWidth);
//    },
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

cc.BottomToolLayer.create = function (btns,bottomToolLayer_bg) {
    var sg = new cc.BottomToolLayer();
    if (sg && sg.init(btns,bottomToolLayer_bg)) {
        return sg;
    }
    return null;
};
