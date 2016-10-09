
INSERT INTO `usuarios` (`id`,`usuario`, `password`, `nombre`, `apellido`, `correo`) VALUES
(1,'admin', 'admin', 'Administrador', 'Sistema', 'admin@gmail.com');


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
(10, 'Ventas', 'grid_on', '/consulta-ventas', 2),
(11, 'Compras', 'grid_on', '/consulta-compras', 2),
(12, 'Descargas', 'grid_on', '/consulta-descargas', 2),
(13, 'Cotizaciones', 'grid_on', '/consulta-cotizaciones', 2),
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
