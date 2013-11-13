/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-9-26
 * Time: 下午10:42
 * To change this template use File | Settings | File Templates.
 */
cc.Logger = cc.Class.extend({
    event_fire:function(evni,subscriber,args){
        cc.log('* fire event:<'+subscriber + '> args<'+JSON.stringify(args) + '> sender<'+evni._name+'>');
        //console.log('{'+evni._name+'} fire event:'+subscriber + 'args:'+JSON.stringify(args));
    },
    info:function(evni,message){
        cc.log('+ out info:<'+message + '> sender<'+evni._name+'>');
    }

});
cc.Logger.getInstance = function () {
    if (!this._instance) {
        this._instance = new cc.Logger();
    }
    return this._instance;
};

cc.Logger._instance = null;
