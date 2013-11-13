/*****************************************************
 * 作者：yyh
 * 日期：13-6-29
 * 描述：
 * DataSynchronizer 用于同步游戏数据模型，包括从服务器中获取数据以及将当前用户数据同步到服务器中。
 ******************************************************/

/**
 * Data Synchronizer module
 * @class
 * @extends cc.Class
 */


sgd.DataSynchronizer = cc.Class.extend({
    _initialized: false,

    ctor: function() {
        this._url = sgd.Server.url;
        this._socket = sgd.Socket.getInstance();
        console.log('constructor');
    },

    beginSynch: function() {
        if (this._socket){
            console.log('beginSynch at ' + this._socket._state);
            if (this._socket._state !== 2){
                console.log('connecting to ' + this._url);
                // connection to socket server
                this._socket.connect(this._url);

                // initializing
                if (!this._initialized){
                    this._initialized = true;

                    // initialize the event handles for the _socket
                    this._socket.listen('connect', this._synchRequest);

                    this._socket.listen('Res_DataModel', this._synchResponse);
                }
            }else{
                this._synchRequest();
            }
        }
    },

    finishSynch: function() {
        if (this._socket){
            this._socket.disconnect();
        }
    },

    _synchRequest: function() {
        var dataSynch = sgd.DataSynchronizer.getInstance();
        if (dataSynch){
            var data = sgd.DataModel.getInstance();
            console.log(data);
            dataSynch._socket.send('Req_DataModel', {account:"yyh", password:"198312"});
        }
    },

    _synchResponse: function(data) {
        //sgd.DataModel.getInstance().character = data;
        console.log(data);
    }
});


/**
 * get a singleton DataSynchronizer
 * @function
 * @return {sgd.DataSynchronizer}
 */
sgd.DataSynchronizer.getInstance = function () {
    if (!this._instance) {
        this._instance = new sgd.DataSynchronizer();
    }
    return this._instance;
};

sgd.DataSynchronizer._instance = null;
