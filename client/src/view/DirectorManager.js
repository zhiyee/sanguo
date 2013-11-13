/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-9-23
 * Time: 下午10:48
 * To change this template use File | Settings | File Templates.
 */
sgd.DirectorManager = cc.Class.extend({
    _director: null,

    ctor: function() {
        // initialize director
        this._director = cc.Director.getInstance();
    },

    start: function(config){
        // turn on display FPS
        this._director.setDisplayStats(config.showFPS);
        // set FPS. the default value is 1.0/60 if you don't call this
        this._director.setAnimationInterval(1.0 / config.frameRate);

        this.runLogin();
    },

    runLogin: function(){
        var scene = sgd.scenes.Login.create({x:0,y:0});
        this._director.runWithScene(scene);
        sgd.EventAggregator.getInstance().subscribe(sgd.EventTags.LOGIN_RESULT,function(event_Result){
            if(event_Result.result){
                var res = sgd.eventArgs.Result.create(true,'load resource');
                sgd.EventAggregator.getInstance().publish(sgd.EventTags.LOADING_RES,res);
                cc.Loaders.loadMain(function(){
                    res = sgd.eventArgs.Result.create(true,'loaded main resource');
                    sgd.EventAggregator.getInstance().publish(sgd.EventTags.LOADED_RES,res);
                });
            }
            else  scene.showError(event_Result.message);
        });
        return true;
    },
    runMain: function(){
        var scene = sgd.scenes.Main.create({x:0,y:0});
        this._director.runWithScene(scene);
    } ,
    runFighting: function(){
        cc.Loaders.loadFighting(function(){
            var scene = sgd.scenes.Fighting.create();
            sgd.DirectorManager.getInstance()._director.replaceScene(scene);
        });
    }
});


/**
 * get a singleton Operator
 * @function
 * @return {sgd.Operator}
 */
sgd.DirectorManager.getInstance = function () {
    if (!this._instance) {
        this._instance = new sgd.DirectorManager();
    }
    return this._instance;
};

sgd.DirectorManager._instance = null;
