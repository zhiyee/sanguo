/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-10-10
 * Time: 下午9:38
 * To change this template use File | Settings | File Templates.
 */

sgd.eventArgs = sgd.eventArgs || {};
sgd.eventArgs.Result = cc.Class.extend({
    result:true,
    message:null
});

sgd.eventArgs.Result.create = function(result,message){
    var obj =new sgd.eventArgs.Result();
    obj.result = result;
    obj.message = message;
    return obj;
};