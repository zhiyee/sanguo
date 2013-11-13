/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-10-27
 * Time: 下午4:20
 * To change this template use File | Settings | File Templates.
 */

sgd.eventArgs = sgd.eventArgs || {};
sgd.eventArgs.RegIn = cc.Class.extend({
    username:null,
    password:null
});

sgd.eventArgs.RegIn.create = function(username,password){
    var obj =new sgd.eventArgs.RegIn();
    obj.username = username;
    obj.password = password;
    return obj;
};
