$(document).ready(function () {
    var feature = (function () {
        var initItems = function () {
            var items = loadAllItems();
            var buttonArr = loadButtonArr();
            var index = 0;

            _(items).each(function (item) {
                var addCart = buttonArr[index++];
                var listItem = $('<tr>\
                            <td>' + item.name + '</td>\
                            <td>' + item.price + '</td>\
                            <td>' + item.unit + '</td>\
                            <td>' + addCart + '</td>\
                          </tr>');
                $('#item-table').append(listItem);
            });
        };

        var printDate = function() {
            $("#pay-date").text(utils.getDate());
        };

        var printCart = function() {
            var allCookies = loadAllCookies();
            allCookies.forEach(function(cookie){
                if (cookie.getValue()) {
                    var cartItems = cookie.print();
                    $("#items-in-cart").append(cartItems);
                }
            });

        };

        var printPromotionInfo = function() {
            var allCookies = loadAllCookies();
            var savePrice = 0;
            allCookies.forEach(function(cookie){
                var promotion = cookie.printPromotionItem();
                if (promotion) {
                    savePrice += cookie.savePrice();
                    $("#promotion-items").append(promotion);
                }
            });
            $("#save-price").text(savePrice.toFixed(2)+"元");
            return savePrice;
        };

        var printTotalPrice = function () {
            var allCookies = loadAllCookies();
            var totalPrice = 0;
            allCookies.forEach(function(cookie){
                if (cookie.getValue()) {
                    totalPrice += cookie.totalPrice();
                }
            });
            $("#total-price").text(totalPrice.toFixed(2)+"元");
        };

        return {
            init: initItems,
            printDate: printDate,
            printCart: printCart,
            printTotalPrice: printTotalPrice,
            printPromotionInfo: printPromotionInfo
        };
    })();

    feature.init();
    feature.printDate();
    feature.printCart();
    feature.printTotalPrice();
    feature.printPromotionInfo();
    $("#count").text(getCookie('itemSum'));
});

