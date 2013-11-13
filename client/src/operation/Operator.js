/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-9-23
 * Time: 下午10:48
 * To change this template use File | Settings | File Templates.
 */
sgd.Operator = cc.Class.extend({

    ctor: function() {

    },

    start: function(config){
        sgd.DirectorManager.getInstance().start(config);

        sgd.EventAggregator.getInstance().subscribe(sgd.EventTags.REG_LOAD,function(){
            sgd.DirectorManager.getInstance().runFighting();
        });

        sgd.EventAggregator.getInstance().subscribe(sgd.EventTags.LOGIN_IN,function(Login_Event_In){

            //根据Login_Event_In.username，Login_Event_In.password获得用户输入的用户名和密码
            //在这需根据用户名和密码判断是否登录成功，需从服务器返回登录结果

            var args;
            if(Login_Event_In.username==Login_Event_In.password)
            {
                args = sgd.eventArgs.Result.create(true,"登录成功");
            }else{
                args = sgd.eventArgs.Result.create(false,"登录失败");
            }
            cc.Logger.getInstance().event_fire(this,sgd.EventTags.LOGIN_IN, args);
            sgd.EventAggregator.getInstance().publish(sgd.EventTags.LOGIN_RESULT,args);
        });
        var userData = null;
        sgd.EventAggregator.getInstance().subscribe(sgd.EventTags.LOADING_RES,function(){
            //从服务器获取用户数据
           // userData =netData;
        });

        sgd.EventAggregator.getInstance().subscribe(sgd.EventTags.LOADED_RES,function(){

            sgd.Operator.getInstance().runMainScene(userData);
        });
    },

    runMainScene: function(userData) {
        sgd.DirectorManager.getInstance().runMain(userData);

        sgd.EventAggregator.getInstance().subscribe(sgd.EventTags.GOTO_CASTLE_SCENE,function(){
            alert("城池");
        });
    }
});


/**
 * get a singleton Operator
 * @function
 * @return {sgd.Operator}
 */
sgd.Operator.getInstance = function () {
    if (!this._instance) {
        this._instance = new sgd.Operator();
    }
    return this._instance;
};

sgd.Operator._instance = null;
