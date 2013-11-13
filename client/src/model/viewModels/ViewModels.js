/*****************************************************
 * 作者：yyh
 * 日期：13-7-18
 * 描述：
 * ViewModel 用于描述视图数据模型
 ******************************************************/

sgd.viewModels = sgd.viewModels || {};


sgd.viewModels.Button = sgd.viewModels.Button || {};

//sgd.ViewModel.Toolbar_Bottom_Buttons = [
//    sgd.ViewModel.Button.Castle,
//    sgd.ViewModel.Button.Instance
//];
//
//
//sgd.ViewModel.Button.Base = cc.Class.extend({
//    image_normal:null,
//    image_touch:null,
//    image_disable:null,
//    callback:null
//});
//
//sgd.ViewModel.Button.Base.create = function(image_src,callback){
//    var obj =new sgd.ViewModel.Button.Base();
//    obj.image_normal = image_src;
//    obj.image_touch = image_src;
//    obj.image_disable = image_src;
//    obj.callback = callback;
//    return obj;
//};
//
//sgd.ViewModel.Button.Castle = sgd.ViewModel.Button.Base.create(
//    s_toolbar_bottom_btn_castle,
//    function(){
//        sgd.EventAggregator.getInstance().publish(sgd.Subscriber.LOAD_CASTLE,null);
//    }
//);
//
//sgd.ViewModel.Button.Instance = sgd.ViewModel.Button.Base.create(
//    s_toolbar_bottom_btn_instance,
//    function(){
//        sgd.EventAggregator.getInstance().publish(sgd.Subscriber.LOAD_INSTANCE,null);
//    }
//);
//
//



/**
 * PlayerInfo module
 * @class
 * @extends cc.Class
 */
sgd.viewModels.PlayerInfo = cc.Class.extend({
    NickName: null,
    Bronze: 0,
    Silver: 0,
    Treasure: 0,
    Enhance: 0,
    TotalPower: 0,
    Energy: 0
});

/**
 * PlayerImages module
 * @class
 * @extends cc.Class
 */
sgd.viewModels.PlayerImages = cc.Class.extend({
    HeadPhoto: null,
    MainPhoto: null
});

/**
 * MainCastle module
 * @class
 * @extends cc.Class
 */
sgd.viewModels.MainCastle = cc.Class.extend({
    UserID: 0,
    CastleID: 0,
    Level: 0,
    Name: null,
    Comment: null,
    Image: null
});
