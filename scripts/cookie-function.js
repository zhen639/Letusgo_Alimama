function addItemToCart(button) {
    var btnNode = document.getElementsByName(button.name);
    for (var index in btnNode) {
        if (button.id == btnNode[index].id )
            break;
    }
    updateItemCookie(index);
    updateCountCookie();
}

function updateItemCookie(index) {
    var allCookies = loadAllCookies();
    allCookies[index].update();
}

function updateCountCookie() {
    var currValue= getCookie("itemSum");
    currValue++;
    $("#count").text(currValue);
    setCookie("itemSum",currValue);
}

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
        document.cookie= name + "="+cval+";expires="+exp.toUTCString();
}

function clearCookies(){
    var allCookies = loadAllCookies();
    allCookies.forEach(function(element) {
        element.clear();
    })
    setCookie("itemSum","0");
}
