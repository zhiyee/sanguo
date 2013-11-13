/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-11-11
 * Time: 下午9:24
 * To change this template use File | Settings | File Templates.
 */
sgd.viewModels = sgd.viewModels || {};

/**
 * resolution module
 * @class
 * @extends cc.Class
 */
sgd.viewModels.Resolution = cc.Class.extend({
    width:0,
    height:0,
    scaleX:0,
    scaleY:0,
    fix_scaleY:0
});
sgd.viewModels.Resolution.getContentSize = function(){
    return {width:this.width,height:this.height};
};