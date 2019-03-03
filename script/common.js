//本地获取
function getStorage(str){
   var data = localStorage.getItem(str)
   if(data.indexOf("obj-") > -1){
       return JSON.parse(data.slice(4));
   }else{
       return data.slice(4);
   }
}
//本地存贮
function setStorage(key,data) {
    if (typeof (data) == "string" || typeof (data) == "number") {
        localStorage.setItem(key,"str-" + data);
    } else {
        localStorage.setItem(key,"obj-" + JSON.stringify(data));
    }
}
//页面传参
function pageParam () {
  var paramStr = decodeURI(window.location.search).slice(1);
  var paramObj = {};
  for (var i = 0; i < paramStr.split("&").length; i++) {
      paramObj[paramStr.split("&")[i].split("=")[0]] = paramStr.split("&")[i].split("=")[1];
  }
  return paramObj;
}