<script>
    import imageBackground from "../assets/img-background.jpg";
    import logo from "../assets/LogoEscapeTours.png";
</script>

<div class="background">
    <img src={imageBackground} id="imgBG" alt="Palapa en la playa en sonora" />
    <div class="text-container">
        <img src={logo} alt="Logo de Escape Tours" class="logo-img" />
        <p class="visita" />
        <p class="sonora">ESCAPE TOURS</p>
        <p class="eslogan px-10">
            "Date un tour y escapa de la rutina. ¡Disfruta la vida que es un
            viaje muy corto!"
        </p>
    </div>
</div>

<style>
    @font-face {
        font-family: "angry_birds";
        src: url("../assets/fonts/feastoffleshbbitalic-qr0-webfont.woff")
            format("woff2");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "angry_birds_italic";
        src: url("../assets/fonts/feastoffleshbbitalic-qr0-webfont.woff")
            format("woff2");
        font-weight: normal;
        font-style: normal;
    }
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
        animation-delay: 0.8s;
    }
    .text-container img {
        width: 100%;
        max-width: 230px;
        margin-bottom: 20px;
    }
    @media (max-width: 768px) {
        .text-container {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            line-height: 1.2;
            text-align: center;
            color: white;
            top: 170px;
        }
        .sonora {
            font-size: 4rem;
        }
        .text-container img {
            width: 50%;
            max-width: 300px;
            margin-bottom: 20px;
        }
    }
    .visita {
        font-size: 2rem;
        font-weight: 100;
        font-family: Georgia, "Times New Roman", Times, serif;
        font-family: "angry_birds";
    }
    .sonora {
        font-size: 4.5rem;
        font-weight: 200;
        font-family: "angry_birds";
        color: #fff;
    }
    .eslogan {
        background: linear-gradient(
            45deg,
            rgba(194, 171, 240, 0.6),
            rgba(240, 6, 229, 0.6),
            rgba(228, 131, 4, 0.6)
        );
        color: #fff;
        font-weight: 200;
        font-size: 1.2rem;
        font-family: "Comic Sans MS", cursive;
        padding: 10px;
        text-align: center;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Agrega una sombra de texto para hacer las letras más legibles */
    }

    #imgBG {
        width: 100%;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
        animation: scaleImage 2s forwards;
        animation-delay: 0.8s;
    }
    @media (max-width: 768px) {
        #imgBG {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: drop-shadow(rgba(0, 0, 0, 0.15));
            animation: 2s forwards;
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
            transform: scale(1);
        }
    }
</style>
