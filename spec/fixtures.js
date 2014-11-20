function loadAllItems() {
    return [
        new Item('ITEM000000', '可口可乐', '瓶', 3.00),
        new Item('ITEM000001', '雪碧', '瓶', 3.00),
        new Item('ITEM000002', '苹果', '斤', 5.50),
        new Item('ITEM000003', '荔枝', '斤', 15.00),
        new Item('ITEM000004', '电池', '个', 2.00),
        new Item('ITEM000005', '方便面', '袋', 4.50)
    ];
}

function loadPromotions() {
    return [
        new Promotion('BUY_TWO_GET_ONE_FREE', [
            'ITEM000000',
            'ITEM000001',
            'ITEM000005'
        ])
    ]
}

function loadButtonArr() {
    return [
        '<button id="btn_addCart0" name="btd_cart" onclick="addItemToCart(this);">加入购物车</button>',
        '<button id="btn_addCart1" name="btd_cart" onclick="addItemToCart(this);">加入购物车</button>',
        '<button id="btn_addCart2" name="btd_cart" onclick="addItemToCart(this);">加入购物车</button>',
        '<button id="btn_addCart3" name="btd_cart" onclick="addItemToCart(this);">加入购物车</button>',
        '<button id="btn_addCart4" name="btd_cart" onclick="addItemToCart(this);">加入购物车</button>',
        '<button id="btn_addCart5" name="btd_cart" onclick="addItemToCart(this);">加入购物车</button>',
    ];
}

function loadAllCookies() {
    return [
        new Cookie('item0',0,0),
        new Cookie('item1',0,1),
        new Cookie('item2',0,2),
        new Cookie('item3',0,3),
        new Cookie('item4',0,4),
        new Cookie('item5',0,5),
    ];
}
