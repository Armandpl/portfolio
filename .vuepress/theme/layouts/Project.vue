<template>
  <div class="flex flex-wrap justify-center">
    <div class="w-5/6 lg:w-4/6">

      <div class="flex flex-wrap">

        <div class="w-full lg:flex lg:flex-wrap lg:items-baseline">
          <h1 class="font-sans font-bold text-3xl lg:text-4xl text-primary">{{$page.frontmatter.title}}</h1>

          <h2 class="lg:ml-5 text-xl text-gray-700">{{date}}</h2>
        </div>

        <div class="w-full flex flex-wrap">
          <span class="rounded px-2 py-1 mr-2 text-sm text-white" v-for="tag in $page.frontmatter.tags">{{tag}}</span>
        </div>

        <div class="w-full mt-3">

          <a class="text-xl hover:underline text-link mr-2" target="_blank" :href="$page.frontmatter.code" v-if="$page.frontmatter.code">Github</a>

          <a class="text-xl hover:underline text-link" target="_blank" :href="$page.frontmatter.external_link" v-if="$page.frontmatter.external_link">{{$page.frontmatter.external_link_name}}</a>

        </div>
      </div>

      <div class="mt-5">
        <img
          class="float-right ml-4 my-2 h-auto lg:h-64"
          :src="imgPath"
        />
        <Content />
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  computed: {
    date() {
      return moment(this.$page.frontmatter.date).format("MMMM YYYY");

    },
    imgPath() {
      return require('../assets'+this.$page.frontmatter.image);
    }
  }
}
</script>

<style scoped>
span {
  background-color: #2c3e50;
}
</style>