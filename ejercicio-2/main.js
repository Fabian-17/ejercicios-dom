const mistarjetas = document.getElementById('tarjetas')
const juegos = [
{
    titulo: "Rust",
    descripcion: "Rust es un juego de supervivencia creado por Facepunch Studios​. La inspiración del videojuego viene de múltiples juegos del género de supervivencia.",
    imagen: "./img/Rust.jpg"
},

{
    titulo: "Minecaft",
    descripcion: "Minecraft es un videojuego de construcción de tipo «mundo abierto» o sandbox creado originalmente por el sueco Markus Persson,​ y posteriormente desarrollado por Mojang Studios",
    imagen: "./img/minecraft.webp"
},

{
    titulo: "Counter-Strike: global Offensive",
    descripcion: "Counter-Strike: Global Offensive es un videojuego de disparos en primera persona desarrollado por Valve Corporation y Hidden Path Entertainment. Es el cuarto juego de la saga Counter-Strike.",
    imagen: "./img/counter-strike-go.jpg"
}

]

tarjetas.innerHTML += juegos
.map((juegos) => {
    return `
        <div class="card my-card d-flex col-4 m-2">
            <img src="${juegos.imagen}" class="card-img-top my-img" alt="${juegos.titulo}">
            <div class="card-body ">
                <h5>${juegos.titulo}</h5>
                <p>${juegos.descripcion}</p>
            </div>
        </div>
    `;
  })
  .join('')
