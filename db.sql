-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versi server:                 10.4.13-MariaDB - mariadb.org binary distribution
-- OS Server:                    Win64
-- HeidiSQL Versi:               11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- membuang struktur untuk table sylar_gaming.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kategori` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- Membuang data untuk tabel sylar_gaming.categories: ~4 rows (lebih kurang)
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` (`id`, `kategori`) VALUES
	(4, 'Gaming Chair'),
	(5, 'Monitor'),
	(6, 'VGA'),
	(8, 'Laptop');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;

-- membuang struktur untuk table sylar_gaming.konfirmasi
CREATE TABLE IF NOT EXISTS `konfirmasi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` varchar(50) NOT NULL DEFAULT '0',
  `tanggal` datetime DEFAULT NULL,
  `bukti` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Membuang data untuk tabel sylar_gaming.konfirmasi: ~1 rows (lebih kurang)
/*!40000 ALTER TABLE `konfirmasi` DISABLE KEYS */;
INSERT INTO `konfirmasi` (`id`, `order_id`, `tanggal`, `bukti`) VALUES
	(1, '20220711053358', '2022-07-11 05:51:18', '2022071105335820220711055118.jpg');
/*!40000 ALTER TABLE `konfirmasi` ENABLE KEYS */;

-- membuang struktur untuk table sylar_gaming.order
CREATE TABLE IF NOT EXISTS `order` (
  `id` varchar(50) NOT NULL DEFAULT 'NULL',
  `tanggal_order` datetime DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Membuang data untuk tabel sylar_gaming.order: ~1 rows (lebih kurang)
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` (`id`, `tanggal_order`, `status`, `user_id`, `total`) VALUES
	('20220711053358', '2022-07-11 05:33:58', 'lunas', 2, 11000000);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;

-- membuang struktur untuk table sylar_gaming.order_detail
CREATE TABLE IF NOT EXISTS `order_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` varchar(50) DEFAULT NULL,
  `produk_id` int(11) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Membuang data untuk tabel sylar_gaming.order_detail: ~2 rows (lebih kurang)
/*!40000 ALTER TABLE `order_detail` DISABLE KEYS */;
INSERT INTO `order_detail` (`id`, `order_id`, `produk_id`, `qty`, `total`) VALUES
	(1, '20220711053358', 2, 2, 1000000),
	(2, '20220711053358', 6, 2, 10000000);
/*!40000 ALTER TABLE `order_detail` ENABLE KEYS */;

-- membuang struktur untuk table sylar_gaming.produk
CREATE TABLE IF NOT EXISTS `produk` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categories_id` int(11) NOT NULL DEFAULT 0,
  `nama` varchar(50) DEFAULT NULL,
  `gambar` text DEFAULT NULL,
  `deskripsi` varchar(50) DEFAULT NULL,
  `harga` int(11) NOT NULL DEFAULT 0,
  `stok` int(11) NOT NULL DEFAULT 0,
  `views` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- Membuang data untuk tabel sylar_gaming.produk: ~5 rows (lebih kurang)
/*!40000 ALTER TABLE `produk` DISABLE KEYS */;
INSERT INTO `produk` (`id`, `categories_id`, `nama`, `gambar`, `deskripsi`, `harga`, `stok`, `views`) VALUES
	(2, 8, 'Laptop asus core i3', 'cfdd028a_b570_4e26_95f1_2e158aa13ca1.jpg', 'Laptop asus baruuu', 500000, 57, 0),
	(3, 8, 'Laptop Core I5', '4d54b709_f795_4ccd_b887_894937087e70.jpg', 'Laptop Core I5', 5000000, 65, 0),
	(4, 8, 'Laptop HP Legion', '57672ea6_77f8_4245_a9a8_c03bc69fd519.jpg', 'Laptop HP Legion', 50000000, 65, 0),
	(5, 8, 'Laptop Lenovo Baruu', '49c974d0_a8a2_46a1_a4bd_8cbba44df4e1.jpg', 'Laptop Lenovo Baruuu', 5000000, 65, 0),
	(6, 8, 'Laptop ROG 6000', '0b223b55_a1c7_41fd_a27a_d0f9f74a4b12.jpg', 'Laptop ROG 6000', 5000000, 57, 0);
/*!40000 ALTER TABLE `produk` ENABLE KEYS */;

-- membuang struktur untuk table sylar_gaming.produk_picture
CREATE TABLE IF NOT EXISTS `produk_picture` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `produk_id` int(11) DEFAULT NULL,
  `gambar` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Membuang data untuk tabel sylar_gaming.produk_picture: ~0 rows (lebih kurang)
/*!40000 ALTER TABLE `produk_picture` DISABLE KEYS */;
/*!40000 ALTER TABLE `produk_picture` ENABLE KEYS */;

-- membuang struktur untuk table sylar_gaming.user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL DEFAULT '0',
  `nama` varchar(50) NOT NULL DEFAULT '0',
  `password` varchar(50) NOT NULL DEFAULT '0',
  `telepon` varchar(50) NOT NULL DEFAULT '0',
  `alamat` varchar(50) NOT NULL DEFAULT '0',
  `role` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Membuang data untuk tabel sylar_gaming.user: ~2 rows (lebih kurang)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `username`, `nama`, `password`, `telepon`, `alamat`, `role`) VALUES
	(1, 'admin', 'admin', 'a', '0842871837287182', 'Jalan Mawar', 'admin'),
	(2, 'user@gmail.com', 'user', 'a', '085243333545', 'Jalan Kecumbung', 'user');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
