<script lang="ts">
    import { onMount } from "svelte";
    export let title = "";
    export let backgroundImage = "";

    // Carga la imagen de fondo al montar el componente
    onMount(async () => {
        backgroundImage = backgroundImage;
    });
</script>

<div class="box" style="background-image: {backgroundImage}">
    <div class="title">{title}</div>
</div>

<style>
    .box {
        position: relative;
        width: 400px;
        height: 200px;
        background-size: cover;
        background-position: center;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .box:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }

    .title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        color: white;
        text-shadow: 0 0 10px black;
    }
</style>
