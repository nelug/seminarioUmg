SET SESSION FOREIGN_KEY_CHECKS=0;

/* Drop Tables */

DROP TABLE IF EXISTS detalle_cotizaciones;
DROP TABLE IF EXISTS cotizaciones;
DROP TABLE IF EXISTS detalle_ventas;
DROP TABLE IF EXISTS ventas;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS detalle_compras;
DROP TABLE IF EXISTS compras;
DROP TABLE IF EXISTS detalle_descargas;
DROP TABLE IF EXISTS descargas;
DROP TABLE IF EXISTS permisos;
DROP TABLE IF EXISTS menus;
DROP TABLE IF EXISTS productos;
DROP TABLE IF EXISTS proveedores;
DROP TABLE IF EXISTS usuarios;




/* Create Tables */

CREATE TABLE clientes
(
	id int NOT NULL AUTO_INCREMENT,
	usuario int NOT NULL,
	nit varchar(12) NOT NULL,
	nombre varchar(50) NOT NULL,
	direccion varchar(100),
	telefono varchar(25),
	PRIMARY KEY (id)
);


CREATE TABLE compras
(
	id bigint NOT NULL AUTO_INCREMENT,
	usuario int NOT NULL,
	proveedor int NOT NULL,
	numero_documento varchar(50) NOT NULL,
	fecha_documento date NOT NULL,
	fecha timestamp DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);


CREATE TABLE cotizaciones
(
	id bigint NOT NULL AUTO_INCREMENT,
	usuario int NOT NULL,
	cliente int NOT NULL,
	fecha timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE descargas
(
	id bigint NOT NULL AUTO_INCREMENT,
	usuario int NOT NULL,
	nota varchar(500) NOT NULL,
	fecha timestamp DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);


CREATE TABLE detalle_compras
(
	id bigint NOT NULL AUTO_INCREMENT,
	compra bigint NOT NULL,
	producto int NOT NULL,
	cantidad int NOT NULL,
	precio decimal(10,4) NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE detalle_cotizaciones
(
	id bigint NOT NULL AUTO_INCREMENT,
	cotizacion bigint NOT NULL,
	producto int NOT NULL,
	cantidad int NOT NULL,
	precio decimal(8,2) NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE detalle_descargas
(
	id bigint NOT NULL AUTO_INCREMENT,
	descarga bigint NOT NULL,
	producto int NOT NULL,
	cantidad int NOT NULL,
	precio decimal(10,4) NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE detalle_ventas
(
	id bigint NOT NULL AUTO_INCREMENT,
	venta bigint NOT NULL,
	producto int NOT NULL,
	cantidad int NOT NULL,
	precio decimal(8,2) NOT NULL,
	ganancia decimal(10,4) NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE menus
(
	id int NOT NULL AUTO_INCREMENT,
	titulo varchar(25),
	icono varchar(25),
	link varchar(50),
	catalogo int,
	PRIMARY KEY (id)
);


CREATE TABLE permisos
(
	id int NOT NULL AUTO_INCREMENT,
	menu int NOT NULL,
	usuario int NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE productos
(
	id int NOT NULL AUTO_INCREMENT,
	usuario int NOT NULL,
	codigo varchar(250) NOT NULL,
	descripcion varchar(500),
	precio_venta decimal(8,2) NOT NULL,
	precio_costo decimal(10,4) NOT NULL,
	existencia int NOT NULL,
	PRIMARY KEY (id),
	UNIQUE (codigo)
);


CREATE TABLE proveedores
(
	id int NOT NULL AUTO_INCREMENT,
	usuario int NOT NULL,
	nit varchar(12),
	empresa varchar(100) NOT NULL,
	representante varchar(50),
	telefono varchar(25),
	direccion varchar(50),
	PRIMARY KEY (id)
);


CREATE TABLE usuarios
(
	id int NOT NULL AUTO_INCREMENT,
	usuario varchar(50) NOT NULL,
	password varchar(500) NOT NULL,
	nombre varchar(25) NOT NULL,
	apellido varchar(25) NOT NULL,
	correo varchar(100),
	PRIMARY KEY (id),
	UNIQUE (usuario),
	UNIQUE (correo)
);


CREATE TABLE ventas
(
	id bigint NOT NULL AUTO_INCREMENT,
	cliente int NOT NULL,
	fecha timestamp DEFAULT CURRENT_TIMESTAMP,
	usuario int NOT NULL,
	PRIMARY KEY (id)
);



/* Create Foreign Keys */

ALTER TABLE cotizaciones
	ADD FOREIGN KEY (cliente)
	REFERENCES clientes (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE ventas
	ADD FOREIGN KEY (cliente)
	REFERENCES clientes (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE detalle_compras
	ADD FOREIGN KEY (compra)
	REFERENCES compras (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE detalle_cotizaciones
	ADD FOREIGN KEY (cotizacion)
	REFERENCES cotizaciones (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE detalle_descargas
	ADD FOREIGN KEY (descarga)
	REFERENCES descargas (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE permisos
	ADD FOREIGN KEY (menu)
	REFERENCES menus (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE detalle_compras
	ADD FOREIGN KEY (producto)
	REFERENCES productos (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE detalle_cotizaciones
	ADD FOREIGN KEY (producto)
	REFERENCES productos (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE detalle_descargas
	ADD FOREIGN KEY (producto)
	REFERENCES productos (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE detalle_ventas
	ADD FOREIGN KEY (producto)
	REFERENCES productos (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE compras
	ADD FOREIGN KEY (proveedor)
	REFERENCES proveedores (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE clientes
	ADD FOREIGN KEY (usuario)
	REFERENCES usuarios (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE compras
	ADD FOREIGN KEY (usuario)
	REFERENCES usuarios (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE cotizaciones
	ADD FOREIGN KEY (usuario)
	REFERENCES usuarios (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE descargas
	ADD FOREIGN KEY (usuario)
	REFERENCES usuarios (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE permisos
	ADD FOREIGN KEY (usuario)
	REFERENCES usuarios (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE productos
	ADD FOREIGN KEY (usuario)
	REFERENCES usuarios (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE proveedores
	ADD FOREIGN KEY (usuario)
	REFERENCES usuarios (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE ventas
	ADD FOREIGN KEY (usuario)
	REFERENCES usuarios (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE detalle_ventas
	ADD FOREIGN KEY (venta)
	REFERENCES ventas (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;



