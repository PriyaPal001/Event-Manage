<script>
  import { productData } from "./../../../store.js";
  import { productsInfo } from "./../../../store.js";
</script>

<div class="bg-gray-900 py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <h2
        class="text-sky-300 text-2xl lg:text-4xl font-bold text-center mb-4 md:mb-6"
      >
        {$productsInfo.title}
      </h2>

      <p class="max-w-screen-md text-slate-500 md:text-lg text-center mx-auto">
        {$productsInfo.subtext}
      </p>
    </div>
    <!-- text - end -->

    <div
      class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8"
    >
      <!-- product - start -->
      {#each $productData as product}
        <div>
          <a
            href="/products/{product.id}"
            class="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3"
          >
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img
              src={product.img}
              loading="lazy"
              alt="Photo by Nick Karvounis"
              class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
            />
          </a>

          <div class="flex justify-between items-start gap-2 px-2">
            <div class="flex flex-col">
              <a
                href="/products"
                class="text-slate-300 hover:text-sky-400 text-lg lg:text-xl font-bold transition duration-100"
                >{product.title}</a
              >
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
