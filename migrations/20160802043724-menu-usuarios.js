'use strict';

module.exports = {
    
    up: function (db, next) {
        db.collection('menus').insert({
            titulo : "Usuarios",
            icono : "supervisor_account",
            estado : true,
            link : "/usuarios"
        }, { $set: { blacklisted: true } }, next);
    },
    
    down: function (db, next) {
        db.collection('menus').update({
            titulo : "Usuarios",
            icono : "supervisor_account",
            estado : true,
            link : "/usuarios"
        }, { $set: { blacklisted: false } }, next);
    }
    
};