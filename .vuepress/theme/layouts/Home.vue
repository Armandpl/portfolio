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

      <div class="flex justify-center" style="margin-top: -160px;">
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
        <div class="lg:w-5/6 p-4">
          <div class="max-w-lg lg:max-w-full lg:flex mb-4 shadow-lg rounded" v-for="p in projects">
            <div
              class="h-56 lg:h-48 lg:w-64 flex-none bg-cover rounded-t lg:rounded text-center overflow-hidden"
              :style="'background-image: url('+p.frontmatter.image+');'"
            ></div>
            <div class="bg-white p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8">
                <div class="text-gray-900 font-bold uppercase text-lg mb-2">{{p.frontmatter.title}}</div>
                <p
                  class="text-gray-700 text-base"
                >{{p.frontmatter.excerpt}}</p>
              </div>
              <div class="flex items-center">
                <a :href="p.path" class="mr-4 inline-flex items-center text-sm">
                  READ MORE
                  <svg
                    class="ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                  >
                    <path
                      class="heroicon-ui"
                      d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"
                    />
                  </svg>
                </a>

                <a :href="p.frontmatter.code" v-if="p.frontmatter.code" target="_blank" class="mr-4 inline-flex items-center text-sm">
                  CODE
                  <svg
                    class="ml-2    "
                    width="18"
                    height="18"
                    viewBox="0 0 1024 1024"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0z"
                      fill="#1B1F23"
                    />
                  </svg>
                </a>

                <a :href="p.frontmatter.download" v-if="p.frontmatter.download" target="_blank" class="mr-4 inline-flex items-center text-sm">DOWNLOAD</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
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
      return res;
    }
  }
};
</script>

<style>
#right {
  background-image: url("../assets/bg_home.jpg");
  background-size: cover;
}

.h-screen-nav {
  height: calc(100vh - 80px);
}

.selected {
  border: 2px solid black;
}
</style>