'use strict';

module.exports = {
    
    up: function (db, next) {
        db.collection('menus').insert({
            titulo : "Personas",
            icono : "accessibility",
            estado : true,
            link : "/persona"
        }, { $set: { blacklisted: true } }, next);
    },
    
    down: function (db, next) {
        db.collection('menus').update({
            titulo : "Personas",
            icono : "accessibility",
            estado : true,
            link : "/persona"
        }, { $set: { blacklisted: false } }, next);
    }
    
};