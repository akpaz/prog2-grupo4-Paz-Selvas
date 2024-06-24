create schema piGrupo4EntreAmigos;

use piGrupo4EntreAmigos;

-- primero creamos las tablas correspondientes con sus columnas

create table Usuarios (
	id int unsigned primary key auto_increment,
    nombreUsuario varchar(50),
	email varchar(50) unique,
    contrasena varchar(200),
	fechaDeNacimiento date,
    dni bigint unique,
    fotoPerfil varchar(100),
    createdAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp on update current_timestamp,
	deletedAt timestamp null on update current_timestamp
);

create table Productos (
	id int unsigned primary key auto_increment,
    idUsuarioPropietario int unsigned,
	imagen varchar(100),
	nombre varchar(50),
	descripcion varchar(500),
    edad int,
    especie varchar(50),
    sexo varchar(20),
    personalidad varchar(70),
	createdAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp on update current_timestamp,
	deletedAt timestamp null on update current_timestamp,
    
    foreign key (idUsuarioPropietario) references Usuarios(id)
);

create table Comentarios (
	id int unsigned primary key auto_increment,
	contenido varchar(100),
	idProducto int unsigned,
    idUsuario int unsigned,
    createdAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp on update current_timestamp,
	deletedAt timestamp null on update current_timestamp,
    
	foreign key (idProducto) references Productos(id),
    foreign key (idUsuario) references Usuarios(id)
);



insert into Usuarios
values(default,'Cami Selvas','camibelensel@gmail.com','$2a$10$MBu4vj2.9WqINzgKUv2FwuBeL0J5phAdiPPQaFOGtqukzKPqUWRwK','2004-12-11',46204710,'camiSelvas.png',default,default,default),
	(default,'aledh','ale@dh.com','$2a$10$KA.S7NY.6xU9yY0eumDzb.hV41zveBmaMUWAns.IHLibIRore9ELe','2024-04-10',12345678,'ale.png',default,default,default),
	(default,'agus_paz','akpaz@udesa.edu.ar','$2a$10$iKcqc/jYPeeUVQH5aScNO.5jDflverEcr3/ZaMmyY0Ownro4keB6K','2004-08-28',45897304,'agusPaz.png',default,default,default),
	(default,'diego','diego123@gmail.com','$2a$10$dfrCLaqk8I81idOYx.3M5OwwLkNMkylLqU/JWclmBTALV234X.cze','1994-03-21',64950334,'diego.png',default,default,default),
	(default,'camii','camilabelen30@gmail.com','$2a$10$Mx0RyyuHgGeVruvFyzLd9.M6GISkr0RtjYtyy7wgrOpWU11VWFW7m','1996-10-14',35504213,'ccc.png',default,default,default),
	(default,'Mariaa','maria@gmail.com','$2a$10$/Qs8kFY0Ro7l3MLDoFKda./Pl07b82fGBh.6EGkn.qks9oskuDRgq','1997-01-23',35264873,'maria.png',default,default,default),
	(default,'Juancito','juan@gmail.com','$2a$10$Jn3BUtNefKpeNREKEGEjpuvZAKs/vAJiEBYJQ98N.nlHPaCN.JobC','2004-12-11',46376486,'juan.png',default,default,default),
	(default,'- Rafa Nadal -','rafita@gmail.com','$2a$10$d6WgV.cs.GipPw8mhaaLv.4qauECZaysQwrUVsr03lZo87tIPL7VW','2004-12-11',36485729,'rafaNadal.png',default,default,default);


insert into Productos
values(default,1,'luna.png','Luna','Luna está buscando un hogar con mucho cariño para dar! <3',3,'Gato','femenino','Sensible y paciente',default,default,default),
	(default, 2, 'tyson.png', 'Tyson', 'Tyson está buscando acompañar a alguien y disfrutar juntos de la vida!', 2, 'Perro pug', 'masculino', 'Cariñoso y atento', default, default, default),
	(default,1,'bianca.png','Bianca','Bianca está buscando con quien compartir sus últimos años de vida. Es una fiel compañera que nunca te hará sentir solo <3',12,'Perro caniche','Femenino','Leal y obediente',default,default,default),
	(default, 6, 'oliver.png', 'Oliver', 'Oliver es un gato encantador y lleno de energía, ideal para una familia que busca un compañero juguetón y cariñoso. ', 3, 'Gato naranja', 'Masculino', 'Amoroso y juguetón', default, default, default),
	(default, 6, 'charlie.png', 'Charlie', 'Charlie es un perro increíblemente dulce y leal que está buscando una familia amorosa para siempre. Es un perro activo y enérgico, perfecto para una familia que disfrute de paseos al aire libre y juegos en el parque.', 7, 'Perro', 'Masculino', 'Inteligente y afectivo', default, default, default),
	(default, 1, 'simba.png', 'Simba', 'Un gatito muy amoroso que busca formar parte de un hogar con mucho cariño. No esperes más a darle la vida que se merece!', 4, 'Gato atigrado', 'Masculino', 'Reservado y tranquilo', default, default, default),
	(default, 2, 'moka.png', 'Moka', 'Tímida al principio, pero una vez que confía, es leal y afectuosa.', 3, 'Gato manchado', 'Femenino', 'Amigable y atenta', default, default, default),
	(default, 3, 'bella.png', 'Bella', 'Una perrita muy delicada que le gusta pasear en las mañanas y descansar en las tardes.', 7, 'Perro Yorkshire', 'Femenino', 'Independiente y amigable', default, default, default),
	(default, 3, 'molly.png', 'Molly', 'Molly siempre busca darte los mejores cariños y darte calor con su pelo suave. Ideal para descansar juntos viendo una peli.', 5, 'Perro', 'Femenino', 'Alegre y juguetona', default, default, default);

insert into Comentarios
	(default, 'Que bonita que es <3', 1, 2, default, default, default),
	(default, 'Que belleza, la quiero', 1, 2, default, default, default),
	(default, 'Esta vacunada?', 1, 1, default, default, default),
	(default, 'Cuantos años tiene? ', 1, 3, default, default, default),
	(default, 'Puedo pasar a verla?', 1,4, default, default, default),
	(default, 'Cuantos años tiene? ', 2,1, default, default, default),
	(default, 'Ya se puede adoptar?', 2,1, default, default, default),
	(default, 'Ya se puede adoptar?', 1,2, default, default, default),
	(default, 'Sigue disponible????', 2,5, default, default, default),
	(default, 'Ya se puede adoptar?', 3,1, default, default, default),
	(default, 'Que belleza, la quiero', 3,5, default, default, default),
	(default, 'Disponible ya! <3', 4,6, default, default, default),
	(default, 'Que linda!', 3,6, default, default, default),
	(default, 'Se ve tan bueno...', 5,1, default, default, default),
	(default, 'Queee lindo que es por favorrrr', 6,6, default, default, default),
	(default, 'Se lleva bien con niños?', 3,2, default, default, default),
	(default, 'Que gordito lindo...', 2,4, default, default, default),
	(default, 'Lo puedo pasar a ver?', 6,3, default, default, default),
	(default, 'Una amiga está interesada!', 3,3, default, default, default),
	(default, 'Que tierna, se ve muy compañera.', 7,6, default, default, default),
	(default, 'Mi prima tiene una Yorkshire, es muy amorosa...', 8,6, default, default, default),
	(default, 'Que agradable se ve', 9,7, default, default, default),
	(default, 'Lo puedo conocer primero?', 4,7, default, default, default),
	(default, 'Que tierno<3', 1,1, default, default, default);

