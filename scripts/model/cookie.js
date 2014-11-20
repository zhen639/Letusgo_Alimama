function Cookie(name,value,index) {
    this.name = name;
    this.value = value;
    this.index = index;
}

Cookie.prototype.getValue = function(){
    return parseInt(getCookie(this.name));
}

Cookie.prototype.update = function(){
    this.value = this.getValue()+1;
    setCookie(this.name,this.value);
}

Cookie.prototype.clear = function() {
    setCookie(this.name,"0");
}

Cookie.prototype.print = function() {
    var allItems = loadAllItems();
    var itemAmount = this.getValue();
    var promotionAmount = this.getPromotion();
    return allItems[this.index].printCart(itemAmount,promotionAmount);
}

Cookie.prototype.printPromotionItem = function() {
    var result = 0;
    var saveAmount = this.getPromotion();
    if (saveAmount) {
        var allItems = loadAllItems();
        result = allItems[this.index].printPromotionItem(saveAmount);
    }
    return result;
}

Cookie.prototype.getPromotion = function() {
    var count = this.getValue();
    var result = 0;
    if (count) {
        var allItems = loadAllItems();
        result = allItems[this.index].getPromotion(count);
    }
    return result;
}

Cookie.prototype.totalPrice = function(){
    var allItems = loadAllItems();
    var count = this.getValue()-this.getPromotion();
    return allItems[this.index].totalPrice(count);
}

Cookie.prototype.savePrice = function() {
    var allItems = loadAllItems();
    var saveAmount = this.getPromotion();
    return allItems[this.index].savePrice(saveAmount);
}