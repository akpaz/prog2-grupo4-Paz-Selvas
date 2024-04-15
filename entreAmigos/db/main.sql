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
values(default,'zacEfron','zacefron@gmail.com','hola123','2003-11-23',43789456,'/images/users/zacEfron.png',default,default,default);

insert into Usuarios
values(default,'tomHolland','tomholland@gmail.com','zendayateamo','2004-08-21',43890456,'/images/users/tomHolland.png',default,default,default);

insert into Usuarios
values(default,'margotRobbie','margotrobbie@gmail.com','barbie1','2000-07-03',34274682,'/images/users/margotRobbie.png',default,default,default);

insert into Usuarios
values(default,'emmaWatson','emmawatson@gmail.com','hermione123','2002-09-02',3784875,'/images/users/emmaWatson.png',default,default,default);

insert into Usuarios
values(default,'jenniferAnniston','jenniferanniston@gmail.com','hello123','2001-06-17',4729384,'/images/users/jenniferAnniston.png',default,default,default);


-- agregamos 10 productos

insert into Productos
values(default,1,'/images/products/toby.png','Toby','Toby tiene 3 años y es muy amigable y sociable. Está buscando un hogar con mucho cariño.',3,'perro','masculino','sociable y amigable',default,default,default);

insert into Productos
values(default,1,'/images/products/peter.png','Peter','Peter tiene 12 años y es una cruza con Beagle. Se lleva muy bien con los niños.',12,'perro','masculino','leal y amistoso',default,default,default);

insert into Productos
values(default,2,'/images/products/luna.png','Luna','Reservada pero cariñosa, buscando un lugar tranquilo para compartir afecto.',3,'gato','femenino','sensible y paciente',default,default,default);
