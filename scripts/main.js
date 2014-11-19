$(document).ready(function () {
    var feature = (function () {
        var initItems = function () {
            var items = loadAllItems();
            var index=0;

            _(items).each(function (item) {
                index++;
                var addCart = '<button id="btn_addCart" name="btn_cart" onclick="addItemToCart(this);">加入购物车</button>';
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

        return {
            init: initItems,
            printDate: printDate
        };
    })();

    feature.init();
    feature.printDate();
    $("#count").text(getCookie('itemSum'));
});

