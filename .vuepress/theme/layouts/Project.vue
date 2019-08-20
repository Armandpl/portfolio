<template>
  <div class="flex flex-wrap justify-center">
    <div class="w-4/6">
      <h1 class="font-sans text-5xl text-primary">{{$page.frontmatter.title}}</h1>

      <h2>{{$page.frontmatter.date}}</h2>

      <span class="bg-primary rounded px-2 py-1 mr-2 text-white" v-for="tag in $page.frontmatter.tags">{{tag}}</span>

      <div>
        <img
          class="float-right ml-4 my-2 h-56"
          :src="$page.frontmatter.image"
        />
        <Content />
      </div>
    </div>
  </div>
</template>