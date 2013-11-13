var director = null;
var winSize = null;

var CustomTableViewCell = cc.TableViewCell.extend({
    draw:function (ctx) {
        this._super(ctx);
    }
});

//拖动工具层，实现拖动选择精灵的目的
cc.DragToolLayer = cc.Layer.extend({

    menu:null,
    sprites:null,
    margin : 40/7,

    init:function (sprites,dragToolLayer_bg) {
        var bRet = false;
        if (this._super()) {

            this.sprites = sprites;

            //添加底下功能按钮背景
            var layer_bg = cc.Sprite.create(dragToolLayer_bg);
            //this.addChild(layer_bg,0);
            layer_bg.setAnchorPoint(cc.p(0,0));
            layer_bg.setPosition(cc.p(0,0));

            var tableView = cc.TableView.create(this, cc.SizeMake(100, 640));
            tableView.setDirection(cc.SCROLLVIEW_DIRECTION_HORIZONTAL);
            tableView.setAnchorPoint(cc.p(0,0));
            tableView.setPosition(cc.p(0, 0));
            tableView.setDelegate(this);
            this.addChild(tableView);
            tableView.reloadData();
            /*
            var tableView = cc.TableView.create(this, cc.SizeMake(640, 100));
            tableView.setDirection(cc.SCROLLVIEW_DIRECTION_HORIZONTAL);
            tableView.setPosition(cc.p(0,0));
            tableView.setDelegate(this);
            this.addChild(tableView);
            tableView.reloadData();
*/
//            //添加按钮
//            this.menu = cc.Menu.create();
//
//            for(var i=0;i<this.sprites.length;i++)
//            {
//                this.menu.addChild(this.sprites[i]);
//
//                this.sprites[i].setAnchorPoint(cc.p(0,0));
//                this.sprites[i].setPosition(cc.p((i+1)*this.margin+100*i,5));
//            }
//
//        //   menu.alignItemsHorizontally(5);
//
//            this.addChild(this.menu,1);
//           // this.menu.setContentSize(cc.size(this.sprites.length* (this.margin+100)+this.margin, 120));
//            this.menu.setAnchorPoint(cc.p(0,0));
//            this.menu.setPosition(cc.p(0,0));
//           // this.schedule(this.update, 0.1);
//            //屏幕适配（缩放）
//          //  this.scaleToDesign();
//            if(this.sprites.length > 6)
//            {
//
//            if( 'touches' in sys.capabilities )
//                this.setTouchEnabled(true);
//            else if( 'mouse' in sys.capabilities )
//                this.setMouseEnabled(true);
//            }
            bRet = true;
        }

        return bRet;
    },

    scrollViewDidScroll:function (view) {
    },
    scrollViewDidZoom:function (view) {
    },

    tableCellTouched:function (table, cell) {
        cc.log("cell touched at index: " + cell.getIdx());
    },

    cellSizeForTable:function (table) {
        return cc.SizeMake(60, 60);
    },

    tableCellAtIndex:function (table, idx) {
        var strValue = idx.toFixed(0);
        var cell = table.dequeueCell();
        var label;
        if (!cell) {
            cell = new CustomTableViewCell();
            var sprite = cc.Sprite.create(s_btn_chengchi);
            sprite.setAnchorPoint(cc.p(0,0));
            sprite.setPosition(cc.p(0, 0));
            cell.addChild(sprite);

        } else {
            label = cell.getChildByTag(123);
            label.setString(strValue);
        }

        return cell;
    },

    numberOfCellsInTableView:function (table) {
        return 25;
    }

});

cc.DragToolLayer.create = function (sprites,dragToolLayer_bg) {
    var sg = new cc.DragToolLayer();
    if (sg && sg.init(sprites,dragToolLayer_bg)) {
        return sg;
    }
    return null;
};
