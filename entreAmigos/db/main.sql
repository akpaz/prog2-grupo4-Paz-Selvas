create schema piGrupo4EntreAmigos;

use piGrupo4EntreAmigos;

-- primero creamos las tablas correspondientes con sus columnas

create table Usuarios (
	id int unsigned primary key auto_increment,
    nombreUsuario varchar(50) unique,
	email varchar(50) unique,
    contrasena varchar(50),
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
	idProducto int unsigned,
    idUsuario int unsigned,
    createdAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp on update current_timestamp,
	deletedAt timestamp null on update current_timestamp,
    
	foreign key (idProducto) references Productos(id),
    foreign key (idUsuario) references Usuarios(id)
);

-- ahora hacemos los registros pedidos

-- agregamos 5 registros en usuarios

insert into Usuarios
values(default,'zacEfron','zacefron@gmail.com','hola123','2003-11-23',43789456,'zacEfron.png',default,default,default),
	(default,'tomHolland','tomholland@gmail.com','zendayateamo','2004-08-21',43890456,'tomHolland.png',default,default,default),
	(default,'margotRobbie','margotrobbie@gmail.com','barbie1','2000-07-03',34274682,'margotRobbie.png',default,default,default),
	(default,'emmaWatson','emmawatson@gmail.com','hermione123','2002-09-02',3784875,'emmaWatson.png',default,default,default),
	(default,'jenniferAnniston','jenniferanniston@gmail.com','hello123','2001-06-17',4729384,'jenniferAnniston.png',default,default,default);

-- agregamos 10 productos

insert into Productos
values(default,1,'toby.png','Toby','Toby tiene 3 años y es muy amigable y sociable. Está buscando un hogar con mucho cariño.',3,'perro','masculino','sociable y amigable',default,default,default),
	(default,1,'peter.png','Peter','Peter tiene 12 años y es una cruza con Beagle. Se lleva muy bien con los niños.',12,'perro','masculino','leal y amistoso',default,default,default),
	(default,2,'luna.png','Luna','Reservada pero cariñosa, buscando un lugar tranquilo para compartir afecto.',3,'gato','femenino','sensible y paciente',default,default,default),
	(default, 2, 'oliver.png', 'Oliver', 'Curioso observador que busca un hogar donde pueda explorar sin límites.', 12, 'gato', 'masculino', 'independiente y curioso', default, default, default),
	(default, 2, 'simba.png', 'Simba', 'Ideal si necesitas un amigo tranquilo y relajado que disfruta de largas siestas a tu lado.', 6, 'gato', 'masculino', 'reservado y tranquilo', default, default, default),
	(default, 1, 'molly.png', 'Molly', 'Energética y amigable, Molly está lista para acompañarte en todas tus aventuras. ', 1, 'perro', 'femenino', 'alegre y juguetona', default, default, default),
	(default, 1, 'bella.png', 'Bella', 'Amable y compasivo, ideal para alguien que valore la compañía tranquila.', 2, 'perro', 'femenino', 'independiente y amigable', default, default, default),
	(default, 1, 'charlie.png', 'Charlie', 'Leal y protector, esperando ansiosamente ser parte de una familia amorosa', 4, 'perro', 'masculino', 'inteligente y afectivo', default, default, default),
	(default, 1, 'tyson.png', 'Tyson', 'Compañero de abarazos que te reconforta con su calidez y afecto', 2, 'perro', 'masculino', 'cariñoso y atento', default, default, default),
	(default, 2, 'moka.png', 'Moka', 'Tímida al principio, pero una vez que confía, es leal y afectuosa.', 3, 'gato', 'femenino', 'amigable y atenta', default, default, default);

-- comentarios
insert into Comentarios
	values(default, 6, 1, 'Qué tierna <3', default, default, default),
	(default, 6, 2, 'Es hermosa!', default, default, default),
	(default, 6, 3, 'Que chiquita, una ternura', default, default, default),
	(default, 6, 4, 'Sigue en adopcion?', default, default, default),
	(default, 6, 5, 'Que belleza.', default, default, default),
	(default, 7, 1, 'Es bellisima!', default, default, default),
	(default, 7, 2, 'Es hermosa!', default, default, default),
	(default, 7, 3, 'Que lindos los ojitos!', default, default, default),
	(default, 7, 4, 'Ternura total', default, default, default),
	(default, 7, 5, 'Que belleza.', default, default, default),
	(default, 8, 1, 'Gran nombre para un gran perro!', default, default, default),
	(default, 8, 2, 'Es muy tierno', default, default, default),
	(default, 8, 3, 'Lo puedo pasar a ver?', default, default, default),
	(default, 8, 4, 'Tengo uno parecido!', default, default, default),
	(default, 8, 5, 'Que lindos los ojitos!', default, default, default),
	(default, 9, 1, 'Qué tierno <3', default, default, default),
	(default, 9, 2, 'Mi amiga tiene uno igual!', default, default, default),
	(default, 9, 3, 'Se lleva bien con otros perritos?', default, default, default),
	(default, 9, 4, 'Que original su nombre! Me encanta', default, default, default),
	(default, 9, 5, 'Hermoso <3', default, default, default),
	(default, 10, 1, 'La quiero adoptar ya!', default, default, default),
	(default, 10, 2, 'Me la quiero traer a casa, es muy tierna', default, default, default),
	(default, 10, 3, 'Que ternura', default, default, default),
	(default, 10, 4, 'Ay es hermosa!', default, default, default),
	(default, 10, 5, 'Qué tierno <3', default, default, default);