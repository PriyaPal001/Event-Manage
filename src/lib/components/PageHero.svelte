<script>
  import { mainPageData } from "./../../store.js";
  let pgdata = $mainPageData[1];
</script>

<!-- Buddy 
original img background ke 
https://img.freepik.com/free-vector/concert-stage-with-screen-spotlights_107791-2092.jpg?w=1380&t=st=1682278732~exp=1682279332~hmac=2449c8af6ec20da5611026868e9508cf951758e5418ceaa41f6fb7cd21192a95 -->
<section
  class=" bg-[url(https://img.freepik.com/free-photo/rear-view-large-group-music-fans-front-stage-during-music-concert-by-night-copy-space_637285-623.jpg?w=1060&t=st=1682278357~exp=1682278957~hmac=9ed3dc2f1486f90fb2d164f669bdd89357e6a6c3ed8fad54cf430bc5c7a1ad3e)] text-white bg-no-repeat bg-center bg-cover"
>
  <div
    class=" backdrop-blur-[7px]  mx-auto max-w-screen-2xl px-4 py-5 md:py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto max-w-3xl text-center">
      <div  > 
        <h1
          class=" bg-gradient-to-t from-gray-900 via-slate-800 to-gray-900   shd bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl"
        >
          {pgdata.title}

          <span class=" hidden  sm:block"> {pgdata.subtitle} </span>
        </h1>

        <p
          class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed text-white"
        >
          {pgdata.subtext}
        </p>
      </div>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/products"
        >
          {pgdata.btn1}
        </a>

        <a
          class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/about"
        >
          {pgdata.btn2}
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  

</style>
