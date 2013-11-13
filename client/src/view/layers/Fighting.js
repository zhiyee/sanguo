/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-10-20
 * Time: 下午5:10
 * To change this template use File | Settings | File Templates.
 */
sgd.layers = sgd.layers || {};
sgd.layers.Fighting = cc.layers.LayerOfCenter.extend({
    _name:'Layers.Fighting',
    _heroPosition:[
        {x:5,y:9},
        {x:3,y:9},
        {x:1,y:9},
        {x:6,y:7},
        {x:4,y:7},
        {x:2,y:7},
        {x:0,y:7},
        {x:6,y:2},
        {x:4,y:2},
        {x:2,y:2},
        {x:0,y:2},
        {x:5,y:0},
        {x:3,y:0},
        {x:1,y:0}
    ],
    _heros:[],
    init:function (fighting_data) {
        var bRet = false;
        if (this._super()) {
            //添加底下功能按钮背景
            var bg = cc.Sprite.create(s_login_bg);
            this.addChild(bg);
            bg.setAnchorPoint(cc.p(0.5,0.5));
            cc.AdjustSizeForWindow.setCenter(bg);

            cc.SpriteFrameCache.getInstance().addSpriteFrames(s_caocao_plist);


            for(var i=0;i<this._heroPosition.length;i++) {
                this._heros[i] = sgd.sprites.Hero.create();
                this.addChild(this._heros[i]);
                bg.setAnchorPoint(cc.p(0,5,0));
                this._heros[i].setPosition(sgd.CoordinateAxes.getInstance().getNewPosition(this._heroPosition[i]));
            }

            bRet = true;
        }
        return bRet;
    }
});

sgd.layers.Fighting.create = function (fighting_data) {
    var obj = new sgd.layers.Fighting();
    if (obj && obj.init(fighting_data)) {
        return obj;
    }
    return null;
};
