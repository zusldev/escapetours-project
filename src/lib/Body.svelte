<script>
    import imageBackground from "../assets/img-background.jpg";
    import logo from "../assets/LogoEscapeTours.png";
    import NavBar from "./NavBar.svelte";
</script>

<div class="container">
    <NavBar />
    <div class="background">
        <img
            id="imgBack"
            src={imageBackground}
            alt="Palapa en la playa en sonora"
        />
        <div class="text-container">
            <p class="visita">VISITA</p>
            <p class="sonora">SONORA</p>
            <img src={logo} alt="" srcset="" />
            <p class="eslogan">
                La vida es un viaje, hazlo inolvidable con nosotros
            </p>
        </div>
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
        text-shadow: 2px 2px 50px rgba(0, 0, 0, 0.5);
        animation: fadeIn 2s forwards;
        background-color: rgba(0, 0, 0, 0.5);
        box-shadow: 0 0 2px 10px rgba(0, 0, 0, 0.5);
        padding: 1rem;
        border: 1px solid white;
    }
    .text-container img {
        width: 100%;
        max-width: 200px;
        max-height: 200px;
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
        margin-top: 2rem;
        font-size: 1rem;
        font-weight: 100;
    }

    #imgBack {
        width: 100%; /* ajusta el tamaño que quieras que tenga la imagen */
        max-width: 1800px;
        max-height: 1100px;
        animation: scaleImage 2s forwards;
        filter: blur(3px);
    }

    @keyframes scaleImage {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0.9);
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
