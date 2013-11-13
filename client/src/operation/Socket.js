/*****************************************************
 * 作者：YYH
 * 日期：2013-06-29
 * 描述：
 * 网络通信模块，提供publish、subscribe、cancelSubscribe三个接口。
 ******************************************************/

/**
 * socket module
 * @class
 * @extends cc.Class
 */
sgd.Socket = cc.Class.extend({
    // state of the socket. -1: error, 0: uninitialized, 1: disconnected, 2: connected.
    state: 0,

    // the connect callback, don't use 'this' property
    _onConnect: function() {
        var sock = sgd.Socket.getInstance();
        sock.state = 2;
        console.log("connected to server: " + sock._url);
    },

    // the disconnect callback, don't use 'this' property
    _onDisconnect: function() {
        var sock = sgd.Socket.getInstance();
        sock.state = 1;
        console.log("disconnected to server: " + sock._url);
    },

    // the socket error callback, don't use 'this' property
    _onError: function() {
        var sock = sgd.Socket.getInstance();
        sock.state = -1;
        console.log("socket error at server: " + sock._url);
    },

    // connect to the server
    connect: function(url) {
        if (!this._url){
            this._url = url;
            this.socket = io.connect(this._url, {'reconnect':false});

            this.listen('connect', this._onConnect);

            this.listen('disconnect', this._onDisconnect);

            this.listen('error', this._onError);
        }else{
            if (url !== this._url){
                // connect to another server.
                console.warn("Reconnecting to another server " + url);
                this.disconnect();
                delete io.sockets[this._url];
                io.j = [];
                this._url = null;
                this.state = 0;
                this.socket = null;
                this.connect(url);
            }else{
                if (this.state !== 2){
                    console.debug("reconnecting to server: " + this._url);
                    this.socket.socket.reconnect();
                }else{
                    console.warn("Connection already exist at " + this._url);
                }
            }
        }
    },

    disconnect: function(){
        if (this.socket){
            console.debug("disconnecting from server: " + this._url);
            this.socket.disconnect();
        }
    },

    send:function(msg, data){
        if (this.socket && this.state == 2){
            console.log("sending message: " + msg);
            this.socket.emit(msg, data);
        }else{
            console.log(this.socket + " sending failed at state " + this.state);
        }
    },

    listen:function(msg, handle){
        if (this.socket){
            this.socket.on(msg, handle);
        }
    }
});

/**
 * get a singleton Socket
 * @function
 * @return {sgd.Socket}
 */
sgd.Socket.getInstance = function () {
    if (!this._instance) {
        this._instance = new sgd.Socket();
    }
    return this._instance;
};

sgd.Socket._instance = null;
