/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org

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

// boot code needed for cocos2d-html5
// Not needed by cocos2d + JS bindings

var sgd = sgd || {};
sgd.SOUND = true;

(function () {
    var d = document;
    var c = {
        COCOS2D_DEBUG:2, //0 to turn debug off, 1 for basic debug, and 2 for full debug
        showFPS:true,
        loadExtension:true,
        frameRate:60,
        tag:'gameCanvas', //the dom element to run cocos2d on
        engineDir:'./Cocos2d-html5/cocos2d/',
        appFiles:[
            'Log.js',
            'Resource.js',
            'src/config/GameConfig.js',
            'src/lib/socket.io.min.js',
            'src/event/EventAggregator.js',
            'src/event/EventTags.js',
            'src/model/eventArgs/LoginIn.js',
            'src/model/eventArgs/RegIn.js',
            'src/model/eventArgs/Result.js',
            'src/model/GameModel.js',
            'src/model/viewModels/actions.js',
            'src/model/viewModels/Buttons.js',
            'src/model/viewModels/icons.js',
            'src/model/viewModels/Resolution.js',
            'src/model/viewModels/ViewModels.js',
            'src/operation/DataSynchronizer.js',
            'src/operation/Operator.js',
            'src/operation/Socket.js',
            'src/view/DirectorManager.js',
            'src/view/Loaders.js',
            'src/view/CoordinateAxes.js',
            'src/view/TextField.js',
            'src/view/AdjustSizeForWindow.js',
            'src/view/bars/Bottom.js',
            'src/view/buttons/Login.js',
            'src/view/scenes/Fighting.js',
            'src/view/scenes/Login.js',
            'src/view/scenes/Main.js',
            'src/view/layers/LayerBase.js',
            'src/view/layers/LayerOfCenter.js',
            'src/view/layers/LayerOfTop.js',
            'src/view/layers/LayerOfBottom.js',
            'src/view/layers/Login.js',
            'src/view/layers/Fighting.js',
            'src/view/layers/Main.js',
            'src/view/layers/ToolBarBottom.js',
            'src/view/Sprites/Hero.js'


        ]
    };
    window.addEventListener('DOMContentLoaded', function () {
        //first load engine file if specified
        var s = d.createElement('script');
        /*********Delete this section if you have packed all files into one*******/
        if (c.SingleEngineFile && !c.engineDir) {
            s.src = c.SingleEngineFile;
        }
        else if (c.engineDir && !c.SingleEngineFile) {
            s.src = c.engineDir + 'platform/jsloader.js';
        }
        else {
            alert('You must specify either the single engine file OR the engine directory in "cocos2d.js"');
        }
        /*********Delete this section if you have packed all files into one*******/

            //s.src = 'Packed_Release_File.js'; //IMPORTANT: Un-comment this line if you have packed all files into one

        d.body.appendChild(s);
        document.ccConfig = c;
        s.id = 'cocos2d-html5';
        //else if single file specified, load singlefile
    });
})();
