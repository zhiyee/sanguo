/*****************************************************
 * 作者：yyh
 * 日期：13-6-26
 * 描述：
 * Main 游戏Web服务器中
 ******************************************************/


require("./Config");

//var MySQL = require('./database');
//var database = new MySQL(Config.MySqlUrl, Config.MySqlPort, Config.MySqlUser, Config.MySqlPsd, Config.Database);
//database.Open();

var SocketServer = require("./SocketServer");

var svr = new SocketServer(null);
svr.Start(Config.ServerPort);

var GameRunner = require("./GameRunner");

var gr = new GameRunner(svr, null);
gr.Start();

//var server = new require("./SocketServer")(null);
//server.Start(Config.ServerPort);

//require("./HttpServer").start(Config.ServerPort);
