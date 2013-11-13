/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-10-27
 * Time: 下午5:32
 * To change this template use File | Settings | File Templates.
 * 阵法
 */

var standbyPositions ={
    me :[
        {x:1,y:0},
        {x:3,y:0},
        {x:5,y:0},
        {x:0,y:2},
        {x:2,y:2},
        {x:4,y:2},
        {x:6,y:2}
    ],
    enemy: [
        {x:5,y:9},
        {x:3,y:9},
        {x:1,y:9},
        {x:6,y:7},
        {x:4,y:7},
        {x:2,y:7},
        {x:0,y:7}
    ]
};

sgd.Model = sgd.Model || {};
sgd.Model.Tactics = cc.Class.extend({
    _type:0,
    _name:null
});

sgd.Model.Tactics.create = function(username,password){
    var obj =new sgd.Model.Tactics();
    obj.username = username;
    obj.password = password;
    return obj;
};