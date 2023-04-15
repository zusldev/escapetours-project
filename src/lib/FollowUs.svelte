<script>
  export let social;
  export let username;
</script>

<div class="bg-white shadow-lg rounded-lg overflow-hidden">
  <div class="p-4">
    <div class="flex items-center justify-between">
      <img
        class="h-10 w-10 rounded-full"
        src="https://i.pravatar.cc/100"
        alt="Avatar de usuario"
      />
      <button
        class="bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 text-white"
      >
        Seguir
      </button>
    </div>
    <h3 class="text-lg font-medium text-gray-900 mt-4">
      Siguenos en {social}
    </h3>
    <p class="text-gray-600 mt-2">
      No te pierdas nuestras últimas publicaciones en {social}!
    </p>
    <a
      href={`https://www.{social}.com/{username}`}
      target="_blank"
      class="block text-blue-600 hover:text-blue-500 mt-4"
    >
      {username}
    </a>
  </div>
</div>
