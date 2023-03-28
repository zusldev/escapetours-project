<script>
    import imageLogo from "../assets/LogoEscapeTours.png";
</script>

<nav>
    <div class="container">
        <div class="imageContainer">
            <img src={imageLogo} class="navbar-image" alt="Logo escape tours" />
        </div>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </div>
</nav>

<style>
    nav {
        background-color: transparent;
        display: flex;
        justify-content: space-between;
        justify-content: center;
        padding: 20px 6px;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    ul {
        display: flex;
        align-items: center;
    }

    .navbar-image {
        height: 80px;
    }

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
