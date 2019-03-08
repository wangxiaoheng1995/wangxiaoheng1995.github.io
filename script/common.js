//本地获取
function getStorage(key){
   var data = localStorage.getItem(key);
   return data;
}
//本地存贮
function setStorage(key,data) {
    var paramType = typeof(data);
    if(paramType == 'object'){
        data = JSON.stringify(data);
    }
    localStorage.setItem(key,data);
}
//页面传参
function pageParam () {
  var paramStr = decodeURIComponent(window.location.search).slice(1);
  var paramObj = {};
  for (var i = 0; i < paramStr.split("&").length; i++) {
      paramObj[paramStr.split("&")[i].split("=")[0]] = paramStr.split("&")[i].split("=")[1];
  }
  return paramObj;
}
//检测用户是否登录
var userInfo;
function checkLogin() {
    userInfo = JSON.parse(getStorage('userInfo'));
    if(!userInfo){
        location.href = 'login.html';
    }
}