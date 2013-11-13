/**
 * Created with JetBrains WebStorm.
 * User: yyh
 * Date: 13-3-1
 * Time: PM10:11
 * To change this template use File | Settings | File Templates.
 */

exports = module.exports = UserManager;

var users = new Array();

function UserManager()
{

}

UserManager.prototype.UserCount = function ()
{
    return users.length;
}

UserManager.prototype.GetUserAt = function (index)
{
    return users[index];
}

UserManager.prototype.GetUserBySocket = function (socket)
{
    for(var i = 0; i < users.length; i++)
    {
        if(users[i].socket === socket)
        {
            return users[i];
        }
    }
    return null;
}

UserManager.prototype.GetUserByAccount = function (account)
{
    for(var i = 0; i < users.length; i++)
    {
        if(users[i].account == account)
        {
            return users[i];
        }
    }
    return null;
}

UserManager.prototype.GetUserByID = function (userid)
{
    for(var i = 0; i < users.length; i++)
    {
        if(users[i].userid == userid)
        {
            return users[i];
        }
    }
    return null;
}

UserManager.prototype.AddUser = function (user)
{
    users.push(user);
}

UserManager.prototype.RemoveUserBySocket = function (socket)
{
    var index = -1;
    for(var i = 0; i < users.length; i++)
    {
        if(users[i].socket === socket)
        {
            index = i;
            break;
        }
    }

    if(index != -1)
    {
        var count = users.length - index - 1;
        var tail = new Array();
        for(var i = 0; i < count; i++)
        {
            tail.push(users.pop());
        }
        users.pop();  // removed
        for(var i = 0; i < count; i++)
        {
            users.push(tail.pop());
        }
    }
}

UserManager.prototype.RemoveUserByAccount = function (account)
{
    var index = -1;
    for(var i = 0; i < users.length; i++)
    {
        if(users[i].account === account)
        {
            index = i;
            break;
        }
    }

    if(index != -1)
    {
        var count = users.length - index - 1;
        var tail = new Array();
        for(var i = 0; i < count; i++)
        {
            tail.push(users.pop());
        }
        users.pop();  // removed
        for(var i = 0; i < count; i++)
        {
            users.push(tail.pop());
        }
    }
}

UserManager.prototype.Send2User = function (userid, name, data)
{
    var user = this.GetUserByID(userid);

    if (user)
    {
        user.socket.emit(name, data);
    }
}

UserManager.prototype.SendAll = function (name, data)
{
    for(var i = 0; i < users.length; i++)
    {
        users[i].socket.emit(name, data);
    }
}


