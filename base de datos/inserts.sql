
INSERT INTO `estado` (`id`,`estado`)VALUES(1,'Activo'),(2,'Inactivo');
INSERT INTO `estado_proceso` (`id`,`estado`)VALUES(1,'En proceso'),(2,'Finalizada'),(3,'Anulada');

INSERT INTO `users` (`id`,`username`, `password`, `nombre`, `apellido`, `email`) VALUES
(1,'admin', '$2y$10$hPmOb6EyyUvzNZNgjp./6OzfaWYeVRzmQnBSLmqBygC9q4NmXIhcG', 'Administrador', 'Sistema', 'admin@gmail.com');

INSERT INTO `menus` (`id`, `titulo`, `icono`, `link`, `catalogo`) VALUES
(1, 'Inventario', 'grid_on', '/inventario', 0),
(2, 'Venta', 'shopping_cart', '/venta', 0),
(3, 'Compra', 'shopping_basket', '/compra', 0),
(4, 'Descarga', 'file_download', '/descarga', 0),
(5, 'Cotizacion', 'list', '/cotizacion', 0),
(6, 'Usuarios', 'account_box', '/usuarios', 1),
(7, 'Clientes', 'supervisor_account', '/clientes', 1),
(8, 'Proveedores', 'card_travel', '/proveedores', 1),
(9, 'Productos', 'speaker_notes', '/productos', 1),
(10, 'Ventas', 'attach_money', '/consulta-ventas', 2),
(11, 'Compras', 'local_mall', '/consulta-compras', 2),
(12, 'Descargas', 'archive', '/consulta-descargas', 2),
(13, 'Cotizaciones', 'event_note', '/consulta-cotizaciones', 2),
(14, 'Ventas', 'insert_chart', '/graficas-ventas', 3),
(15, 'Compras', 'insert_chart', '/graficas-compras', 3),
(16, 'Descargas', 'insert_chart', '/graficas-descargas', 3);

INSERT INTO `permisos` (`id`, `menu`, `usuario`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 5, 1),
(6, 6, 1),
(7, 7, 1),
(8, 8, 1),
(9, 9, 1),
(10, 10, 1),
(11, 11, 1),
(12, 12, 1),
(13, 13, 1),
(14, 14, 1),
(15, 15, 1),
(16, 16, 1);
