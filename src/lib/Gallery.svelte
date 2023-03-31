<script>
    let itinerario = [
        {
            imagen: "https://ik.imagekit.io/escapetours/Collage_de_fotos_horizontal_de_viajes_y_aventuras_color_gris__4_.png?updatedAt=1680156813363",
            titulo: "Kino viejo",
            descripcion:
                "Visita guiada a los principales atractivos turísticos de la ciudad.",
        },
        {
            imagen: "https://ik.imagekit.io/escapetours/Collage_de_fotos_horizontal_de_viajes_y_aventuras_color_gris__1_.png?updatedAt=1680156813342",
            titulo: "Isla Alcatraz",
            descripcion:
                "Disfruta de un día de sol, arena y mar en una de las mejores playas de la zona.",
        },
        {
            imagen: "https://ik.imagekit.io/escapetours/museo.png?updatedAt=1680157062129",
            titulo: "Museo CONCA' AC",
            descripcion:
                "Visita el museo de la ciudad y conoce la historia de la región.",
        },
        {
            imagen: "https://ik.imagekit.io/escapetours/playaesmeralda.png?updatedAt=1680157063196",
            titulo: "Playa Esmeralda",
            descripcion:
                "Disfruta de un día de sol, arena y mar en una de las mejores playas de la zona.",
        },
    ];

    let imagenAmpliada = null;

    function ampliarImagen(imagen) {
        imagenAmpliada = imagen;
    }

    function cerrarModal() {
        imagenAmpliada = null;
    }
</script>

<div class="galeria">
    {#each itinerario as dia}
        <div
            class="dia"
            on:keydown={() => {}}
            on:click={() => ampliarImagen(dia)}
        >
            <img src={dia.imagen} alt={dia.titulo} />
            <div class="titulo">{dia.titulo}</div>
        </div>
    {/each}
</div>

{#if imagenAmpliada}
    <div class="modal">
        <div class="modal-contenido">
            <img src={imagenAmpliada.imagen} alt={imagenAmpliada.titulo} />
            <div class="titulo">{imagenAmpliada.titulo}</div>
            <div class="descripcion">{imagenAmpliada.descripcion}</div>
            <button on:click={cerrarModal}>Cerrar</button>
        </div>
    </div>
{/if}

<style>
    .galeria {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        gap: 1rem;
    }
    @media screen and (max-width: 600px) {
        .galeria {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1rem;
        }
    }

    .dia {
        position: relative;
        cursor: pointer;
        overflow: hidden;
    }

    .dia img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
    }

    .dia:hover img {
        transform: scale(1.1);
    }

    .titulo {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1rem;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    .dia:hover .titulo {
        opacity: 1;
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
    }

    .modal img {
        max-width: 80%;
        max-height: 80%;
        object-fit: cover;
        display: block;
        margin: 0 auto;
    }

    button {
        background-color: #4caf50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }

    button:hover {
        background-color: #3e8e41;
    }

    .titulo {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        margin: 1rem 0;
    }

    .descripcion {
        font-size: 1.2rem;
        text-align: center;
        margin: 1rem 0;
    }

    .modal-contenido {
        background-color: rgb(0, 0, 0);
        padding: 1rem;
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .modal-contenido .titulo {
        color: white;
        margin-top: 0;
    }

    .modal-contenido .descripcion {
        color: white;
        margin-bottom: 0;
    }

    .modal-contenido button {
        margin-top: 1rem;
    }
    /* Estilos para pantallas más pequeñas que 600px */
    @media screen and (max-width: 600px) {
        .modal-contenido {
            max-width: 90%;
            max-height: 90%;
        }
    }

    /* Estilos para pantallas más grandes que 600px */
    @media screen and (min-width: 601px) {
        .modal-contenido {
            max-width: 800px;
            max-height: 600px;
        }
    }
</style>
