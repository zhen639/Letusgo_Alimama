function Item(barcode, name, unit, price) {
    this.barcode = barcode;
    this.name = name;
    this.unit = unit;
    this.price = price || 0.00;
}

Item.prototype.printCart = function(itemAmount,promotionAmount) {
    var payAmount = itemAmount-promotionAmount;
    var string = $('<tr>\
                <td>' + this.name + '</td>\
                <td>' + this.price + '</td>\
                <td>' + this.unit + '</td>\
                <td>' + itemAmount + '</td>\
                <td>' + this.totalPrice(payAmount) + '</td>\
              </tr>');
    return string;
}

Item.prototype.printPromotionItem = function(saveAmount) {
    var string = $('<tr>\
                <td>' + '买二赠一' + '</td>\
                <td>' + this.name + '</td>\
                <td>' + saveAmount + '</td>\
              </tr>');
    return string;
}

Item.prototype.totalPrice = function(count) {
    return this.price*count;
}

Item.prototype.savePrice = function(saveAmount) {
    return this.price*saveAmount;

}

Item.prototype.getPromotion = function(count) {
    var allPromotions = loadPromotions()[0].barcodes;
    var saveAmount = 0;
    for (var index in allPromotions) {
        if (this.barcode == allPromotions[index]) {
            saveAmount = parseInt(count/3);
            break;
        }
    }
    return saveAmount;
}