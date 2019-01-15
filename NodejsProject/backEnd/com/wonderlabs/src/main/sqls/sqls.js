// 添加方式如下
// 通过id检索user
this.SelectFromUserById="select id,name from nikeshmflip where id=?";
this.SelectFromOpenId="select * from nikeshmflip where openid='";
this.UpdateCheckInByOpenId ="update nikeshmflip set checkin=1 where openid='";
module.exports =this;