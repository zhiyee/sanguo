/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-9-23
 * Time: 下午10:58
 * To change this template use File | Settings | File Templates.
 */

sgd.scenes = sgd.scenes || {};
sgd.scenes.Login = cc.Scene.extend({
    init:function (data) {
        if (this._super()) {
            var layer = sgd.layers.Login.create();
            this.addChild(layer);
        }
    },
    showError:function(message){
        alert("error:"+message);
    }
});

sgd.scenes.Login.create = function (login_data) {
    var obj = new sgd.scenes.Login();
    obj.init(login_data);
    return obj;
};