const datosProductos = {
    usuario: {
        id: 1,
        email: 'pedroperez@gmail.com',
        usuario: 'pedroperez',
        password: 'hola1234',
        nacimiento: '12/01/2002',
        dni: 42560978,
        foto: 'pedroPerez.png'
    },
    productos: [
        {
            id: 1, imagen: 'toby.png', nombre: 'Toby', descripcion: 'Toby tiene 3 años y es muy amigable y sociable. Está buscando un hogar con mucho cariño.', edad: 3, especie: 'perro', sexo: 'masculino', personalidad: 'sociable y amigable', comentarios: [
                { nombreUsuario: 'zacEfron', texto: 'Qué tierno <3', fotoPerfil: 'zacEfron.png' },
                { nombreUsuario: 'tomHolland', texto: 'Quiero adoptarlo ya!', fotoPerfil: 'tomHolland.png' },
                { nombreUsuario: 'jenniferAnniston', texto: 'Se va a llevar muy bien con mi perrito.', fotoPerfil: 'jenniferAnniston.png' },
                { nombreUsuario: 'margotRobbie', texto: 'Tengo un caniche y se porta re bien.', fotoPerfil: 'margotRobbie.png' },
                { nombreUsuario: 'emmaWatson', texto: 'Que belleza.', fotoPerfil: 'emmaWatson.png' }
            ]
        },

        {
            id: 2, imagen: 'peter.png', nombre: 'Peter', descripcion: 'Peter tiene 12 años y es una cruza con Beagle. Se lleva muy bien con los niños.', edad: 12, especie: 'perro', sexo: 'masculino', personalidad: 'leal y amistoso', comentarios: [
                { nombreUsuario: 'dwayneJohnson', texto: 'Es hermoso!', fotoPerfil: 'dwayneJohnson.png' },
                { nombreUsuario: 'chrisEvans', texto: 'Que ternura.', fotoPerfil: 'chrisEvans.png' },
                { nombreUsuario: 'chrisHemsworth', texto: 'Parece un Jack Russell!', fotoPerfil: 'chrisHemsworth.png' },
                { nombreUsuario: 'henryCavill', texto: 'Que lindas manchas.', fotoPerfil: 'henryCavill.png' },
            ]
        },

        {
            id: 3, imagen: 'luna.png', nombre: 'Luna', descripcion: 'Reservada pero cariñosa, buscando un lugar tranquilo para compartir afecto.', edad: 3, especie: 'gato', sexo: 'femenino', personalidad: 'sensible y paciente', comentarios: [
                { nombreUsuario: 'guillermoFrancella', texto: 'Es hermosa!', fotoPerfil: 'guillermoFrancella.png' },
                { nombreUsuario: 'ricardoDarin', texto: 'Siempre quise un gatito!', fotoPerfil: 'ricardoDarin.png' },
                { nombreUsuario: 'luisanaLopilato', texto: 'La mejor compañia', fotoPerfil: 'luisanaLopilato.png' },
            ]
        },
        {
            id: 4, imagen: 'oliver.png', nombre: 'Oliver', descripcion: 'Curioso observador que busca un hogar donde pueda explorar sin límites.', edad: 12, especie: 'gato', sexo: 'masculino', personalidad: 'independiente y curioso', comentarios: [
                { nombreUsuario: 'diegoPeretti', texto: 'Es muy tierno!', fotoPerfil: 'diegoPeretti.png' },
                { nombreUsuario: 'laliEsposito', texto: 'Sigue en adopcion?', fotoPerfil: 'laliEsposito.png' },
                { nombreUsuario: 'celesteCid', texto: 'Es muy lindo', fotoPerfil: 'celesteCid.png' },
                { nombreUsuario: 'rodridelaSerna', texto: 'Me lo quiero llevar a casa!', fotoPerfil: 'rodridelaSerna.png' }
            ]
        },
        {
            id: 5, imagen: 'simba.png', nombre: 'Simba', descripcion: 'Ideal si necesitas un amigo tranquilo y relajado que disfruta de largas siestas a tu lado.', edad: 6, especie: 'gato', sexo: 'masculino', personalidad: 'reservado y tranquilo', comentarios: [
                { nombreUsuario: 'johnnyDepp', texto: 'Es igual al de la peli! jajaja', fotoPerfil: 'johnnyDepp.png' },
                { nombreUsuario: 'leoDiCaprio', texto: 'Es hermoso!!', fotoPerfil: 'leoDiCaprio.png' },
                { nombreUsuario: 'jenniferLawrence', texto: 'Mi gatito es igual! Se llevarian re bien', fotoPerfil: 'jenniferLawrence.png' },
                { nombreUsuario: 'rachelMcAdams', texto: 'Ay es muy tierno', fotoPerfil: 'rachelMcAdams.png' },
                { nombreUsuario: 'willSmith', texto: '<3 <3', fotoPerfil: 'willSmith.png' }
            ]
        },
        {
            id: 6, imagen: 'molly.png', nombre: 'Molly', descripcion: 'Energética y amigable, Molly está lista para acompañarte en todas tus aventuras. ', edad: 1, especie: 'perro', sexo: 'femenino', personalidad: 'alegre y juguetona', comentarios: [
                { nombreUsuario: 'tomCruise', texto: 'Qué tierna <3', fotoPerfil: 'tomCruise.png' },
                { nombreUsuario: 'tomHanks', texto: 'Es hermosa!', fotoPerfil: 'tomHanks.png' },
                { nombreUsuario: 'juliaRoberts', texto: 'Que chiquita, una ternura', fotoPerfil: 'juliaRoberts.png' },
                { nombreUsuario: 'zendaya', texto: 'Sigue en adopcion?', fotoPerfil: 'zendaya.png' },
                { nombreUsuario: 'bradPitt', texto: 'Que belleza.', fotoPerfil: 'bradPitt.png' }
            ]
        },
        {
            id: 7, imagen: 'bella.png', nombre: 'Bella', descripcion: 'Amable y compasivo, ideal para alguien que valore la compañía tranquila.', edad: 2, especie: 'perro', sexo: 'femenino', personalidad: 'independiente y amigable', comentarios: [
                { nombreUsuario: 'meganFox', texto: 'Es bellisima!', fotoPerfil: 'meganFox.png' },
                { nombreUsuario: 'nataliePortman', texto: 'Es hermosa!', fotoPerfil: 'nataliePortman.png' },
                { nombreUsuario: 'chrisNolan', texto: 'Que lindos los ojitos!', fotoPerfil: 'chrisNolan.png' },
                { nombreUsuario: 'cillianMurphy', texto: 'Ternura total', fotoPerfil: 'cillianMurphy.png' },
                { nombreUsuario: 'florencePugh', texto: 'Que belleza.', fotoPerfil: 'florencePugh.png' }
            ]
        },
        {
            id: 8, imagen: 'charlie.png', nombre: 'Charlie', descripcion: 'Leal y protector, esperando ansiosamente ser parte de una familia amorosa.', edad: 4, especie: 'perro', sexo: 'masculino', personalidad: 'inteligente y afectivo', comentarios: [
                { nombreUsuario: 'wandaNara', texto: 'Gran nombre para un gran perro!', fotoPerfil: 'wandaNara.png' },
                { nombreUsuario: 'mauroIcardi', texto: 'Es muy tierno', fotoPerfil: 'mauroIcardi.png' },
                { nombreUsuario: 'kunAguero', texto: 'Lo puedo pasar a ver?', fotoPerfil: 'kunAguero.png' },
                { nombreUsuario: 'lionelMessi', texto: 'Tengo uno parecido!', fotoPerfil: 'lionelMessi.png' },
                { nombreUsuario: 'antoRoccuzzo', texto: 'Que belleza.', fotoPerfil: 'antoRoccuzzo.png' }
            ]
        },
        {
            id: 9, imagen: 'tyson.png', nombre: 'Tyson', descripcion: 'Compañero de abrazos que te reconforta con su calidez y afecto.', edad: 2, especie: 'perro', sexo: 'masculino', personalidad: 'cariñoso y atento', comentarios: [
                { nombreUsuario: 'pauloDybala', texto: 'Qué tierno <3', fotoPerfil: 'pauloDybala.png' },
                { nombreUsuario: 'rafaNadal', texto: 'Mi amiga tiene uno igual!', fotoPerfil: 'rafaNadal.png' },
                { nombreUsuario: 'ladyGaga', texto: 'Se lleva bien con otros perritos?', fotoPerfil: 'ladyGaga.png' },
                { nombreUsuario: 'katyPerry', texto: 'Que original su nombre! Me encanta', fotoPerfil: 'katyPerry.png' },
                { nombreUsuario: 'edSheeran', texto: 'Hermoso <3', fotoPerfil: 'edSheeran.png' }
            ]
        },
        {
            id: 10, imagen: 'moka.png', nombre: 'Moka', descripcion: 'Tímida al principio, pero una vez que confía, es leal y afectuosa.', edad: 3, especie: 'gato', sexo: 'femenino', personalidad: 'amable y atenta', comentarios: [
                { nombreUsuario: 'tiniStoessel', texto: 'La quiero adoptar ya!', fotoPerfil: 'tiniStoessel.png' },
                { nombreUsuario: 'shakira', texto: 'Me la quiero traer a casa, es muy tierna', fotoPerfil: 'shakira.png' },
                { nombreUsuario: 'justinBieber', texto: 'Que ternura', fotoPerfil: 'justinBieber.png' },
                { nombreUsuario: 'snoopDogg', texto: 'Ay es hermosa!', fotoPerfil: 'snoopDogg.png' },
                { nombreUsuario: 'leoParedes', texto: 'Que belleza.', fotoPerfil: 'leoParedes.png' }
            ]
        }
    ]
};

module.exports = datosProductos;