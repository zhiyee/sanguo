var g_GameLayer={bg:0,button:1,front:2}//游戏中显示的层级
var widthRatio=1;//长比例（本机长：640）
var heightRatio=1;//高比例（本机高：960）

var director = null;
var winSize = null;
var Game = cc.Scene.extend({
    gameLayer:null,//游戏层
    juese_png:null,//角色头像
    tongbi_png:null,//铜币图标
    qianli_png:null,//潜力图标
    yuanbao_png:null,//元宝图标
    tili_png:null,//体力图标

    btn_haidao:null,//海岛按钮
    btn_wujiang:null,//武将按钮
    btn_yisui:null,//易髓按钮
    btn_fuben:null,//副本按钮
    btn_haoyou:null,//好友按钮
    btn_shangcheng:null,//商城按钮


    onEnter:function () {

        this._super();//调用父类的同名方法，这里是调用cc.Scene的onEnter
        director = cc.Director.getInstance();
        winSize = director.getWinSize();
        widthRatio = winSize.width/640;
        heightRatio = winSize.height/960;
       this.initData();//初始化游戏界面

//layer层动画测试
//        var actionTo = cc.SkewTo.create(5, 0, 45);
//        var actionToBack = cc.SkewTo.create(5, 0, 0);
//        var rotateTo = cc.RotateTo.create(5, 300.0);
//        var rotateToBack = cc.RotateTo.create(5, 0);
//        var actionScaleTo = cc.ScaleTo.create(5, -0.44, 0.47);
//        var actionScaleToBack = cc.ScaleTo.create(5, 1.0, 1.0);
//        var actionBy = cc.MoveBy.create(5, cc.p(80, 80));
//        var actionByBack = actionBy.reverse();
//
//        this.gameLayer.runAction(cc.Sequence.create(actionTo, actionToBack, null));
//        this.gameLayer.runAction(cc.Sequence.create(rotateTo, rotateToBack, null));
//        this.gameLayer.runAction(cc.Sequence.create(actionScaleTo, actionScaleToBack));
//        this.gameLayer.runAction(cc.Sequence.create(actionBy, actionByBack));

    },

    initData:function()
    {
        //添加Layer
        this.gameLayer = cc.Layer.create();
        this.addChild(this.gameLayer);
        //添加大背景
        var bg = cc.Sprite.create(s_bg);
        this.gameLayer.addChild(bg,g_GameLayer.bg);
        bg.setAnchorPoint(cc.p(0,0));
        bg.setPosition(cc.p(0,0));

        //添加菜单功能背景及菜单
        this.gameLayer.addChild(cc.ButtonToolLayer.create());

        //添加属性背景
        this.gameLayer.addChild(cc.PropertyToolLayer.create());

        //添加战斗力背景
        var zhandouli_bg = cc.Sprite.create(s_zhandouli_bg);
        this.gameLayer.addChild(zhandouli_bg,g_GameLayer.bg);
        zhandouli_bg.setAnchorPoint(cc.p(0,0));
        zhandouli_bg.setPosition(cc.p(195,854));

        //添加上面功能显示的

        //角色头像
        this.juese_png=cc.Sprite.create(s_juese);
        this.gameLayer.addChild(this.juese_png,g_GameLayer.button);
        this.juese_png.setAnchorPoint(cc.p(0,0));
        this.juese_png.setPosition(cc.p(20,859));

        //铜币图标
        this.tongbi_png=cc.Sprite.create(s_tongbi);
        this.gameLayer.addChild(this.tongbi_png,g_GameLayer.button);
        this.tongbi_png.setAnchorPoint(cc.p(0,0));
        this.tongbi_png.setPosition(cc.p(130,917));

        //铜币数值
        var tongbiNum=cc.LabelTTF.create("99999999","Arial",22);
        this.gameLayer.addChild(tongbiNum,g_GameLayer.button);

        tongbiNum.setPosition(cc.p(207,930));

        //潜力图标
        this.qianli_png=cc.Sprite.create(s_qianli);
        this.gameLayer.addChild(this.qianli_png,g_GameLayer.button);
        this.qianli_png.setAnchorPoint(cc.p(0,0));
        this.qianli_png.setPosition(cc.p(255,917));
        //潜力数值
        //元宝图标
        this.yuanbao_png=cc.Sprite.create(s_yuanbao);
        this.gameLayer.addChild(this.yuanbao_png,g_GameLayer.button);
        this.yuanbao_png.setAnchorPoint(cc.p(0,0));
        this.yuanbao_png.setPosition(cc.p(380,917));
        //元宝数值
        //体力图标
        this.tili_png=cc.Sprite.create(s_tili);
        this.gameLayer.addChild(this.tili_png,g_GameLayer.button);
        this.tili_png.setAnchorPoint(cc.p(0,0));
        this.tili_png.setPosition(cc.p(505,917));
        //体力数值

        //系统按钮
        this.xitong=cc.Sprite.create(s_xitong);
        this.gameLayer.addChild(this.xitong,g_GameLayer.button);
        this.xitong.setAnchorPoint(cc.p(0,0));
        this.xitong.setPosition(cc.p(130,854));

        //战斗力按钮
        this.zhandouli=cc.Sprite.create(s_zhandouli);
        this.gameLayer.addChild(this.zhandouli,g_GameLayer.button);
        this.zhandouli.setAnchorPoint(cc.p(0,0));
        this.zhandouli.setPosition(cc.p(195,854));
        //战斗力数值

        //竞技按钮
        this.jingji=cc.Sprite.create(s_jingji);
        this.gameLayer.addChild(this.jingji,g_GameLayer.button);
        this.jingji.setAnchorPoint(cc.p(0,0));
        this.jingji.setPosition(cc.p(500,854));

        //排名按钮
        this.paiming=cc.Sprite.create(s_paiming);
        this.gameLayer.addChild(this.paiming,g_GameLayer.button);
        this.paiming.setAnchorPoint(cc.p(0,0));
        this.paiming.setPosition(cc.p(565,854));

        //中间5个按钮
        //海岛
        var haidao=cc.Sprite.create(s_haidao);
        this.gameLayer.addChild(haidao,g_GameLayer.button);
        haidao.setAnchorPoint(cc.p(0,0));
        haidao.setPosition(cc.p(100,661));

        //副本
        var fuben=cc.Sprite.create(s_fuben);
        this.gameLayer.addChild(fuben,g_GameLayer.button);
        fuben.setAnchorPoint(cc.p(0,0));
        fuben.setPosition(cc.p(420,661));

        //易髓
        var yisui=cc.Sprite.create(s_yisui);
        this.gameLayer.addChild(yisui,g_GameLayer.button);
        yisui.setAnchorPoint(cc.p(0,0));
        yisui.setPosition(cc.p(250,421));

        //好友
        var haoyou=cc.Sprite.create(s_haoyou);
        this.gameLayer.addChild(haoyou,g_GameLayer.button);
        haoyou.setAnchorPoint(cc.p(0,0));
        haoyou.setPosition(cc.p(100,181));

        //武将
        var wujiang=cc.Sprite.create(s_wujiang);
        this.gameLayer.addChild(wujiang,g_GameLayer.button);
        wujiang.setAnchorPoint(cc.p(0,0));
        wujiang.setPosition(cc.p(420,181));
    }

});
