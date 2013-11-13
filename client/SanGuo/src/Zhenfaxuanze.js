
cc.ZhenfaLayer= cc.Layer.extend({

    gameLayer : null,

    init:function () {
        this._super();

        //添加大背景
        var bg = cc.Sprite.create(s_bg);
        this.addChild(bg,0);
        bg.setAnchorPoint(cc.p(0,0));
        bg.setPosition(cc.p(0,0));

        //添加拖动层
        var a = [cc.chengchiBtn.createeee(),cc.wujiangBtn.createeee(),cc.renwuBtn.createeee()
            ,cc.fubenBtn.createeee(),cc.haoyouBtn.createeee(),cc.chengchiBtn.createeee(),cc.wujiangBtn.createeee(),cc.renwuBtn.createeee()
            ,cc.fubenBtn.createeee()];
        var pos = {x:0,y:170};
        var b = cc.TableViewTestLayer.create(pos);
        this.addChild(b);
        b.setPosition(cc.p(0,50));
        b.setAnchorPoint(cc.p(0,0));

        var btns = [cc.chengchiBtn.createeee(),cc.wujiangBtn.createeee(),cc.renwuBtn.createeee()
            ,cc.fubenBtn.createeee(),cc.haoyouBtn.createeee(),cc.shangchengBtn.createeee()];
        //添加菜单功能背景及菜单
        var btLayer = cc.BottomToolLayer.create(btns,s_button_bg);
        //this.addChild(btLayer);
        btLayer.setPosition(cc.p(0,0));
        btLayer.setAnchorPoint(cc.p(0,0));
        //添加属性背景
        //this.addChild(cc.PropertyToolLayer.create());
     //   this.adjustSizeForWindow();
//        var lazyLayer = new cc.LazyLayer();
//        this.addChild(lazyLayer);
//        lazyLayer.adjustSizeForCanvas();
//        var selfPointer = this;
//        window.addEventListener("resize", function (event) {
//            selfPointer.adjustSizeForWindow();
//        });
        return true;
    }

//    adjustSizeForWindow:function () {
//        var margin = document.documentElement.clientWidth - document.body.clientWidth;
//        if (document.documentElement.clientWidth < cc.originalCanvasSize.width) {
//            cc.canvas.width = cc.originalCanvasSize.width;
//        } else {
//            cc.canvas.width = document.documentElement.clientWidth - margin;
//        }
//        if (document.documentElement.clientHeight < cc.originalCanvasSize.height) {
//            cc.canvas.height = cc.originalCanvasSize.height;
//        } else {
//            cc.canvas.height = document.documentElement.clientHeight - margin;
//        }
//
//        var xScale = cc.canvas.width / cc.originalCanvasSize.width;
//        var yScale = cc.canvas.height / cc.originalCanvasSize.height;
//        if (xScale > yScale) {
//            xScale = yScale;
//        }
//        cc.canvas.width = cc.originalCanvasSize.width * xScale;
//        cc.canvas.height = cc.originalCanvasSize.height * xScale;
//        var parentDiv = document.getElementById("Cocos2dGameContainer");
//        if (parentDiv) {
//            parentDiv.style.width = cc.canvas.width + "px";
//            parentDiv.style.height = cc.canvas.height + "px";
//        }
//        cc.renderContext.translate(0, cc.canvas.height);
//        cc.renderContext.scale(xScale, xScale);
//        cc.Director.getInstance().setContentScaleFactor(xScale);
//    }
});

cc.Zhenfaxuanze = cc.Scene.extend({

    onEnter:function () {
        this._super();
        var layer = new cc.ZhenfaLayer();

        //layer.setPosition(cc.p(0,50));
        layer.init();
        this.addChild(layer);
        this.setAnchorPoint(cc.p(0,0));
    }
});

