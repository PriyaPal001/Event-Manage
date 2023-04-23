<script>
  import { mainPageData } from "./../../store.js";
  let pgdata = $mainPageData[1];
</script>

<section class="bg-[url(https://img.freepik.com/free-vector/concert-stage-with-screen-spotlights_107791-2092.jpg?w=1380&t=st=1682258291~exp=1682258891~hmac=17aa262126c091daabce6e851075cdf4439af5302942594fbed3966007b9408d)] bg-gray-900 text-white bg-no-repeat bg-center bg-cover backdrop-blur-xl">
  <div
    class="mx-auto max-w-screen-xl px-4 py-5 md:py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto max-w-3xl text-center">
      <div >
        <h1
        class="bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl"
      >
        {pgdata.title}

        <span class=" hidden sm:block  "> {pgdata.subtitle} </span>
      </h1>

      <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed text-black">
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



