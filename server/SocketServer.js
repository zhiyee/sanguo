/**
 * Created with JetBrains WebStorm.
 * User: yyh
 * Date: 13-3-2
 * Time: AM12:20
 * To change this template use File | Settings | File Templates.
 */

var http = require('http');
var socketio = require('socket.io');

var UserManager = new require('./UserManager');
var UserSession = require('./UserSession');

var UserMgr = new UserManager();


var OnConnected = function (socket, mysql)
{
    socket.on( 'disconnect', function (reason) { OnDisConnected(socket, reason, mysql); } );

    socket.on( "Req_DataModel", function (data) { OnReqDataModel(socket, data, mysql); } );

}

var OnDisConnected = function (socket, reason, mysql)
{
    console.log('Disconnected for reason: ' + reason);

    var user = UserMgr.GetUserBySocket(socket);
    if(user)
    {
        //mysql.UpdateUserStatus(user.userid, 0);
    }

    UserMgr.RemoveUserBySocket(socket);
}

var OnReqDataModel = function (socket, data, mysql)
{
    try
    {
        var user = UserMgr.GetUserByAccount(data.account);
        if ( user != null && user.socket != socket)
        {
            user.socket.disconnect();
            UserMgr.RemoveUserBySocket(user.socket);
            console.log('Force disconnect previous user: ' + data.account);
        }

        console.log('Login by user: ' + data.account);

        user = new UserSession(socket, data.account, data.password);

        UserMgr.AddUser(user);

        //data.character.level = data.character.level + 1;
        socket.emit("Res_DataModel", {status:200});
    }
    catch (err)
    {
        console.log(err);
    }
}

function SocketServer(mysql)
{
    this.app = http.createServer();
    this.io = socketio.listen(this.app);
    this.io.configure('production', function(){
        this.io.enable('browser client etag');
        this.io.set('log level', 1);

        this.io.set('transports', [
            'websocket'
            , 'flashsocket'
            , 'htmlfile'
            , 'xhr-polling'
            , 'jsonp-polling'
        ]);
    });

    this.io.sockets.on('connection', function (socket) { OnConnected(socket, mysql); } );
}

SocketServer.prototype.Start = function (port)
{
    this.app.listen(port);
    console.log("Listen at " + port);
}

SocketServer.prototype.Send2User = function(userid, name, data)
{
    UserMgr.Send2User(userid, name, data);
}

SocketServer.prototype.SendAll = function(name, data)
{
    UserMgr.SendAll(name, data);
}

SocketServer.prototype.UserCount = function ()
{
    return UserMgr.UserCount();
}

SocketServer.prototype.GetUserAt = function (index)
{
    return UserMgr.GetUserAt(index);
}

module = module.exports = SocketServer;


