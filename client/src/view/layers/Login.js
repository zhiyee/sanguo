/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-9-25
 * Time: 下午10:11
 * To change this template use File | Settings | File Templates.
 */
sgd.layers.Login = cc.layers.LayerOfCenter.extend({
    _name:'Layer_Login',
    _textField_user:null,
    _textField_pwd:null,
    init:function () {
        var bRet = false;
        if (this._super()) {
            //添加底下功能按钮背景
            var bg = cc.Sprite.create(s_login_bg);
            this.addChild(bg);
            bg.setAnchorPoint(cc.p(0.5,0.5));
            cc.AdjustSizeForWindow.setCenter(bg);

            var label_Title = cc.LabelTTF.create("三国岛江湖", "Arial", 45);
            label_Title.setAnchorPoint(cc.p(0.5, 0.5));
            label_Title.setPosition(cc.p(sgd.viewModels.Resolution.width / 2, sgd.viewModels.Resolution.height - 100));
            this.addChild(label_Title);

            this._textField_pwd = cc.TextField.create('password','点击输入密码');//"password",sgd.Settings.Client.FONT, 32);
            this._textField_pwd.setAnchorPoint(cc.p(0.5, 0.5));
            this._textField_pwd.setPosition(cc.p(sgd.viewModels.Resolution.width/2, sgd.viewModels.Resolution.height*4/7));
            this.addChild(this._textField_pwd);

            this._textField_user = cc.TextField.create('username','点击输入用户名');
            this._textField_user.setAnchorPoint(cc.p(0.5, 0.5));
            this._textField_user.setPosition(cc.p(sgd.viewModels.Resolution.width/2, sgd.viewModels.Resolution.height*2/3));
            this.addChild(this._textField_user);

            var button_login_exit = new sgd.buttons.Login.create('退出',function(){alert("exit now!");},this);
            button_login_exit.setPosition(cc.p(sgd.viewModels.Resolution.width - 80, sgd.viewModels.Resolution.height - 60));
            this.addChild(button_login_exit);

            var button_login_in = new sgd.buttons.Login.create('登陆',this.on_login_in,this);
            button_login_in.setPosition(cc.p(sgd.viewModels.Resolution.width/5, sgd.viewModels.Resolution.height/3));
            this.addChild(button_login_in);

            var button_login_reg = new sgd.buttons.Login.create('注册',this.on_reg,this);
            button_login_reg.setPosition(cc.p(sgd.viewModels.Resolution.width*4/5, sgd.viewModels.Resolution.height/3));
            this.addChild(button_login_reg,100);

            //this.setMouseEnabled(false);
            bRet = true;
        }
        return bRet;
    },
    onLoginIn:function(sender){
        var args = sgd.eventArgs.LoginIn.create(this._textField_user.getString(),this._textField_pwd.getString());
        cc.Logger.getInstance().event_fire(this,sgd.EventTags.LOGIN_IN, args);
        sgd.EventAggregator.getInstance().publish(sgd.EventTags.LOGIN_IN,args);
    },
    onReg:function(sender){
        var args = sgd.eventArgs.Result.create(true,'');
        cc.Logger.getInstance().event_fire(this,sgd.EventTags.REG_LOAD, args);
        sgd.EventAggregator.getInstance().publish(sgd.EventTags.REG_LOAD,args);
    }
});

sgd.layers.Login.create = function () {
    var obj = new sgd.layers.Login();
    if (obj && obj.init()) {
        return obj;
    }
    return null;
};
