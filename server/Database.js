/**
 * Created with JetBrains WebStorm.
 * User: yyh
 * Date: 13-2-3
 * Time: 下午12:21
 * To change this template use File | Settings | File Templates.
 */

var mysql = require('mysql');

var dbConnection = null;

var Database = function(url, port, user, password, database)
{
    this.db_options =
    {
        host: url,
        port: port,
        user: user,
        password: password,
        database: database
    };
};

Database.prototype.Open = function()
{
    try
    {
        dbConnection = mysql.createConnection(this.db_options);
    }
    catch (err)
    {
        console.log(err);
    }
};

Database.prototype.Close = function()
{
    if (dbConnection)
    {
        dbConnection.end();
    }
};

Database.prototype.DoQuery = function(cmd, cb, param)
{
    try
    {
        if(dbConnection)
        {
            dbConnection.query(cmd, function selectCb(error, results, fields)
            {
                if (error)
                {
                    console.log('错误: ' + error.message);
                    console.log('SQL: ' + cmd);
                }
                if(cb)
                {
                    cb(param, results);
                }
            });
        }
    }
    catch (err)
    {
        console.log(err);
    }
};

Database.prototype.DoQuery2Param = function(cmd, cb, param1, param2)
{
    try
    {
        if(dbConnection)
        {
            dbConnection.query(cmd, function selectCb(error, results, fields)
            {
                if (error)
                {
                    console.log('错误: ' + error.message);
                    console.log('SQL: ' + cmd);
                }
                if(cb)
                {
                    cb(param1, param2, results);
                }
            });
        }
    }
    catch (err)
    {
        console.log(err);
    }
};

Database.prototype.CallProcQuery = function(cmd, cb, param)
{
    try
    {
        if(dbConnection)
        {
            dbConnection.query(cmd, function selectCb(error, results, fields)
            {
                if (error)
                {
                    console.log('错误: ' + error.message);
                    console.log('SQL: ' + cmd);
                }
                if(cb)
                {
                    if (results.length > 1)
                    {
                        cb(param, results[0]);
                    }
                    else
                    {
                        console.log('错误: 存储过程反回的结果不正常');
                        console.log(results);
                    }
                }
            });
        }
    }
    catch (err)
    {
        console.log(err);
    }
};

Database.prototype.DoWrite = function(cmd)
{
    try
    {
        if(dbConnection)
        {
            dbConnection.query(cmd, function selectCb(error, results, fields)
            {
                if (error)
                {
                    console.log('错误: ' + error.message);
                    console.log('SQL: ' + cmd);
                }
            });
        }
    }
    catch (err)
    {
        console.log(err);
    }
};



module.exports = Database;
