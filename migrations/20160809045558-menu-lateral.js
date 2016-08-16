'use strict';

module.exports = {
    
    up: function (db, next) {
        db.collection('menus').insert(
            [
                { titulo : "Venta",       icono : "shopping_cart",      link : "/venta",                catalogo: 0 }, 
                { titulo : "Compra",      icono : "shopping_basket",    link : "/compra",               catalogo: 0 },
                { titulo : "Descarga",    icono : "file_download",      link : "/descarga",             catalogo: 0 },
                { titulo : "Cotizacion",  icono : "list",               link : "/cotizacion",           catalogo: 0 },
                { titulo : "Usuarios",    icono : "account_box",        link : "/usuarios",             catalogo: 1 }, 
                { titulo : "Clientes",    icono : "supervisor_account", link : "/clientes",             catalogo: 1 }, 
                { titulo : "Proveedores", icono : "card_travel",        link : "/proveedores",          catalogo: 1 },
                { titulo : "Productos",   icono : "speaker_notes",      link : "/productos",            catalogo: 1 },
                { titulo : "Ventas",      icono : "grid_on",            link : "/consulta-ventas",      catalogo: 2 }, 
                { titulo : "Compras",     icono : "grid_on",            link : "/consulta-compras",     catalogo: 2 }, 
                { titulo : "Descargas",   icono : "grid_on",            link : "/consulta-descargas",   catalogo: 2 },
                { titulo : "Cotizaciones",icono : "grid_on",            link : "/consulta-cotizaciones",catalogo: 2 },
                { titulo : "Ventas",      icono : "insert_chart",       link : "/graficas-ventas",      catalogo: 3 }, 
                { titulo : "Compras",     icono : "insert_chart",       link : "/graficas-compras",     catalogo: 3 }, 
                { titulo : "Descargas",   icono : "insert_chart",       link : "/graficas-descargas",   catalogo: 3 }, 
            ], 
            { $set: { blacklisted: true } }, next
        );
    },
    
    down: function (db, next) {
        db.collection('menus').remove();
    }
    
};