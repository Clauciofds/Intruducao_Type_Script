DROP TABLE IF EXISTS "orders";

CREATE TABLE "orders" (
  id SERIAL PRIMARY KEY,
  id integer NULL,
  email varchar(255) default NULL,
  date varchar(255),
  price integer NULL
);

INSERT INTO orders (id,email,date,price)
VALUES
  (1,'ut@google.net','2025-01-31 05:29:07',28335),
  (2,'mi.felis@aol.couk','2025-06-05 00:21:47',44840),
  (3,'dolor@outlook.com','2024-11-15 21:08:51',13628),
  (4,'non.quam@protonmail.net','2024-09-24 18:54:39',67736),
  (5,'enim.mi@google.ca','2025-06-06 13:55:55',8635),
  (6,'aliquam.nec.enim@outlook.com','2025-04-08 13:03:56',6862),
  (7,'libero.et.tristique@protonmail.ca','2024-07-30 10:49:11',8895),
  (8,'tellus.faucibus@google.org','2023-10-31 12:32:26',85726),
  (9,'ultrices.iaculis@outlook.edu','2024-02-01 17:48:44',37268),
  (10,'sem.semper@aol.ca','2023-12-01 11:31:08',66598);
INSERT INTO orders (id,email,date,price)
VALUES
  (11,'non.luctus.sit@icloud.couk','2024-12-27 10:41:13',3865),
  (12,'purus.maecenas@protonmail.edu','2025-07-10 11:37:59',37294),
  (13,'eleifend.cras@protonmail.org','2024-11-30 17:21:17',17372),
  (14,'quisque.ornare@aol.edu','2025-02-26 17:07:18',63918),
  (15,'nunc.mauris@outlook.com','2023-09-10 04:58:08',32504),
  (16,'euismod.est.arcu@outlook.org','2024-07-20 03:16:57',38393),
  (17,'eros.nam@outlook.org','2024-10-26 02:57:59',99946),
  (18,'tempus.lorem.fringilla@yahoo.edu','2024-07-12 10:25:15',93227),
  (19,'commodo.ipsum@yahoo.ca','2023-10-09 21:05:01',79098),
  (20,'molestie.dapibus.ligula@google.net','2025-04-16 19:02:19',74225);
INSERT INTO orders (id,email,date,price)
VALUES
  (21,'curae@outlook.ca','2025-04-13 12:58:01',54718),
  (22,'placerat.augue@outlook.couk','2024-08-10 03:05:39',36540),
  (23,'mi.duis@aol.net','2024-04-17 19:23:23',88902),
  (24,'suspendisse@aol.net','2024-07-23 13:37:30',67120),
  (25,'ante.blandit@protonmail.org','2025-03-16 09:39:20',86164),
  (26,'varius.ultrices.mauris@google.net','2024-05-17 12:30:59',37852),
  (27,'ipsum.primis@protonmail.org','2024-12-17 15:58:45',62572),
  (28,'fringilla.ornare@aol.couk','2025-07-09 04:49:11',49630),
  (29,'ultrices.mauris.ipsum@hotmail.edu','2024-07-23 19:08:42',46635),
  (30,'orci.sem@aol.com','2024-08-24 04:14:48',97254);
INSERT INTO orders (id,email,date,price)
VALUES
  (31,'ac.eleifend@yahoo.ca','2024-05-08 02:09:42',8903),
  (32,'gravida.mauris@google.edu','2025-06-28 19:54:39',36761),
  (33,'urna.et@google.couk','2025-03-30 19:15:17',21789),
  (34,'dapibus.ligula@protonmail.com','2023-11-02 12:15:41',78785),
  (35,'donec.at.arcu@aol.edu','2025-04-12 16:39:34',46189),
  (36,'vulputate.nisi@google.org','2024-03-28 00:42:35',66258),
  (37,'donec.tincidunt@outlook.couk','2025-07-16 17:32:06',70360),
  (38,'at.arcu@google.org','2025-05-30 20:17:25',23022),
  (39,'blandit.congue@icloud.ca','2024-04-04 09:18:19',61956),
  (40,'cras@protonmail.net','2024-12-01 22:29:04',51462);
INSERT INTO orders (id,email,date,price)
VALUES
  (41,'amet.consectetuer.adipiscing@google.com','2024-03-26 06:53:53',38494),
  (42,'adipiscing.ligula@google.net','2024-01-08 23:27:44',66666),
  (43,'elementum@protonmail.com','2025-06-07 11:48:04',56689),
  (44,'nunc.ac@google.com','2024-02-01 06:10:23',14764),
  (45,'nonummy.ac.feugiat@google.net','2023-12-09 23:50:16',85510),
  (46,'non.sollicitudin.a@hotmail.com','2024-09-22 05:07:51',74106),
  (47,'eu@google.edu','2025-06-22 12:45:17',67430),
  (48,'aliquam.eros.turpis@yahoo.net','2024-06-08 04:10:51',55364),
  (49,'rutrum.lorem@icloud.net','2025-06-16 06:05:32',17785),
  (50,'nulla.facilisis@outlook.ca','2023-08-30 18:58:22',1516);
