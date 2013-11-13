/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-9-23
 * Time: 下午10:37
 * To change this template use File | Settings | File Templates.
 */
cc.Loaders = cc.Class.extend({
    init:function(resources,callback){
        cc.Loader.getInstance().onload = function () {
            callback();
        };
        cc.Loader.getInstance().onloading = function () {
            cc.LoaderScene.getInstance().draw();
        };
        cc.Loader.getInstance().preload(resources);
    }
});
cc.Loaders.loadInit = function(callback){
    var obj = new cc.Loaders();
    if (obj && obj.init(res_login,callback)) {
        return obj;
    }
    return null;
};

cc.Loaders.loadMain = function(callback){
    var obj = new cc.Loaders();
    if (obj && obj.init(res_main,callback)) {
        return obj;
    }
    return null;
};

cc.Loaders.loadFighting = function(callback){
    var obj = new cc.Loaders();
    if (obj && obj.init(res_fighting,callback)) {
        return obj;
    }
    return null;
};