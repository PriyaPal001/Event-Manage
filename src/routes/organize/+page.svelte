<script>
  import supabase from "$lib/db.js";
  import { onMount } from "svelte";

  $: eventData=[];
  onMount(async () => {
    
let { data, error } = await supabase
  .from('event')
  .select('*')
  eventData=data;
});

$:console.log(eventData);
</script>


<div class=" py-6 sm:py-8 lg:py-12 bg-white">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <!-- text - start -->
      <div class="mb-10 md:mb-16">
        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Get in touch</h2>
  
        <div class="text-center flex justify-center align-middle items-center">
          <a class="text-indigo-500 mx-5">eventhub@email.com</a>
          <p class="leading-normal my-5">Phone no: 1234567890
          </p>
        </div>
      </div>
      <!-- text - end -->
  
      <!-- form - start -->
      <form class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
        <div>
          <label for="first-name" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">First name*</label>
          <input name="first-name" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>
  
        <div>
          <label for="last-name" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Last name*</label>
          <input name="last-name" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>
  
        <div class="">
          <label for="Event" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Event Type</label>
          <select name="event" id="location"class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring">
            <option value="1">Pick your event</option>
            <option value="2">Wedding</option>
            <option value="2">Anniversary</option>
            <option value="3">Party</option>
            <option value="4">Baby shower</option>
            <option value="5">Annual function</option>
          </select>
        </div>

        <div class="">
          <label for="no of guest" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Number of guest</label>
          <input name="no of guest" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring "  type="number"/>
        </div>
  
        <div class="sm:col-span-2">
          <label for="Location" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Location</label>
          <!-- <input name="location" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" /> -->
          <select name="location" id="location"class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring">
            <option value="1">Pick your location</option>
            <option value="2">Mumbai</option>
            <option value="2">Navi Mumbai</option>
            <option value="3">Pune</option>
            <option value="4">Nagpur</option>
            <option value="5">Lonavala</option>
            <option value="5">Goa</option>
            <option value="5">Nashik</option>
          </select>
        </div>
  
        <div class="sm:col-span-2">
          <label for="Date" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Date</label>
          <input name="Date" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring "  type="date"/>
        </div>

        <div class="">
          <label for="Budget" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Budget</label>
          <input name="Budget" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring "  type="text"/>
        </div>

        <div class="">
          <label for="Number" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Contact Number</label>
          <input name="Number"  class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring "  type="text"/>
        </div>
  
        <div class="sm:col-span-2">
          <label for="message" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Message</label>
          <textarea name="message" class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
        </div>
  
        <div class="flex items-center justify-between sm:col-span-2">
          <button class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>
        </div>
  
        <p class="text-xs text-gray-400">By signing up to our newsletter you agree to our <a href="#" class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.</p>
      </form>
      <!-- form - end -->
    </div>
  </div>