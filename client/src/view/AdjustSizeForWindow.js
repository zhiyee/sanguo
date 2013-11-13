/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-9-19
 * Time: 上午8:42
 * To change this template use File | Settings | File Templates.
 */
cc.AdjustSizeForWindow = cc.Class.extend({
    node:null,
    init:function (node) {
        this.node = node;
    },
    scale:function(){
        if(sgd.viewModels.Resolution.height<480) {
            this.node.setScale(sgd.viewModels.Resolution.scaleY,sgd.viewModels.Resolution.scaleY);
        }
    },
    setCenter:function(){
        var w = this.node.getContentSize().width;
        var h = this.node.getContentSize().height;
        var pw = this.node.getParent().getContentSize().width;
        var ph = this.node.getParent().getContentSize().height;
        this.node.setPosition(pw/2 - w/2 + w * this.node.getAnchorPoint().x,ph/2 - h/2 + h * this.node.getAnchorPoint().y);
    },
    setTopCenter:function(){
        var w = this.node.getContentSize().width;
        var h = this.node.getContentSize().height;
        var pw = this.node.getParent().getContentSize().width;
        var ph = this.node.getParent().getContentSize().height;
        this.node.setPosition(pw/2 - w/2 + w * this.node.getAnchorPoint().x,ph - h + h * this.node.getAnchorPoint().y);
    },
    setBottomCenter:function(){
        var w = this.node.getContentSize().width;
        var h = this.node.getContentSize().height;
        var pw = this.node.getParent().getContentSize().width;
        var ph = this.node.getParent().getContentSize().height;
        this.node.setPosition(pw/2 - w/2 + w * this.node.getAnchorPoint().x,0 + h * this.node.getAnchorPoint().y);
    },
    setLeftMiddle:function(){
        var w = this.node.getContentSize().width;
        var h = this.node.getContentSize().height;
        var pw = this.node.getParent().getContentSize().width;
        var ph = this.node.getParent().getContentSize().height;
        this.node.setPosition(0 + w * this.node.getAnchorPoint().x,ph/2 - h/2 + h * this.node.getAnchorPoint().y);
    },
    setRightMiddle:function(){
        var w = this.node.getContentSize().width;
        var h = this.node.getContentSize().height;
        var pw = this.node.getParent().getContentSize().width;
        var ph = this.node.getParent().getContentSize().height;
        this.node.setPosition(pw - w + w * this.node.getAnchorPoint().x,ph/2 - h/2 + h * this.node.getAnchorPoint().y);
    },
    setBottomLeft:function(){
        var w = this.node.getContentSize().width;
        var h = this.node.getContentSize().height;
        var pw = this.node.getParent().getContentSize().width;
        var ph = this.node.getParent().getContentSize().height;
        this.node.setPosition(0 + w * this.node.getAnchorPoint().x,0 + h * this.node.getAnchorPoint().y);
    },
    setTopRight:function(){
        var w = this.node.getContentSize().width;
        var h = this.node.getContentSize().height;
        var pw = this.node.getParent().getContentSize().width;
        var ph = this.node.getParent().getContentSize().height;
        this.node.setPosition(pw - w + w * this.node.getAnchorPoint().x,ph - h + h * this.node.getAnchorPoint().y);
    },
    setBottomRight:function(){
        var w = this.node.getContentSize().width;
        var h = this.node.getContentSize().height;
        var pw = this.node.getParent().getContentSize().width;
        var ph = this.node.getParent().getContentSize().height;
        this.node.setPosition(pw - w + w * this.node.getAnchorPoint().x,0 + h * this.node.getAnchorPoint().y);
    },
    setTopLeft:function(){
        var w = this.node.getContentSize().width;
        var h = this.node.getContentSize().height;
        var pw = this.node.getParent().getContentSize().width;
        var ph = this.node.getParent().getContentSize().height;
        this.node.setPosition(0 + w * this.node.getAnchorPoint().x,ph - h + h * this.node.getAnchorPoint().y);
    },
    setCenterGlobal:function(){
        var w = this.node.getContentSize().width;
        var h = this.node.getContentSize().height;
        var pw = sgd.viewModels.Resolution.getContentSize().width;
        var ph = sgd.viewModels.Resolution.getContentSize().height;
        //this.scale();
        this.node.setPosition(pw/2 - w + w * this.node.getAnchorPoint().x,ph/2 - h + h * this.node.getAnchorPoint().y);
        console.log('ph/2['+ph/2+']-h['+h+']+h[' + h +']*this.node.getAnchorPoint().y['+this.node.getAnchorPoint().y+']');
    },
    setTopCenterGlobal:function(){
        var w = this.node.getContentSize().width;
        var h = this.node.getContentSize().height;
        var gw = document.documentElement.clientWidth;
        var gh = document.documentElement.clientHeight;

        if(this.node instanceof cc.Layer){
            this.node.setPosition(gw/2 - w/2 ,gh - h);
        }
        else if(this.node instanceof cc.Sprite){
            var p_px = this.node.getParent().getPositionX();
            var p_py = this.node.getParent().getPositionY();
            this.node.setPosition(gw/2 - w/2 + w * this.node.getAnchorPoint().x - p_px,gh - h + h * this.node.getAnchorPoint().y - p_py);
        }
    },
    setBottomCenterGlobal:function(){
        var w = this.node.getContentSize().width;
        var h = this.node.getContentSize().height;
        var gw = document.documentElement.clientWidth;
        var gh = document.documentElement.clientHeight;

        if(this.node instanceof cc.Layer){
            this.node.setPosition(gw/2 - w/2, 0);
        }
        else if(this.node instanceof cc.Sprite){
            var p_px = this.node.getParent().getPositionX();
            var p_py = this.node.getParent().getPositionY();
            this.node.setPosition(gw/2 - w/2 + w * this.node.getAnchorPoint().x - p_px, 0);
        }
    }
});

