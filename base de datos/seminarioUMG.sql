

DROP TABLE IF EXISTS detalle_cotizaciones;
DROP TABLE IF EXISTS cotizaciones;
DROP TABLE IF EXISTS detalle_ventas;
DROP TABLE IF EXISTS ventas;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS detalle_compras;
DROP TABLE IF EXISTS compras;
DROP TABLE IF EXISTS detalle_descargas;
DROP TABLE IF EXISTS descargas;
DROP TABLE IF EXISTS productos;
DROP TABLE IF EXISTS permisos;
DROP TABLE IF EXISTS proveedores;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS estado;
DROP TABLE IF EXISTS estado_proceso;
DROP TABLE IF EXISTS menus;




/* Create Tables */

CREATE TABLE clientes
(
	id int NOT NULL AUTO_INCREMENT,
	usuario int DEFAULT 1 NOT NULL,
	nit varchar(12) CHARACTER SET utf8 COLLATE utf8_spanish_ci,
	nombre varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
	direccion varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
	telefono varchar(25) CHARACTER SET utf8 COLLATE utf8_spanish_ci,
	correo varchar(50),
	created_at timestamp NULL,
	updated_at timestamp NULL,
	PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;


CREATE TABLE compras
(
	id bigint(20) NOT NULL AUTO_INCREMENT,
	usuario int DEFAULT 1 NOT NULL,
	proveedor int NOT NULL,
	estado_proceso int DEFAULT 1 NOT NULL,
	numero_documento varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
	fecha_documento date NOT NULL,
	total decimal(8,2) NOT NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL,
	PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;


CREATE TABLE cotizaciones
(
	id bigint(20) NOT NULL AUTO_INCREMENT,
	usuario int DEFAULT 1 NOT NULL,
	cliente int NOT NULL,
	estado_proceso int DEFAULT 1 NOT NULL,
	total decimal(8,2) NOT NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL,
	PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;


CREATE TABLE descargas
(
	id bigint(20) NOT NULL AUTO_INCREMENT,
	usuario int DEFAULT 1 NOT NULL,
	estado_proceso int DEFAULT 1 NOT NULL,
	nota varchar(500) NOT NULL,
	total decimal(8,2) NOT NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL,
	PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;


CREATE TABLE detalle_compras
(
	id bigint(20) NOT NULL AUTO_INCREMENT,
	compra bigint(20) NOT NULL,
	producto int NOT NULL,
	cantidad int NOT NULL,
	precio decimal(10,4) NOT NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL,
	PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;


CREATE TABLE detalle_cotizaciones
(
	id bigint(20) NOT NULL AUTO_INCREMENT,
	cotizacion bigint(20) NOT NULL,
	producto int NOT NULL,
	cantidad int NOT NULL,
	precio decimal(8,2) NOT NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL,
	PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;


CREATE TABLE detalle_descargas
(
	id bigint(20) NOT NULL AUTO_INCREMENT,
	descarga bigint(20) NOT NULL,
	producto int NOT NULL,
	cantidad int NOT NULL,
	precio decimal(10,4) NOT NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL,
	PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;


CREATE TABLE detalle_ventas
(
	id bigint(20) NOT NULL AUTO_INCREMENT,
	venta bigint(20) NOT NULL,
	producto int NOT NULL,
	cantidad int NOT NULL,
	precio decimal(8,2) NOT NULL,
	ganancia decimal(10,4) NOT NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL,
	PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;


CREATE TABLE estado
(
	id int NOT NULL AUTO_INCREMENT,
	estado varchar(50),
	PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;


CREATE TABLE estado_proceso
(
	id int NOT NULL AUTO_INCREMENT,
	estado varchar(50),
	PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;


CREATE TABLE menus
(
	id int NOT NULL AUTO_INCREMENT,
	titulo varchar(25),
	icono varchar(25),
	link varchar(50),
	catalogo int,
	PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;


CREATE TABLE permisos
(
	id int NOT NULL AUTO_INCREMENT,
	menu int NOT NULL,
	usuario int DEFAULT 1 NOT NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL,
	PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;


CREATE TABLE productos
(
	id int NOT NULL AUTO_INCREMENT,
	usuario int DEFAULT 1 NOT NULL,
	estado int DEFAULT 1 NOT NULL,
	codigo varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
	descripcion varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
	marca varchar(40),
	precio_costo decimal(8,2) NOT NULL,
	precio_venta decimal(8,2) NOT NULL,
	existencia int DEFAULT 0 NOT NULL,
	existencia_minima int DEFAULT 0 NOT NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL,
	PRIMARY KEY (id),
	UNIQUE (codigo)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;


CREATE TABLE proveedores
(
	id int NOT NULL AUTO_INCREMENT,
	usuario int DEFAULT 1 NOT NULL,
	nit varchar(12) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
	empresa varchar(100) NOT NULL,
	contacto varchar(50),
	direccion varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
	telefono_empresa varchar(25) NOT NULL,
	telefono_personal varchar(25),
	correo varchar(50),
	created_at timestamp NULL,
	updated_at timestamp NULL,
	PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;


CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	estado int DEFAULT 1 NOT NULL,
	username varchar(50) DEFAULT '1' NOT NULL,
	password varchar(500) NOT NULL,
	email varchar(100),
	nombre varchar(25) NOT NULL,
	apellido varchar(25) NOT NULL,
	api_token varchar(60),
	created_at timestamp NULL,
	updated_at timestamp NULL,
	PRIMARY KEY (id),
	UNIQUE (username),
	UNIQUE (email)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;


CREATE TABLE ventas
(
	id bigint(20) NOT NULL AUTO_INCREMENT,
	cliente int NOT NULL,
	estado_proceso int DEFAULT 1 NOT NULL,
	usuario int DEFAULT 1 NOT NULL,
	total decimal(8,2) NOT NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL,
	PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;



/* Create Foreign Keys */

ALTER TABLE cotizaciones
	ADD CONSTRAINT cotizaciones_ibfk_1 FOREIGN KEY (cliente)
	REFERENCES clientes (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE ventas
	ADD CONSTRAINT ventas_ibfk_1 FOREIGN KEY (cliente)
	REFERENCES clientes (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE detalle_compras
	ADD CONSTRAINT detalle_compras_ibfk_1 FOREIGN KEY (compra)
	REFERENCES compras (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE detalle_cotizaciones
	ADD CONSTRAINT detalle_cotizaciones_ibfk_1 FOREIGN KEY (cotizacion)
	REFERENCES cotizaciones (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE detalle_descargas
	ADD CONSTRAINT detalle_descargas_ibfk_1 FOREIGN KEY (descarga)
	REFERENCES descargas (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE productos
	ADD CONSTRAINT productos_ibfk_1 FOREIGN KEY (estado)
	REFERENCES estado (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE users
	ADD CONSTRAINT usuarios_ibfk_1 FOREIGN KEY (estado)
	REFERENCES estado (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE compras
	ADD CONSTRAINT compras_ibfk_1 FOREIGN KEY (estado_proceso)
	REFERENCES estado_proceso (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE cotizaciones
	ADD CONSTRAINT cotizaciones_ibfk_2 FOREIGN KEY (estado_proceso)
	REFERENCES estado_proceso (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE descargas
	ADD CONSTRAINT descargas_ibfk_1 FOREIGN KEY (estado_proceso)
	REFERENCES estado_proceso (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE ventas
	ADD CONSTRAINT ventas_ibfk_2 FOREIGN KEY (estado_proceso)
	REFERENCES estado_proceso (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE permisos
	ADD CONSTRAINT permisos_ibfk_1 FOREIGN KEY (menu)
	REFERENCES menus (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE detalle_compras
	ADD CONSTRAINT detalle_compras_ibfk_2 FOREIGN KEY (producto)
	REFERENCES productos (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE detalle_cotizaciones
	ADD CONSTRAINT detalle_cotizaciones_ibfk_2 FOREIGN KEY (producto)
	REFERENCES productos (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE detalle_descargas
	ADD CONSTRAINT detalle_descargas_ibfk_2 FOREIGN KEY (producto)
	REFERENCES productos (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE detalle_ventas
	ADD CONSTRAINT detalle_ventas_ibfk_1 FOREIGN KEY (producto)
	REFERENCES productos (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE compras
	ADD CONSTRAINT compras_ibfk_2 FOREIGN KEY (proveedor)
	REFERENCES proveedores (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE clientes
	ADD CONSTRAINT clientes_ibfk_1 FOREIGN KEY (usuario)
	REFERENCES users (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE compras
	ADD CONSTRAINT compras_ibfk_3 FOREIGN KEY (usuario)
	REFERENCES users (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE cotizaciones
	ADD CONSTRAINT cotizaciones_ibfk_3 FOREIGN KEY (usuario)
	REFERENCES users (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE descargas
	ADD CONSTRAINT descargas_ibfk_2 FOREIGN KEY (usuario)
	REFERENCES users (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE permisos
	ADD CONSTRAINT permisos_ibfk_2 FOREIGN KEY (usuario)
	REFERENCES users (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE productos
	ADD CONSTRAINT productos_ibfk_2 FOREIGN KEY (usuario)
	REFERENCES users (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE proveedores
	ADD CONSTRAINT proveedores_ibfk_1 FOREIGN KEY (usuario)
	REFERENCES users (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE ventas
	ADD CONSTRAINT ventas_ibfk_3 FOREIGN KEY (usuario)
	REFERENCES users (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;


ALTER TABLE detalle_ventas
	ADD CONSTRAINT detalle_ventas_ibfk_2 FOREIGN KEY (venta)
	REFERENCES ventas (id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
;



/* Create Indexes */

CREATE INDEX usuario USING BTREE ON clientes (usuario ASC);
CREATE INDEX estado_proceso USING BTREE ON compras (estado_proceso ASC);
CREATE INDEX proveedor USING BTREE ON compras (proveedor ASC);
CREATE INDEX usuario USING BTREE ON compras (usuario ASC);
CREATE INDEX cliente USING BTREE ON cotizaciones (cliente ASC);
CREATE INDEX estado_proceso USING BTREE ON cotizaciones (estado_proceso ASC);
CREATE INDEX usuario USING BTREE ON cotizaciones (usuario ASC);
CREATE INDEX estado_proceso USING BTREE ON descargas (estado_proceso ASC);
CREATE INDEX usuario USING BTREE ON descargas (usuario ASC);
CREATE INDEX compra USING BTREE ON detalle_compras (compra ASC);
CREATE INDEX producto USING BTREE ON detalle_compras (producto ASC);
CREATE INDEX cotizacion USING BTREE ON detalle_cotizaciones (cotizacion ASC);
CREATE INDEX producto USING BTREE ON detalle_cotizaciones (producto ASC);
CREATE INDEX descarga USING BTREE ON detalle_descargas (descarga ASC);
CREATE INDEX producto USING BTREE ON detalle_descargas (producto ASC);
CREATE INDEX producto USING BTREE ON detalle_ventas (producto ASC);
CREATE INDEX venta USING BTREE ON detalle_ventas (venta ASC);
CREATE INDEX menu USING BTREE ON permisos (menu ASC);
CREATE INDEX usuario USING BTREE ON permisos (usuario ASC);
CREATE INDEX estado USING BTREE ON productos (estado ASC);
CREATE INDEX usuario USING BTREE ON productos (usuario ASC);
CREATE INDEX usuario USING BTREE ON proveedores (usuario ASC);
CREATE INDEX estado USING BTREE ON users (estado ASC);
CREATE INDEX cliente USING BTREE ON ventas (cliente ASC);
CREATE INDEX estado_proceso USING BTREE ON ventas (estado_proceso ASC);
CREATE INDEX usuario USING BTREE ON ventas (usuario ASC);
