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

<style>
    .galeria {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));

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

    .titulo {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        margin: 1rem 0;
    }
</style>