cc.AdjustSizeForWindow.setCenter = function(node){
    var adjustSize = new cc.AdjustSizeForWindow();
    adjustSize.init(node);
    adjustSize.setCenter();
    window.addEventListener("resize", function (event) {
        adjustSize.setCenter();
    });
};

cc.AdjustSizeForWindow.setTopCenter = function(node){
    var adjustSize = new cc.AdjustSizeForWindow();
    adjustSize.init(node);
    adjustSize.setTopCenter();
    window.addEventListener("resize", function (event) {
        adjustSize.setTopCenter();
    });
};

cc.AdjustSizeForWindow.setBottomCenter = function(node){
    var adjustSize = new cc.AdjustSizeForWindow();
    adjustSize.init(node);
    adjustSize.setBottomCenter();
    window.addEventListener("resize", function (event) {
        adjustSize.setBottomCenter();
    });
};

cc.AdjustSizeForWindow.setLeftMiddle = function(node){
    var adjustSize = new cc.AdjustSizeForWindow();
    adjustSize.init(node);
    adjustSize.setLeftMiddle();
    window.addEventListener("resize", function (event) {
        adjustSize.setLeftMiddle();
    });
};

cc.AdjustSizeForWindow.setRightMiddle = function(node){
    var adjustSize = new cc.AdjustSizeForWindow();
    adjustSize.init(node);
    adjustSize.setRightMiddle();
    window.addEventListener("resize", function (event) {
        adjustSize.setRightMiddle();
    });
};

cc.AdjustSizeForWindow.setBottomLeft = function(node){
    var adjustSize = new cc.AdjustSizeForWindow();
    adjustSize.init(node);
    adjustSize.setBottomLeft();
    window.addEventListener("resize", function (event) {
        adjustSize.setBottomLeft();
    });
};

cc.AdjustSizeForWindow.setTopRight = function(node){
    var adjustSize = new cc.AdjustSizeForWindow();
    adjustSize.init(node);
    adjustSize.setTopRight();
    window.addEventListener("resize", function (event) {
        adjustSize.setTopRight();
    });
};

cc.AdjustSizeForWindow.setBottomRight = function(node){
    var adjustSize = new cc.AdjustSizeForWindow();
    adjustSize.init(node);
    adjustSize.setBottomRight();
    window.addEventListener("resize", function (event) {
        adjustSize.setBottomRight();
    });
};

cc.AdjustSizeForWindow.setTopLeft = function(node){
    var adjustSize = new cc.AdjustSizeForWindow();
    adjustSize.init(node);
    adjustSize.setTopLeft();
    window.addEventListener("resize", function (event) {
        adjustSize.setTopLeft();
    });
};

cc.AdjustSizeForWindow.setCenterGlobal = function(node){
    var adjustSize = new cc.AdjustSizeForWindow();
    adjustSize.init(node);
    adjustSize.setCenterGlobal();
    window.addEventListener("resize", function (event) {
        adjustSize.setCenterGlobal();
    });
};

cc.AdjustSizeForWindow.setTopCenterGlobal = function(node){
    var adjustSize = new cc.AdjustSizeForWindow();
    adjustSize.init(node);
    adjustSize.setTopCenterGlobal();
    window.addEventListener("resize", function (event) {
        adjustSize.setTopCenterGlobal();
    });
};

cc.AdjustSizeForWindow.setBottomCenterGlobal = function(node){
    var adjustSize = new cc.AdjustSizeForWindow();
    adjustSize.init(node);
    adjustSize.setBottomCenterGlobal();
    window.addEventListener("resize", function (event) {
        adjustSize.setBottomCenterGlobal();
    });
};