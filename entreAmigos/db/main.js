const datosProductos = {
    usuario : {email:'pedroperez@gmail.com', 
            usuario:'pedroperez', 
            password:'hola1234', 
            nacimiento:'12/01/2002', 
            dni:42560978, 
            foto:'/images/pedroperez'},
    productos : [
        {id : 1, imagen : '/images/products/toby.png', nombre : 'Toby', descripcion : 'Toby tiene 3 años y es muy amigable y sociable. Está buscando un hogar con mucho cariño.', edad : 3, especie : 'perro', sexo : 'masculino', personalidad : 'sociable y amigable', comentarios : [
            {nombreUsuario : 'zacEfron', texto : 'Qué tierno <3', fotoPerfil : '/images/users/zacEfron.png'},
            {nombreUsuario : 'tomHolland', texto : 'Quiero adoptarlo ya!', fotoPerfil : '/images/users/tomHolland.png'},
            {nombreUsuario : 'jenniferAnniston', texto : 'Se va a llevar muy bien con mi perrito.', fotoPerfil : '/images/users/jenniferAnniston.png'},
            {nombreUsuario : 'margotRobbie', texto : 'Tengo un caniche y se porta re bien.', fotoPerfil : '/images/users/margotRobbie.png'},
            {nombreUsuario : 'emmaWatson', texto : 'Que belleza.', fotoPerfil : '/images/users/emmaWatson.png'}
        ]},

        {id : 2, imagen : '/images/products/peter.png', nombre : 'Peter', descripcion : 'Peter tiene 12 años y es una cruza con Beagle. Se lleva muy bien con los niños.', edad : 12, especie : 'perro', sexo : 'masculino', personalidad : 'leal y amistoso', comentarios : [
            {nombreUsuario : 'dwayneJohnson', texto : '', fotoPerfil : '/images/users/dwayneJohnson.png'},
            {nombreUsuario : 'chrisEvans', texto : '', fotoPerfil : '/images/users/chrisEvans.png'},
            {nombreUsuario : 'chrisHemsworth', texto : '', fotoPerfil : '/images/users/chrisHemswroth.png'},
            {nombreUsuario : 'henryCavill', texto : '', fotoPerfil : '/images/users/henryCavill.png'},
        ]},

        {id : 3, imagen : '/images/products/luna.png', nombre : 'Luna', descripcion : 'Reservada pero cariñosa, buscando un lugar tranquilo para compartir afecto.', edad : 3, especie : 'gato', sexo : 'femenino', personalidad : 'sensible y paciente', comentarios : [
            {nombreUsuario : 'guillermoFrancella', texto : 'Qué tierno <3', fotoPerfil : '/images/users/guillermoFrancella.png'},
            {nombreUsuario : 'ricardoDarin', texto : 'Quiero adoptarlo ya!', fotoPerfil : '/images/users/ricardoDarin.png'},
            {nombreUsuario : 'luisanaLopilato', texto : 'Se va a llevar muy bien con mi perrito.', fotoPerfil : '/images/users/luisanaLopilato.png'},
        ]},

        {id : 4, imagen : '/images/products/oliver.png', nombre : 'Oliver', descripcion : 'Curioso observador que busca un hogar donde pueda explorar sin límites.', edad : 12, especie : 'gato', sexo : 'masculino', personalidad : 'independiente y curioso', comentarios : [
            {nombreUsuario : 'diegoPeretti', texto : 'Qué tierno <3', fotoPerfil : '/images/users/diegoPeretti.png'},
            {nombreUsuario : 'laliEsposito', texto : 'Quiero adoptarlo ya!', fotoPerfil : '/images/users/laliEsposito.png'},
            {nombreUsuario : 'celesteCid', texto : 'Se va a llevar muy bien con mi perrito.', fotoPerfil : '/images/users/celesteCid.png'},
            {nombreUsuario : 'rodridelaSerna', texto : 'Que belleza.', fotoPerfil : '/images/users/rodridelaSerna.png'}
        ]},
        {id : 5, imagen : '/images/products/simba.png', nombre : 'Simba', descripcion : 'Ideal si necesitas un amigo tranquilo y relajado que disfruta de largas siestas a tu lado.', edad : 6, especie : 'gato', sexo : 'masculino', personalidad : 'reservado y tranquilo', comentarios : [
            {nombreUsuario : 'Juan Pablo Gomez', texto : 'Qué tierno <3', fotoPerfil : '/images/users/juanpablogomez.png'},
            {nombreUsuario : 'Lucia Rodriguez', texto : 'Quiero adoptarlo ya!', fotoPerfil : '/images/users/luciarodriguez.png'},
            {nombreUsuario : 'Juana Aguirre', texto : 'Se va a llevar muy bien con mi perrito.', fotoPerfil : '/images/users/juanaaguirre.png'},
            {nombreUsuario : 'Mario Cesar', texto : 'Tengo un caniche y se porta re bien.', fotoPerfil : '/images/users/mariocesar.png'},
            {nombreUsuario : 'Martina Gonzalez', texto : 'Que belleza.', fotoPerfil : '/images/users/martinagonzalez.png'}
        ]},
        {id : 6, imagen : '/images/products/molly.png', nombre : 'Molly', descripcion : 'Energética y amigable, Molly está lista para acompañarte en todas tus aventuras. ', edad : 1, especie : 'perro', sexo : 'femenino', personalidad : 'alegre y juguetona', comentarios : [
            {nombreUsuario : 'Juan Pablo Gomez', texto : 'Qué tierno <3', fotoPerfil : '/images/users/juanpablogomez.png'},
            {nombreUsuario : 'Lucia Rodriguez', texto : 'Quiero adoptarlo ya!', fotoPerfil : '/images/users/luciarodriguez.png'},
            {nombreUsuario : 'Juana Aguirre', texto : 'Se va a llevar muy bien con mi perrito.', fotoPerfil : '/images/users/juanaaguirre.png'},
            {nombreUsuario : 'Mario Cesar', texto : 'Tengo un caniche y se porta re bien.', fotoPerfil : '/images/users/mariocesar.png'},
            {nombreUsuario : 'Martina Gonzalez', texto : 'Que belleza.', fotoPerfil : '/images/users/martinagonzalez.png'}
        ]},
        {id : 7, imagen : '/images/products/bella.png', nombre : 'Bella', descripcion : 'Amable y compasivo, ideal para alguien que valore la compañía tranquila.', edad : 2, especie : 'perro', sexo : 'femenino', personalidad : 'independiente y amigable', comentarios : [
            {nombreUsuario : 'Juan Pablo Gomez', texto : 'Qué tierno <3', fotoPerfil : '/images/users/juanpablogomez.png'},
            {nombreUsuario : 'Lucia Rodriguez', texto : 'Quiero adoptarlo ya!', fotoPerfil : '/images/users/luciarodriguez.png'},
            {nombreUsuario : 'Juana Aguirre', texto : 'Se va a llevar muy bien con mi perrito.', fotoPerfil : '/images/users/juanaaguirre.png'},
            {nombreUsuario : 'Mario Cesar', texto : 'Tengo un caniche y se porta re bien.', fotoPerfil : '/images/users/mariocesar.png'},
            {nombreUsuario : 'Martina Gonzalez', texto : 'Que belleza.', fotoPerfil : '/images/users/martinagonzalez.png'}
        ]},
        {id : 8, imagen : '/images/products/charlie.png', nombre : 'Charlie', descripcion : 'Leal y protector, esperando ansiosamente ser parte de una familia amorosa.', edad : 4, especie : 'perro', sexo : 'masculino', personalidad : 'inteligente y afectivo', comentarios : [
            {nombreUsuario : 'Juan Pablo Gomez', texto : 'Qué tierno <3', fotoPerfil : '/images/users/juanpablogomez.png'},
            {nombreUsuario : 'Lucia Rodriguez', texto : 'Quiero adoptarlo ya!', fotoPerfil : '/images/users/luciarodriguez.png'},
            {nombreUsuario : 'Juana Aguirre', texto : 'Se va a llevar muy bien con mi perrito.', fotoPerfil : '/images/users/juanaaguirre.png'},
            {nombreUsuario : 'Mario Cesar', texto : 'Tengo un caniche y se porta re bien.', fotoPerfil : '/images/users/mariocesar.png'},
            {nombreUsuario : 'Martina Gonzalez', texto : 'Que belleza.', fotoPerfil : '/images/users/martinagonzalez.png'}
        ]},
        {id : 9, imagen : '/images/products/tyson.png', nombre : 'Tyson', descripcion : 'Compañero de abrazos que te reconforta con su calidez y afecto.', edad : 2, especie : 'perro', sexo : 'masculino', personalidad : 'cariñoso y atento', comentarios : [
            {nombreUsuario : 'Juan Pablo Gomez', texto : 'Qué tierno <3', fotoPerfil : '/images/users/juanpablogomez.png'},
            {nombreUsuario : 'Lucia Rodriguez', texto : 'Quiero adoptarlo ya!', fotoPerfil : '/images/users/luciarodriguez.png'},
            {nombreUsuario : 'Juana Aguirre', texto : 'Se va a llevar muy bien con mi perrito.', fotoPerfil : '/images/users/juanaaguirre.png'},
            {nombreUsuario : 'Mario Cesar', texto : 'Tengo un caniche y se porta re bien.', fotoPerfil : '/images/users/mariocesar.png'},
            {nombreUsuario : 'Martina Gonzalez', texto : 'Que belleza.', fotoPerfil : '/images/users/martinagonzalez.png'}
        ]},
        {id : 10, imagen : '/images/products/Moka.png', nombre : 'Caniche', descripcion : 'Tímido al principio, pero una vez que confía, es leal y afectuoso.', edad : 3, especie : 'gato', sexo : 'masculino', personalidad : 'amable y atento', comentarios : [
            {nombreUsuario : 'Juan Pablo Gomez', texto : 'Qué tierno <3', fotoPerfil : '/images/users/juanpablogomez.png'},
            {nombreUsuario : 'Lucia Rodriguez', texto : 'Quiero adoptarlo ya!', fotoPerfil : '/images/users/luciarodriguez.png'},
            {nombreUsuario : 'Juana Aguirre', texto : 'Se va a llevar muy bien con mi perrito.', fotoPerfil : '/images/users/juanaaguirre.png'},
            {nombreUsuario : 'Mario Cesar', texto : 'Tengo un caniche y se porta re bien.', fotoPerfil : '/images/users/mariocesar.png'},
            {nombreUsuario : 'Martina Gonzalez', texto : 'Que belleza.', fotoPerfil : '/images/users/martinagonzalez.png'}
        ]}
    ]
};

module.exports = datosProductos;