<template>
  <div>
    <section>
      <div class="flex h-screen-nav">
        <div class="w-full lg:w-1/2 flex flex-col justify-center items-center">
          <h1 class="font-sans font-bold text-4xl lg:text-5xl text-primary w-4/5">
            <Content slot-key="greeting" />
          </h1>

          <p class="font-sans text-gray-800 text-2xl w-4/5 lg:px-4">
            <Content slot-key="mantra" />
          </p>
        </div>

        <div class="lg:w-1/2 sm:hidden lg:flex" id="right"></div>
      </div>

      <div class="hidden lg:hidden justify-center" style="margin-top: -160px;">
        <a href="#projects">
          <svg
            class="w-20 h-20"
            viewBox="0 0 102 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M51 101c27.614 0 50-22.386 50-50S78.614 1 51 1 1 23.386 1 51s22.386 50 50 50z"
              fill="#fff"
              stroke="#2C3E50"
              stroke-width="2"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.658 46.748a2.034 2.034 0 0 0 0 2.995L47.25 67.258c1.756 1.656 4.605 1.656 6.36 0l18.731-17.642c.868-.82.88-2.143.022-2.974-.874-.847-2.316-.858-3.204-.023L52.022 62.765a2.348 2.348 0 0 1-3.182 0L31.837 46.748c-.877-.828-2.3-.828-3.18 0"
              fill="#2C3E50"
            />
          </svg>
        </a>
      </div>
    </section>

    <section class="flex justify-center min-h-screen items-start" id="projects">
      <div
        class="flex flex-wrap justify-center items-start w-full lg:w-4/6"
        style="padding-top: 80px;"
      >
        <h1
          class="font-sans font-bold text-4xl text-center lg:text-left p-4 w-full text-primary"
        >My projects</h1>

        <!-- nav-->
        <ul class="w-1/6 hidden lg:block">
          <li v-for="el in nav" class="font-semibold py-4">
            <button @click="select(el)" :class="el===selected ? 'selected py-1' : 'py-1'">
              <span class="m-2 uppercase text-sm">{{el}}</span>
            </button>
          </li>
        </ul>

        <!-- projects col-->
        <div class="w-full sm:w-1/2 lg:w-5/6 p-4">
          <Card :project="p" v-for="p in projects"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card
  },
  data() {
    return {
      selected: 'All'
    };
  },
  methods: {
    select(selection){
      console.log(selection);
      this.selected = selection;
    }
  },
  computed: {
    projects() {
      return this.$site.pages
        .filter(x => x.path.startsWith("/projects/"))
        .filter(x => x.frontmatter.tags.includes(this.selected) || this.selected === 'All')
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    },
    nav()
    {
      console.log("nav computed");
      let res = ['All'];
      this.$site.pages
      .filter(x => x.path.startsWith("/projects/"))
      .forEach(function(element) {
        element.frontmatter.tags.forEach(function(tag){
          res.indexOf(tag) === -1 ? res.push(tag) : ''
        })
      });
      return res.sort();
    }
  }
};
</script>

<style>
#right {
  background-image: url("../assets/16.svg");
  background-size: cover;
  background-position: left;
}

.h-screen-nav {
  height: calc(100vh - 80px);
}

.selected {
  border: 2px solid black;
}
</style>