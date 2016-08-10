'use strict';

module.exports = {
    
    up: function (db, next) {
        db.collection('menus').insert(
            [
                { titulo : "Venta",     icono : "shopping_cart",        link : "/venta"  }, 
                { titulo : "Compra",    icono : "shopping_basket",      link : "/compra" },
                { titulo : "Descarga",  icono : "file_download",        link : "/descarga" },
            ], 
            { $set: { blacklisted: true } }, next
        );
    },
    
    down: function (db, next) {
        db.collection('menus').remove();
    }
    
};