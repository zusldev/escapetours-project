<script>
  export let title;
  export let img;
</script>

<div class="header">
  <div
    class="bg-cover bg-center relative h-96"
    style="background-image:url('{img}'); background-position: center; background-repeat: no-repeat; "
  >
    <div
      class="absolute inset-0 flex bg-black hover:opacity-0 transition duration-300 ease-in opacity-80 items-center justify-center"
    >
      <h1 class="text-5xl text-yellow-300 font-bold shadow-lg">
        {title}
      </h1>
    </div>
  </div>
</div>

<style>
</style>
