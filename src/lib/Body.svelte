<script>
    import imageBackground from "../assets/img-background.jpg";
</script>

<div class="background">
    <img src={imageBackground} alt="Palapa en la playa en sonora" />
    <div class="text-container">
        <p class="visita">VISITA</p>
        <p class="sonora">SONORA</p>
        <p class="eslogan">
            La vida es un viaje, hazlo inolvidable con nosotros
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
        top: 50%;
        left: 50%;
        line-height: 0.2;
        transform: translate(-50%, -50%);
        text-align: center;
        color: white;
        animation: fadeIn 2s forwards;
    }
    .visita {
        font-size: 1.4rem;
        font-family: Georgia, "Times New Roman", Times, serif;
    }
    .sonora {
        font-size: 5em;
        font-weight: bold;
    }
    .eslogan {
        font-size: 1rem;
        font-weight: 100;
    }

    img {
        width: 100%; /* ajusta el tamaño que quieras que tenga la imagen */
        max-width: 1800px;
        max-height: 1100px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
        animation: scaleImage 2s forwards;
    }

    @keyframes scaleImage {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0.8);
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
