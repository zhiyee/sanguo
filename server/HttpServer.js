/*****************************************************
 * 作者：yyh
 * 日期：13-6-26
 * 描述：
 * HttpServer 为Web游戏服务器
 ******************************************************/

var express = require("express");
var app = express();

var start = function (port){

    app.listen(port);

    console.log("Server has started at " + port + "");
}

exports.start = start;


app.get('/', function(req, res){
    res.send("Hello Start");
});
