<template>
  <div class="flex lg:items-center justify-center h-screen-nav">
    <div class="flex w-full lg:w-4/6 lg:items-center">
      <div class="w-full lg:w-1/2 p-4">
        <h1>{{$page.frontmatter.title}}</h1>

        <Content class="mb-4" />

        <a href="/contact.html" class="text-xl inline-flex">
          Get in touch →
        </a>

      </div>

      <div class="w-1/2 hidden lg:flex relative" style="padding-bottom: 50%;">
        <img class="absolute h-full w-full object-cover rounded" src="../assets/armand.jpg" />
      </div>
    </div>
  </div>
</template>