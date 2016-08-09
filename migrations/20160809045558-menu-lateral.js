'use strict';

module.exports = {
    
    up: function (db, next) {
        db.collection('menus').insert(
            [
                { titulo : "Venta",     icono : "shopping_cart",        link : "/venta",     funcion : null}, 
                { titulo : "Compra",    icono : "shopping_basket",      link : "/compra",    funcion : null},
                { titulo : "Descarga",  icono : "file_download",        link : "/compra",    funcion : null},
            ], 
            { $set: { blacklisted: true } }, next
        );
    },
    
    down: function (db, next) {
        db.collection('menus').insert(
            [
                { titulo : "Venta",     icono : "shopping_cart",        link : "/venta",     funcion : null}, 
                { titulo : "Compra",    icono : "shopping_basket",      link : "/compra",    funcion : null},
                { titulo : "Descarga",  icono : "file_download",        link : "/compra",    funcion : null},
            ], 
            { $set: { blacklisted: false } }, next
        );
    }
    
};