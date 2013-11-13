
var TEXT_INPUT_FONT_NAME = "Thonburi";
var TEXT_INPUT_FONT_SIZE = 36;

var textInputGetRect = function (node) {
    var pos = node.getPosition();
    var cs = node.getContentSize();
    var rc = cc.rect(pos.x, pos.y, cs.width, cs.height);
    rc.origin.x -= rc.size.width / 2;
    rc.origin.y -= rc.size.height / 2;
    return rc;
};

cc.TextField = cc.LayerColor.extend({
    _trackNode:null,
    _textFieldAction:null,
    _action:false,
    _charLimit:0, // the textfield max char limit
    _defaultText:'<click here for input>',
    _inputFontName:"Thonburi",
    _inputFontSize:36,
    _intputFontColor:new cc.Color3B(0, 0, 0),

    ctor:function() {
        this._super();

        if( 'touches' in sys.capabilities )
            this.setTouchEnabled(true);
        else if ('mouse' in sys.capabilities )
            this.setMouseEnabled(true);

        this.init();
        this.setContentSize(cc.size(374,36));
        this.setOpacity(0);
    },
    init:function(name,defaultText){
        this.name = name;
        this._defaultText = defaultText;
        return true;
    },

    setCharFontStyle:function(fontName,fontSize){
        this._inputFontName = fontName;
        this._inputFontSize = fontSize;
    },

    setCharColor:function(color) {
        this._intputFontColor = color;
    },

    setCharLimit:function(limit) {
        this._charLimit = limit;
    },

    getString:function(){
        return this._trackNode.getString();
    },

    //CCLayer
    onEnter:function () {
        this._super();

        this._charLimit = 20;
        this._textFieldAction = cc.RepeatForever.create(
            cc.Sequence.create(
                cc.FadeOut.create(0.25),
                cc.FadeIn.create(0.25)));
        this._action = false;

        // add CCTextFieldTTF

        var textField = cc.TextFieldTTF.create(this._defaultText,
            this._inputFontName,
            this._inputFontSize);
        this.addChild(textField);
        textField.setDelegate(this);
        textField.setColorSpaceHolder(this._intputFontColor);
        textField.setPosition(cc.p(this.getContentSize().width/2, this.getContentSize().height/2));
        this._trackNode = textField;
    },
    onExit:function () {
        this._super();
    },

    onTouchesEnded:function (touches, event) {
        if (!this._trackNode)
            return;

        // grab first touch
        if(touches.length == 0)
            return;

        var touch = touches[0];
        var point = touch.getLocation();

        // decide the trackNode is clicked.
        var clickedPoint = cc.p(
            point.x + this.getContentSize().width*this.getAnchorPoint().x - this.getPositionX(),
            point.y + this.getContentSize().height*this.getAnchorPoint().y - this.getPositionY()
        );

        var rect = textInputGetRect(this._trackNode);
        this.onClickTrackNode(cc.Rect.CCRectContainsPoint(rect, clickedPoint));
    },
    onMouseUp:function (event) {
        if (!this._trackNode)
            return;

        var point = event.getLocation();

        // decide the trackNode is clicked.
        var clickedPoint = cc.p(
            point.x + this.getContentSize().width*this.getAnchorPoint().x - this.getPositionX(),
            point.y + this.getContentSize().height*this.getAnchorPoint().y - this.getPositionY()
        );

        var rect = textInputGetRect(this._trackNode);
        this.onClickTrackNode(cc.Rect.CCRectContainsPoint(rect, clickedPoint));
    },

    onClickTrackNode:function (clicked) {
        var textField = this._trackNode;
        if (clicked) {
            // TextFieldTTFTest be clicked
            textField.attachWithIME();
        } else {
            // TextFieldTTFTest not be clicked
            textField.detachWithIME();
        }
    },

    //CCTextFieldDelegate
    onTextFieldAttachWithIME:function (sender) {
        if (!this._action) {
            this._trackNode.runAction(this._textFieldAction);
            this._action = true;
        }
        return false;
    },
    onTextFieldDetachWithIME:function (sender) {
        if (this._action) {
            this._trackNode.stopAction(this._textFieldAction);
            this._trackNode.setOpacity(255);
            this._action = false;
        }
        return false;
    },

    keyboardWillShow:function (info) {
        cc.log("TextInputTest:keyboardWillShowAt(origin:" + info.end.origin.x + "," + info.end.origin.y
            + ", size:" + info.end.size.width + "," + info.end.size.height + ")");

        if (!this._trackNode)
            return;

        var rectTracked = textInputGetRect(this._trackNode);
        cc.log("TextInputTest:trackingNodeAt(origin:" + info.end.origin.x + "," + info.end.origin.y
            + ", size:" + info.end.size.width + "," + info.end.size.height + ")");

        // if the keyboard area doesn't intersect with the tracking node area, nothing need to do.
        if (!cc.Rect.CCRectIntersectsRect(rectTracked, info.end))
            return;

        // assume keyboard at the bottom of screen, calculate the vertical adjustment.
        var adjustVert = cc.Rect.CCRectGetMaxY(info.end) - cc.Rect.CCRectGetMinY(rectTracked);
        cc.log("TextInputTest:needAdjustVerticalPosition(" + adjustVert + ")");

        // move all the children node of KeyboardNotificationLayer
        var children = this.getChildren();
        for (var i = 0; i < children.length; ++i) {
            var node = children[i];
            var pos = node.getPosition();
            pos.y += adjustVert;
            node.setPosition(pos);
        }
    },

    callbackRemoveNodeWhenDidAction:function (node) {
        this.removeChild(node, true);
    },
    onTextFieldInsertText:function (sender, text, len) {
        sender._color = this._intputFontColor;
        // if insert enter, treat as default to detach with ime
        if ('\n' == text) {
            return false;
        }

        // if the textfield's char count more than m_nCharLimit, doesn't insert text anymore.
        if (sender.getCharCount() >= this._charLimit) {
            return true;
        }

        // create a insert text sprite and do some action
        var label = cc.LabelTTF.create(text, this._inputFontName, this._inputFontSize);
        this.addChild(label);
        var color = new cc.Color3B(100, 100, 255);
        label.setColor(color);

        // move the sprite from top to position
        var endPos = cc.p(sender.getPositionX(), sender.getPositionY());
        if (sender.getCharCount()) {
            endPos.x += sender.getContentSize().width / 2;
        }
        var inputTextSize = label.getContentSize();
        var beginPos = cc.p(endPos.x, cc.Director.getInstance().getWinSize().height - inputTextSize.height * 2);

        var duration = 0.5;
        label.setPosition(beginPos);
        label.setScale(5);

        var seq = cc.Sequence.create(
            cc.Spawn.create(
                cc.MoveTo.create(duration, endPos),
                cc.ScaleTo.create(duration, 1),
                cc.FadeOut.create(duration)),
            cc.CallFunc.create(this.callbackRemoveNodeWhenDidAction, this));
        label.runAction(seq);
        return false;
    },

    onTextFieldDeleteBackward:function (sender, delText, len) {
        // create a delete text sprite and do some action
        var label = cc.LabelTTF.create(delText, this._inputFontName, this._inputFontSize);
        this.addChild(label);

        // move the sprite to fly out
        var beginPos = cc.p(sender.getPositionX(), sender.getPositionY());
        var textfieldSize = sender.getContentSize();
        var labelSize = label.getContentSize();
        beginPos.x += (textfieldSize.width - labelSize.width) / 2.0;

        var winSize = cc.Director.getInstance().getWinSize();
        var endPos = cc.p(-winSize.width / 4.0, winSize.height * (0.5 + Math.random() / 2.0));

        var duration = 1;
        var rotateDuration = 0.2;
        var repeatTime = 5;
        label.setPosition(beginPos);
        label.setColor(this._intputFontColor);
        var seq = cc.Sequence.create(
            cc.Spawn.create(
                cc.MoveTo.create(duration, endPos),
                cc.Repeat.create(
                    cc.RotateBy.create(rotateDuration, (Math.random() % 2) ? 360 : -360),
                    repeatTime),
                cc.FadeOut.create(duration)),
            cc.CallFunc.create(this.callbackRemoveNodeWhenDidAction, this));
        label.runAction(seq);
        return false;
    },
    onDraw:function (sender) {
        return false;
    }
});



cc.TextField.create = function (name,defaultText) {
    var obj = new cc.TextField();
    if (obj && obj.init(name,defaultText)) {
        return obj;
    }
    return null;
};
