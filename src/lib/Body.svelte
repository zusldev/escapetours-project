<script>
    import imageBackground from "../assets/img-background.jpg";
</script>

<div class="background">
    <img src={imageBackground} alt="Palapa en la playa en sonora" />
    <div class="text-container">
        <p class="visita">VISITA</p>
        <p class="sonora">SONORA</p>
        <p class="eslogan px-10">
            "Date un tour y escapa de la rutina. ¡Disfruta la vida que es un
            viaje muy corto!"
        </p>
    </div>
</div>

<style>
    .background {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        position: relative;
        overflow: hidden;
    }
    .text-container {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        line-height: 1.2;
        text-align: center;
        color: white;
        text-shadow: 2px 2px 50px rgba(0, 0, 0, 0.5);
        animation: fadeIn 2s forwards;
    }
    .visita {
        font-size: 1.4rem;
        font-weight: 100;
        font-family: Georgia, "Times New Roman", Times, serif;
    }
    .sonora {
        font-size: 5em;
        font-weight: bold;
    }
    .eslogan {
        font-size: 1rem;
        font-weight: 100;
        font-family: Georgia, "Times New Roman", Times, serif;
    }

    img {
        width: 100%;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
        animation: scaleImage 2s forwards;
        animation-delay: 0.8s;
    }
    @media (max-width: 768px) {
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: drop-shadow(rgba(0, 0, 0, 0.15));
            animation: 2s forwards;
            filter: blur(1px);
        }
        .background {
            background-size: cover;
            background-position: center;
        }
    }

    @keyframes scaleImage {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0.9);
        }
    }
</style>
