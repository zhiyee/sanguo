/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-10-10
 * Time: 下午9:33
 * To change this template use File | Settings | File Templates.
 */

sgd.eventArgs = sgd.eventArgs || {};
sgd.eventArgs.LoginIn = cc.Class.extend({
    username:null,
    password:null
});

sgd.eventArgs.LoginIn.create = function(username,password){
    var obj =new sgd.eventArgs.LoginIn();
    obj.username = username;
    obj.password = password;
    return obj;
};
