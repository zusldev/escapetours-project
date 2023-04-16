<script>
  import whatsapplogosvg from "../assets/whatsapp-logo.svg";
</script>

<a
  href="https://api.whatsapp.com/send?phone=+526624968137&text=Hola%2C%20me%20interesa%20reservar%20un%20tour.%20%F0%9F%98%84%F0%9F%8F%96"
  target="_blank"
>
  <button
    class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
  >
    <img src={whatsapplogosvg} alt="whatsapp" class="w-10 h-10 mr-2 iconwha" />
    <span class="font-bold">Chatea con nosotros</span>
  </button>
</a>

<style>
  .iconwha {
    animation: bounce 2s infinite;
  }
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
