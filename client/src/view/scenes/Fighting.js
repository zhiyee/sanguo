/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-10-20
 * Time: 下午5:26
 * To change this template use File | Settings | File Templates.
 */
sgd.scenes = sgd.scenes || {};
sgd.scenes.Fighting = cc.Scene.extend({
    init:function () {
        if (this._super()) {
            var layer = sgd.layers.Fighting.create();
            this.addChild(layer);
        }
    }
});

sgd.scenes.Fighting.create = function () {
    var obj = new sgd.scenes.Fighting();
    obj.init();
    return obj;
};