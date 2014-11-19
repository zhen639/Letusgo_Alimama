function setCookie(name,value) {
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = escape(name)+"="+escape(value)+";expires=" + exp.toUTCString();
}

function getCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

function addItemToCart(button) {
    var currValue= getCookie("itemSum");
    currValue++;
    $("#count").text(currValue);
    setCookie("itemSum",currValue);
}

function confirm(){
    setCookie("itemSum","0");
}