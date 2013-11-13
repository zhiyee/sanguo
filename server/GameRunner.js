/**
 * Created with JetBrains WebStorm.
 * User: yyh
 * Date: 13-3-2
 * Time: PM4:09
 * To change this template use File | Settings | File Templates.
 */
var actionType = 0;
var timerGuestAction = require('timers');
var timerFoodYield = require('timers');

module = module.exports = GameRunner;

function GameRunner(server, mysql)
{
    this.server = server;
    this.mysql = mysql;
}

GameRunner.prototype.Start = function ()
{
    var runner = this;
    timerFoodYield.setInterval(function (){runner.QueryFoodYielding()}, 2000); // 2 seconds
}

GameRunner.prototype.SendAll = function(name, data)
{
    if(this.server)
    {
        this.server.SendAll(name, data);
    }
}

GameRunner.prototype.QueryFoodYielding = function()
{
    this.SendAll("Res_DataModel", {status:2, message:"xxx"})
}
