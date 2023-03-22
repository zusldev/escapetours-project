<script>
    import imageLogo from "../assets/LogoEscapeTours.png";
</script>

<nav>
    <ul>
        <!-- <div class="imageContainer">
            <img src={imageLogo} class="navbar-image" alt="Logo escape tours" />
        </div> -->
        <li><a href="index">Sobre los tours</a></li>
        <li><a href="index">¿Cómo reservar?</a></li>
        <li><a href="index">Testimonios</a></li>
        <li><a href="index">Contacto</a></li>
    </ul>
</nav>

<style>
    nav {
        background-color: transparent;
        display: flex;
        justify-content: space-between;
        justify-content: center;
        padding: 20px 6px;
    }

    ul {
        display: flex;
        align-items: center;
    }

    /* .imageContainer {
        margin-right: 10px;
    }

    .navbar-image {
        height: 80px;
    } */

    li {
        margin: 0 10px;
        text-align: center;
        flex-grow: 1;
    }

    a {
        color: white;
        text-decoration: none;
        font-size: 18px;
        font-weight: 400;
        transition: all 0.2s ease-in-out;
    }

    a:hover {
        color: #ffcc00;
    }

    @media (max-width: 768px) {
        nav {
            flex-direction: column;
            align-items: center;
        }

        li {
            margin: 10px 0;
        }
    }
</style>
