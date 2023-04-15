<script>
    import imageBackground from "../assets/img-background.jpg";
    import imageBackgroundSecond from "../assets/img-backgroundSecond.jpeg";
    let bg =
        "https://ik.imagekit.io/escapetours/Home_page/1681531693116.jpeg?updatedAt=1681540059087";
</script>

<div class="background">
    <img src={bg} id="imgBG" alt="Palapa en la playa en sonora" />
    <div class="text-container mirror">
        <!-- <img src={logo} alt="Logo de Escape Tours" class="logo-img" /> -->
        <p class="sonora">ESCAPE TOURS</p>
        <div class="divEslogan">
            <p class="eslogan">
                "Date un tour y escapa de la rutina. ¡Disfruta la vida que es un
                viaje muy corto!"
            </p>
        </div>
    </div>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Dongle&display=swap");
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
        border: 6px solid white;
        border-radius: 5px;
        display: flex;
        border-bottom: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 5rem;
    }

    .text-container::after,
    .text-container::before {
        content: "";
        position: absolute;
        bottom: 0;
        border-bottom: 6px solid white;
        width: calc(20% - 12px);
        transform: translateX(-50%);
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
    }

    .text-container::after {
        left: 90px;
    }

    .text-container::before {
        right: 90px;
        transform: translateX(50%);
    }

    .divEslogan {
        position: absolute;
        bottom: 0px;
        width: 66%;
        padding: 20px;
    }

    .eslogan {
        position: absolute;
        text-align: center;
        margin-top: -20px;
        font-size: 3rem;
        font-family: "Dongle";
        color: white;

        line-height: 0.7;
    }

    @media (max-width: 768px) {
        .text-container {
            position: absolute;
            padding: 0px;
        }

        .text-container::after,
        .text-container::before {
            content: "";
            position: absolute;
            bottom: 0;
            border-bottom: 6px solid white;
            width: calc(20% - 12px);
            transform: translateX(-50%);
            border-bottom-left-radius: 2px;
            border-bottom-right-radius: 2px;
        }

        .text-container::after {
            left: 30px;
        }

        .text-container::before {
            right: 30px;
            transform: translateX(50%);
        }

        .divEslogan {
            position: relative;
            bottom: 0px;
            width: 66%;
            padding: 0px;
        }

        .eslogan {
            position: absolute;
            text-align: center;
            margin-top: -20px;
            font-size: 2rem;
            font-family: "Dongle";
            color: white;
            line-height: 0.7;
            padding: 10px;
        }
        .sonora {
            font-size: 5rem !important;
            text-align: center;
            font-family: "angry_birds";
            padding: 0px;
        }
    }

    .sonora {
        font-size: 10rem;
        text-align: center;
        font-family: "angry_birds";
        background: linear-gradient(to right, white, orange);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
        -ms-text-fill-color: transparent;
        -o-text-fill-color: transparent;
        padding: 0 2rem;
    }

    #imgBG {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: drop-shadow(0px 4px 4px rgba(210, 156, 156, 0.15))
            hue-rotate(35deg) brightness(0.8);

        transform: scale(1.5);
        animation: scaleImage 2s forwards ease-in-out 0.5s;

        animation-delay: 0.8s;
    }

    @keyframes scaleImage {
        0% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
