cc.PropertyToolLayer = cc.ScreenAdapteLayer.extend({

    init:function () {
        var bRet = false;
        if (this._super()) {

            //添加底下功能按钮背景
            var shuxing_bg = cc.Sprite.create(s_shuxing_bg);
            this.addChild(shuxing_bg,0);
            shuxing_bg.setAnchorPoint(cc.p(0,0));
            shuxing_bg.setPosition(cc.p(0,850));
            bRet = true;
        }

        return bRet;
    },
    onBackCallback:function (pSender) {
        var scene = cc.Scene.create();
        scene.addChild(SysMenu.create());
        cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, scene));
    },
    onSoundControl:function(){
        MW.SOUND = !MW.SOUND;
        var audioEngine = cc.AudioEngine.getInstance();
        if(MW.SOUND){
            audioEngine.playMusic(s_mainMainMusic);
        }
        else{
            audioEngine.stopMusic();
        }
    },
    onModeControl:function(){
    }
});

cc.PropertyToolLayer.create = function () {
    var sg = new cc.PropertyToolLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};