INSERT INTO orders (id,email,date,price)
VALUES
  (51,'hendrerit.id.ante@aol.com','2024-12-19 03:48:20',28562),
  (52,'sit@outlook.edu','2024-11-08 06:18:49',77527),
  (53,'elit.nulla@google.ca','2024-01-03 19:08:14',88447),
  (54,'augue.malesuada@aol.com','2024-06-02 16:14:53',16457),
  (55,'sodales.nisi.magna@yahoo.ca','2024-09-08 01:08:12',91400),
  (56,'felis.nulla@google.edu','2024-02-29 10:13:30',53650),
  (57,'arcu.vivamus@google.ca','2024-08-07 19:02:46',82740),
  (58,'mi.lorem@icloud.net','2024-10-21 02:17:43',29525),
  (59,'purus.duis@yahoo.org','2023-08-16 01:57:02',39075),
  (60,'amet.consectetuer@hotmail.couk','2024-08-02 17:04:06',18880);
INSERT INTO orders (id,email,date,price)
VALUES
  (61,'ultricies.sem.magna@icloud.net','2024-10-14 02:45:30',37760),
  (62,'et@hotmail.ca','2025-01-07 09:23:33',56858),
  (63,'dolor@aol.ca','2023-07-25 22:54:58',35041),
  (64,'aliquet.diam@yahoo.edu','2025-06-28 21:11:21',70608),
  (65,'dolor.vitae@icloud.com','2025-01-24 15:06:33',28630),
  (66,'vel.arcu.eu@yahoo.ca','2024-01-09 10:00:15',54552),
  (67,'aliquam.iaculis.lacus@aol.com','2024-05-31 15:34:04',65582),
  (68,'arcu@hotmail.net','2024-11-04 13:04:15',27711),
  (69,'malesuada.fringilla@google.com','2024-11-23 13:23:38',30012),
  (70,'enim.commodo.hendrerit@yahoo.ca','2025-03-29 04:05:02',84559);
INSERT INTO orders (id,email,date,price)
VALUES
  (71,'ipsum.dolor.sit@icloud.net','2024-04-05 12:41:08',80464),
  (72,'semper.nam@hotmail.couk','2024-05-06 20:48:43',45623),
  (73,'suscipit.nonummy@outlook.couk','2024-06-23 04:36:29',70754),
  (74,'egestas.rhoncus.proin@hotmail.net','2025-04-09 21:25:42',46010),
  (75,'proin.nisl.sem@aol.net','2024-07-16 23:18:45',32624),
  (76,'ut.pharetra@hotmail.ca','2025-02-19 23:08:01',77449),
  (77,'feugiat.nec.diam@protonmail.couk','2024-04-24 07:05:34',10796),
  (78,'pellentesque@outlook.org','2024-03-30 10:15:19',45418),
  (79,'euismod.ac@protonmail.edu','2024-05-05 15:53:34',83954),
  (80,'aliquet.magna@icloud.org','2024-07-01 04:37:36',39752);
INSERT INTO orders (id,email,date,price)
VALUES
  (81,'a.odio.semper@icloud.couk','2024-12-21 15:01:05',58721),
  (82,'arcu.vestibulum@protonmail.org','2025-01-22 17:50:42',28799),
  (83,'nisl.nulla@icloud.net','2024-12-22 21:31:25',10168),
  (84,'nulla.facilisis@aol.com','2024-04-29 00:27:36',4097),
  (85,'nulla.facilisis@protonmail.couk','2024-03-29 06:28:27',8626),
  (86,'dis.parturient@aol.com','2025-07-05 07:11:28',17578),
  (87,'mauris.magna@hotmail.ca','2025-04-06 00:57:14',25520),
  (88,'dictum.proin@outlook.com','2025-06-24 16:08:15',84081),
  (89,'nulla.interdum@yahoo.couk','2024-07-01 07:12:49',13365),
  (90,'rutrum.eu.ultrices@hotmail.edu','2024-05-04 02:43:17',13741);
INSERT INTO orders (id,email,date,price)
VALUES
  (91,'eu.nibh@icloud.net','2023-10-14 15:35:42',47803),
  (92,'sollicitudin.adipiscing.ligula@google.com','2024-06-21 02:13:32',10382),
  (93,'inceptos@icloud.org','2025-06-03 17:32:33',69087),
  (94,'mauris.eu@google.com','2025-04-30 00:50:31',92022),
  (95,'tellus.aenean.egestas@yahoo.org','2023-09-22 17:23:19',36293),
  (96,'risus.nunc.ac@outlook.couk','2024-12-12 20:36:33',32666),
  (97,'eu.arcu.morbi@outlook.com','2023-08-29 04:24:42',26620),
  (98,'sodales.mauris.blandit@aol.edu','2024-06-12 01:16:15',26565),
  (99,'nunc.in.at@outlook.com','2025-05-30 04:51:45',51967),
  (100,'nec.ligula@google.net','2025-02-09 09:48:42',50597);
