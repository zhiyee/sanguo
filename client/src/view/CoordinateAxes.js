/**
 * Created with JetBrains WebStorm.
 * User: zz
 * Date: 13-10-20
 * Time: 下午4:33
 * To change this template use File | Settings | File Templates.
 */
sgd.CoordinateAxes = cc.Class.extend({
    _x:0,
    _y:0,
    _rotate:45,
    _dx:56,
    _dy:56,
    _x0: 380,
    _y0:130,
    setRotate:function(r){
        this._rotate = r;
    },
    getNewPosition:function(pOld){
        this._x0 = sgd.ViewModel.Resolution.width*19/32;
        if(this._rotate != 45){
            var sin = Math.sin(2*3.14159*this._rotate/360);
            var cos = Math.cos(2*3.14159*this._rotate/360);
            return cc.p(this._x0+this._dx*cos*pOld.x-this._dy*sin*pOld.y,this._y0+this._dx*sin*pOld.x+this._dy*cos*pOld.y);
        }else{
            return cc.p(this._x0+40*pOld.x-40*pOld.y,this._y0+40*pOld.x+40*pOld.y);
        }
    }
});
sgd.CoordinateAxes.getInstance = function(){
   sgd.CoordinateAxes._instance = sgd.CoordinateAxes._instance || (new sgd.CoordinateAxes());
    return sgd.CoordinateAxes._instance;
}

sgd.CoordinateAxes._instance = null;