-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 12-10-2016 a las 23:02:54
-- Versión del servidor: 5.5.52-0ubuntu0.14.04.1
-- Versión de PHP: 5.5.37-1+deprecated+dontuse+deb.sury.org~trusty+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `inventario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` int(11) NOT NULL DEFAULT '1',
  `nit` varchar(12) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `direccion` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `telefono` varchar(25) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `correo` varchar(50) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `usuario` (`usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci AUTO_INCREMENT=8 ;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `usuario`, `nit`, `nombre`, `direccion`, `telefono`, `correo`, `created_at`, `updated_at`) VALUES
(3, 1, '21323', 'jorge guerra', 'guatemala', '2343243', 'jorge.l.g.18@hotmail.com', '2016-10-12 05:36:42', '2016-10-12 05:36:42'),
(4, 1, '', 'antonio', 'chiquimula', '', 'jorge@tio-gt.com', '2016-10-13 00:01:56', '2016-10-13 00:01:56'),
(5, 1, '', 'maria avalos', 'huite zacapa', NULL, 'maria@gmail.com', '2016-10-13 00:15:21', '2016-10-13 00:15:21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE IF NOT EXISTS `compras` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `usuario` int(11) NOT NULL DEFAULT '1',
  `proveedor` int(11) NOT NULL,
  `estado_proceso` int(11) NOT NULL DEFAULT '1',
  `numero_documento` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `fecha_documento` date NOT NULL,
  `total` decimal(8,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `estado_proceso` (`estado_proceso`),
  KEY `proveedor` (`proveedor`),
  KEY `usuario` (`usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cotizaciones`
--

CREATE TABLE IF NOT EXISTS `cotizaciones` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `usuario` int(11) NOT NULL DEFAULT '1',
  `cliente` int(11) NOT NULL,
  `estado_proceso` int(11) NOT NULL DEFAULT '1',
  `total` decimal(8,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `cliente` (`cliente`),
  KEY `estado_proceso` (`estado_proceso`),
  KEY `usuario` (`usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `descargas`
--

CREATE TABLE IF NOT EXISTS `descargas` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `usuario` int(11) NOT NULL DEFAULT '1',
  `estado_proceso` int(11) NOT NULL DEFAULT '1',
  `nota` varchar(500) COLLATE utf8mb4_spanish_ci NOT NULL,
  `total` decimal(8,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `estado_proceso` (`estado_proceso`),
  KEY `usuario` (`usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_compras`
--

CREATE TABLE IF NOT EXISTS `detalle_compras` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `compra` bigint(20) NOT NULL,
  `producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` decimal(10,4) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `compra` (`compra`),
  KEY `producto` (`producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_cotizaciones`
--

CREATE TABLE IF NOT EXISTS `detalle_cotizaciones` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cotizacion` bigint(20) NOT NULL,
  `producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` decimal(8,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `cotizacion` (`cotizacion`),
  KEY `producto` (`producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_descargas`
--

CREATE TABLE IF NOT EXISTS `detalle_descargas` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `descarga` bigint(20) NOT NULL,
  `producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` decimal(10,4) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `descarga` (`descarga`),
  KEY `producto` (`producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_ventas`
--

CREATE TABLE IF NOT EXISTS `detalle_ventas` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `venta` bigint(20) NOT NULL,
  `producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` decimal(8,2) NOT NULL,
  `ganancia` decimal(10,4) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `producto` (`producto`),
  KEY `venta` (`venta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE IF NOT EXISTS `estado` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `estado` varchar(50) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `estado`
--

INSERT INTO `estado` (`id`, `estado`) VALUES
(1, 'Activo'),
(2, 'Inactivo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_proceso`
--

CREATE TABLE IF NOT EXISTS `estado_proceso` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `estado` varchar(50) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `estado_proceso`
--

INSERT INTO `estado_proceso` (`id`, `estado`) VALUES
(1, 'En proceso'),
(2, 'Finalizada'),
(3, 'Anulada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menus`
--

CREATE TABLE IF NOT EXISTS `menus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(25) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `icono` varchar(25) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `link` varchar(50) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `catalogo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci AUTO_INCREMENT=17 ;

--
-- Volcado de datos para la tabla `menus`
--

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE IF NOT EXISTS `permisos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `menu` int(11) NOT NULL,
  `usuario` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `menu` (`menu`),
  KEY `usuario` (`usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci AUTO_INCREMENT=17 ;

--
-- Volcado de datos para la tabla `permisos`
--

INSERT INTO `permisos` (`id`, `menu`, `usuario`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2016-10-12 02:17:54', '0000-00-00 00:00:00'),
(2, 2, 1, '2016-10-12 02:17:54', '0000-00-00 00:00:00'),
(3, 3, 1, '2016-10-12 02:17:54', '0000-00-00 00:00:00'),
(4, 4, 1, '2016-10-12 02:17:54', '0000-00-00 00:00:00'),
(5, 5, 1, '2016-10-12 02:17:54', '0000-00-00 00:00:00'),
(6, 6, 1, '2016-10-12 02:17:54', '0000-00-00 00:00:00'),
(7, 7, 1, '2016-10-12 02:17:54', '0000-00-00 00:00:00'),
(8, 8, 1, '2016-10-12 02:17:54', '0000-00-00 00:00:00'),
(9, 9, 1, '2016-10-12 02:17:54', '0000-00-00 00:00:00'),
(10, 10, 1, '2016-10-12 02:17:54', '0000-00-00 00:00:00'),
(11, 11, 1, '2016-10-12 02:17:54', '0000-00-00 00:00:00'),
(12, 12, 1, '2016-10-12 02:17:54', '0000-00-00 00:00:00'),
(13, 13, 1, '2016-10-12 02:17:54', '0000-00-00 00:00:00'),
(14, 14, 1, '2016-10-12 02:17:54', '0000-00-00 00:00:00'),
(15, 15, 1, '2016-10-12 02:17:54', '0000-00-00 00:00:00'),
(16, 16, 1, '2016-10-12 02:17:54', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` int(11) NOT NULL DEFAULT '1',
  `estado` int(11) NOT NULL DEFAULT '1',
  `codigo` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `marca` varchar(40) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `precio_costo` decimal(8,2) NOT NULL,
  `precio_venta` decimal(8,2) NOT NULL,
  `existencia_minima` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `codigo` (`codigo`),
  KEY `estado` (`estado`),
  KEY `usuario` (`usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `usuario`, `estado`, `codigo`, `descripcion`, `marca`, `precio_costo`, `precio_venta`, `existencia_minima`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '3243423', 'hojas en blanco', 'dfadfa', 0.00, 4324.00, 32434, '2016-10-12 05:16:46', '2016-10-12 05:16:46'),
(2, 1, 1, '123123', 'prueba', '', 0.00, 33.00, 2234, '2016-10-12 05:43:30', '2016-10-12 05:43:30'),
(3, 1, 1, '111', 'temperas', '', 0.00, 15.00, 5, '2016-10-13 00:43:06', '2016-10-13 00:43:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE IF NOT EXISTS `proveedores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` int(11) NOT NULL DEFAULT '1',
  `nit` varchar(12) COLLATE utf8mb4_spanish_ci NOT NULL,
  `empresa` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `contacto` varchar(50) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `direccion` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `telefono_empresa` varchar(25) COLLATE utf8mb4_spanish_ci NOT NULL,
  `telefono_personal` varchar(25) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `correo` varchar(50) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `usuario` (`usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci AUTO_INCREMENT=11 ;

--
-- Volcado de datos para la tabla `proveedores`
--

INSERT INTO `proveedores` (`id`, `usuario`, `nit`, `empresa`, `contacto`, `direccion`, `telefono_empresa`, `telefono_personal`, `correo`, `created_at`, `updated_at`) VALUES
(2, 1, '12345', 'prueba', 'jorge', 'zacapa', '32434324', '3243423', 'jorge.l.g.18@hotmail.com', '2016-10-12 23:46:40', '2016-10-12 23:46:40'),
(3, 1, '1232133', 'office', 'jorge', 'chiquimula', '234324234', '3423432432', 'jorgelg132012@gmail.com', '2016-10-12 23:48:11', '2016-10-12 23:48:11'),
(4, 1, '1232323', 'libreria exito', NULL, 'Huite', '2323123', NULL, '', '2016-10-13 00:04:00', '2016-10-13 00:04:00'),
(5, 1, '12345', 'distribuidora la mejor', NULL, 'quetzaltenango', '', NULL, 'micorreo@hotmail.com', '2016-10-13 00:29:22', '2016-10-13 00:29:22'),
(10, 1, '121212', 'tigo', 'jorge laj', 'cabanas', '56575657`', '57775647', '', '2016-10-13 02:48:04', '2016-10-13 02:48:04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `estado` int(11) NOT NULL DEFAULT '1',
  `usuario` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL DEFAULT '1',
  `password` varchar(500) COLLATE utf8mb4_spanish_ci NOT NULL,
  `nombre` varchar(25) COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellido` varchar(25) COLLATE utf8mb4_spanish_ci NOT NULL,
  `correo` varchar(100) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuario` (`usuario`),
  UNIQUE KEY `correo` (`correo`),
  KEY `estado` (`estado`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `estado`, `usuario`, `password`, `nombre`, `apellido`, `correo`, `created_at`, `updated_at`) VALUES
(1, 1, 'admin', 'admin', 'Administrador', 'Sistema', 'admin@gmail.com', '2016-10-12 02:17:54', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE IF NOT EXISTS `ventas` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cliente` int(11) NOT NULL,
  `estado_proceso` int(11) NOT NULL DEFAULT '1',
  `usuario` int(11) NOT NULL DEFAULT '1',
  `total` decimal(8,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `cliente` (`cliente`),
  KEY `estado_proceso` (`estado_proceso`),
  KEY `usuario` (`usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci AUTO_INCREMENT=1 ;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `compras`
--
ALTER TABLE `compras`
  ADD CONSTRAINT `compras_ibfk_1` FOREIGN KEY (`estado_proceso`) REFERENCES `estado_proceso` (`id`),
  ADD CONSTRAINT `compras_ibfk_2` FOREIGN KEY (`proveedor`) REFERENCES `proveedores` (`id`),
  ADD CONSTRAINT `compras_ibfk_3` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `cotizaciones`
--
ALTER TABLE `cotizaciones`
  ADD CONSTRAINT `cotizaciones_ibfk_1` FOREIGN KEY (`cliente`) REFERENCES `clientes` (`id`),
  ADD CONSTRAINT `cotizaciones_ibfk_2` FOREIGN KEY (`estado_proceso`) REFERENCES `estado_proceso` (`id`),
  ADD CONSTRAINT `cotizaciones_ibfk_3` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `descargas`
--
ALTER TABLE `descargas`
  ADD CONSTRAINT `descargas_ibfk_1` FOREIGN KEY (`estado_proceso`) REFERENCES `estado_proceso` (`id`),
  ADD CONSTRAINT `descargas_ibfk_2` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `detalle_compras`
--
ALTER TABLE `detalle_compras`
  ADD CONSTRAINT `detalle_compras_ibfk_1` FOREIGN KEY (`compra`) REFERENCES `compras` (`id`),
  ADD CONSTRAINT `detalle_compras_ibfk_2` FOREIGN KEY (`producto`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `detalle_cotizaciones`
--
ALTER TABLE `detalle_cotizaciones`
  ADD CONSTRAINT `detalle_cotizaciones_ibfk_1` FOREIGN KEY (`cotizacion`) REFERENCES `cotizaciones` (`id`),
  ADD CONSTRAINT `detalle_cotizaciones_ibfk_2` FOREIGN KEY (`producto`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `detalle_descargas`
--
ALTER TABLE `detalle_descargas`
  ADD CONSTRAINT `detalle_descargas_ibfk_1` FOREIGN KEY (`descarga`) REFERENCES `descargas` (`id`),
  ADD CONSTRAINT `detalle_descargas_ibfk_2` FOREIGN KEY (`producto`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `detalle_ventas`
--
ALTER TABLE `detalle_ventas`
  ADD CONSTRAINT `detalle_ventas_ibfk_1` FOREIGN KEY (`producto`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `detalle_ventas_ibfk_2` FOREIGN KEY (`venta`) REFERENCES `ventas` (`id`);

--
-- Filtros para la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD CONSTRAINT `permisos_ibfk_1` FOREIGN KEY (`menu`) REFERENCES `menus` (`id`),
  ADD CONSTRAINT `permisos_ibfk_2` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`estado`) REFERENCES `estado` (`id`),
  ADD CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD CONSTRAINT `proveedores_ibfk_1` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`estado`) REFERENCES `estado` (`id`);

--
-- Filtros para la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `ventas_ibfk_1` FOREIGN KEY (`cliente`) REFERENCES `clientes` (`id`),
  ADD CONSTRAINT `ventas_ibfk_2` FOREIGN KEY (`estado_proceso`) REFERENCES `estado_proceso` (`id`),
  ADD CONSTRAINT `ventas_ibfk_3` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
