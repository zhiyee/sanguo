/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-9-23
 * Time: 下午10:58
 * To change this template use File | Settings | File Templates.
 */
sgd.scenes = sgd.scenes || {};
sgd.scenes.Main = cc.Scene.extend({
    init:function (userData) {
        if (this._super()) {
            var layer = sgd.layers.Main.create(userData);
            this.addChild(layer);
        }
    },
    showError:function(message){
        alert("error:"+message);
    }
});

sgd.scenes.Main.create = function (userData) {
    var obj = new sgd.scenes.Main();
    obj.init(userData);
    return obj;
};