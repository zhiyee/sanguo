/**
 * Created with JetBrains WebStorm.
 * User: yyh
 * Date: 13-3-2
 * Time: AM1:21
 * To change this template use File | Settings | File Templates.
 */
exports = module.exports = UserSession;

function UserSession(socket, account, imagesize)
{
    this.socket = socket;
    this.account = account;
    this.userid = -1;
    this.imagesize = imagesize;
    this.lasttimegstenter = null;
    this.lasttimegstconsume = null;
    this.lasttimegstexit = null;
    this.visitfriend = false;
    this.visitfrienduserid = -1;
}
