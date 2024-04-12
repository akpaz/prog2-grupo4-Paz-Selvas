create schema piGrupo4EntreAmigos;

use piGrupo4EntreAmigos;

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
    dUsuarioPropietario int unsigned,
	imagen varchar(100),
	nombreProducto varchar(50),
	descripcionProducto varchar(500),
	createdAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp on update current_timestamp,
	deletedAt timestamp null on update current_timestamp,
    
    foreign key (idUsuarioPropietario) references Usuarios(id)
);

