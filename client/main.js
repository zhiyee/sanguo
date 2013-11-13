/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org


 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var cocos2dApp = cc.Application.extend({
    config:document['ccConfig'],
    ctor:function () {
        this._super();
        var selfPointer = this;
        cc.COCOS2D_DEBUG = this.config.COCOS2D_DEBUG;
        cc.setup(this.config.tag);
        //loading
        cc.Loaders.loadInit(cc.AppController.shareAppController().didFinishLaunchingWithOptions);

        this.adjustSizeForWindow();
        window.addEventListener("resize", function (event) {
            selfPointer.adjustSizeForWindow();
        });
    },
    applicationDidFinishLaunching:function () {
        sgd.Operator.getInstance().start(this.config);
        return true;
    },
    adjustSizeForWindow:function(){
        sgd.viewModels.Resolution.width =document.documentElement.clientWidth;
        sgd.viewModels.Resolution.height = document.documentElement.clientHeight;
        sgd.viewModels.Resolution.scaleX = sgd.viewModels.Resolution.width/cc.originalCanvasSize.width;
        sgd.viewModels.Resolution.scaleY = sgd.viewModels.Resolution.height/cc.originalCanvasSize.height;
        cc.canvas.width = sgd.viewModels.Resolution.width;
        cc.canvas.height = sgd.viewModels.Resolution.height;

        var parentDiv = document.getElementById("Cocos2dGameContainer");
        if (parentDiv) {
            parentDiv.style.width = cc.canvas.width + "px";
            parentDiv.style.height = cc.canvas.height + "px";
        }
        cc.renderContext.translate(0, cc.canvas.height);
    }
});
var myApp = new cocos2dApp();
