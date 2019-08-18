<template>
  <div class="flex justify-center">
    <div class="sm:w-5/6 md:w-4/6 px-4">
      <div class="flex justify-between mb-4">
        <h1>Resume</h1>
        <button
          class="bg-primary hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg
            class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Download PDF</span>
        </button>
      </div>

      <Content style="border: 1px solid black;" />
    </div>
  </div>
</template>