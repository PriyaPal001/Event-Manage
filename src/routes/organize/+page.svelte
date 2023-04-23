<script>
  import supabase from "$lib/db.js";
  import { fade, scale } from "svelte/transition";

  let eventDetails = {
    first_name: "",
    last_name: "",
    Event_type: "",
    NoOfGuest: 4,
    Location: "",
    Date: "",
    Budget: 0,
    ContactNo: "",
    Message: "",
  };
  $: if (eventDetails.ContactNo.length > 10) {
    eventDetails.ContactNo = eventDetails.ContactNo.slice(0, 10);
  }
  $: if (eventDetails.Budget > 1000000) {
    eventDetails.Budget = 1000000;
  }
  $: if (eventDetails.first_name.length > 15) {
    eventDetails.first_name = eventDetails.first_name.slice(0, 20);
  }

  let cnt = 0;
  let handleData = async () => {
    cnt = 1;
    setTimeout(() => {
      cnt = 0;
    }, 4000);
    try {
      const { data, error } = await supabase
        .from("event")
        .insert([eventDetails]);
      eventDetails.first_name = "";
      eventDetails.last_name = "";
      eventDetails.Event_type = "";
      eventDetails.NoOfGuest = 4;
      eventDetails.Location = "";
      eventDetails.Date = "";
      eventDetails.Budget = 0;
      eventDetails.ContactNo = "";
      eventDetails.Message = "";
    } catch (err) {
      console.log(err);
    }
  };
</script>

<div class=" py-6 sm:py-8 lg:py-12 bg-gradient-to-b from-sky-100 via-sky-200 to-sky-400">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <!-- text - start -->
    <div class="mb-10 md:mb-5">
      <h2
        class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-4xl"
      >
        Organize an event with us Today
        <br />
        <span class="text-sky-500"> Get In Touch </span>
      </h2>

      <div class="text-center flex justify-center align-middle items-center">
        <button class="btn gap-2 lowercase bg-transparent text-gray-900 border-sky-500 mx-4 hover:bg-sky-300">
          eventhub@email.com
        </button>
        <button class="btn gap-2 lowercase bg-transparent text-gray-900 border-sky-500 mx-4 hover:bg-sky-300">
          Phone no: 9137893440
        </button>
      </div>
    </div>
    <!-- text - end -->

    <!-- form - start -->
    <form
      class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2"
      on:submit|preventDefault={handleData}
    >
      <div>
        <label
          for="first-name"
          class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >First name*</label
        >
        <input
          placeholder="First Name"
          required
          name="first-name"
          type="text"
          bind:value={eventDetails.first_name}
          class="w-full rounded-md border-2 border-sky-400 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-sky-300 transition duration-100 focus:ring"
        />
      </div>

      <div>
        <label
          for="last-name"
          class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >Last name*</label
        >
        <input
          required
          placeholder="Last Name"
          name="last-name"
          type="text"
          bind:value={eventDetails.last_name}
          class="w-full rounded-md border-2 border-sky-400 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
        />
      </div>

      <div class="">
        <label
          for="Event"
          class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >Event Type</label
        >
        <select
          name="event"
          id="location"
          bind:value={eventDetails.Event_type}
          class="w-full rounded-md border-2 border-sky-400 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
        >
          <option value="Pick Your Event" selected>Pick your event</option>
          <option value="Wedding">Wedding</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Party">Party</option>
          <option value="Baby Shower">Baby shower</option>
          <option value="Annual Function">Annual function</option>
        </select>
      </div>

      <div class="">
        <label
          for="no of guest"
          class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >Number of guest</label
        >
        <input
          name="no of guest"
          class="w-full rounded-md border-2 border-sky-400 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
          type="number"
          bind:value={eventDetails.NoOfGuest}
        />
      </div>

      <div class="sm:col-span-2">
        <label
          for="Location"
          class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >Location</label
        >
        <!-- <input name="location" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" /> -->
        <select
          name="location"
          id="location"
          bind:value={eventDetails.Location}
          class="w-full rounded-md border-2 border-sky-400 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
        >
          <option value="1">Pick your location</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Navi Mumbai">Navi Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="Nagpur">Nagpur</option>
          <option value="Lonavala">Lonavala</option>
          <option value="Goa">Goa</option>
          <option value="Nashik">Nashik</option>
        </select>
      </div>

      <div class="sm:col-span-2">
        <label
          for="Date"
          class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >Date</label
        >
        <input
          name="Date"
          class="w-full rounded-md border-2 border-sky-400 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
          type="date"
          bind:value={eventDetails.Date}
        />
      </div>

      <div class="">
        <label
          for="Budget"
          class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >Budget</label
        >
        <input
          name="Budget"
          class="w-full rounded-md border-2 border-sky-400 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
          type="text"
          bind:value={eventDetails.Budget}
        />
      </div>

      <div class="">
        <label
          for="Number"
          class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >Contact Number</label
        >
        <input
          placeholder="10 Digits Number"
          name="Number"
          class="w-full rounded-md border-2 border-sky-400 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
          type="text"
          bind:value={eventDetails.ContactNo}
        />
      </div>

      <div class="sm:col-span-2">
        <label
          for="message"
          class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >Message</label
        >
        <textarea
          placeholder="Write your message here"
          bind:value={eventDetails.Message}
          name="message"
          class="h-40 w-full rounded-md border-2 border-sky-400 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
        />
      </div>

      <div class="flex items-center justify-between sm:col-span-2">
        <button
          type="submit"
          class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          >Send</button
        >
      </div>
    </form>
    <!-- form - end -->
  </div>
</div>

{#if cnt === 1}
  <div class="flex justify-center">
    <div
      class="alert alert-info shadow-lg fixed top-10 w-1/2 justify-center"
      in:fade
      out:scale
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="stroke-current flex-shrink-0 w-6 h-6"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          /></svg
        >
        <span>New software update available.</span>
      </div>
    </div>
  </div>
{/if}
