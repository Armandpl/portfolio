<template>
    <div class="max-w-lg lg:max-w-full lg:flex mb-4 lg:shadow-lg rounded">
    <a :href="project.frontmatter.read_more_bypass ? project.frontmatter.read_more_bypass : project.path" :target="project.frontmatter.read_more_bypass ? '_blank' : ''">
        <div
            class="h-64 lg:h-48 lg:w-64 flex-none bg-cover rounded text-center overflow-hidden"
            :style="'background-image: url('+imgPath+');'"
        ></div>
    </a>
    <div class="bg-white p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
        <div class="text-gray-900 font-bold uppercase text-lg mb-2">{{project.frontmatter.title}}</div>
        <p
            class="text-gray-700 text-base"
        >{{project.frontmatter.excerpt}}</p>
        </div>
        <div class="flex items-center">
        <a :href="project.frontmatter.read_more_bypass ? project.frontmatter.read_more_bypass : project.path" class="mr-4 hidden lg:inline-flex items-center text-sm" 
        :target="project.frontmatter.read_more_bypass ? '_blank' : ''">
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

        <a :href="project.frontmatter.code" v-if="project.frontmatter.code" target="_blank" class="mr-4 hidden lg:inline-flex items-center text-sm">
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

        <a :href="project.frontmatter.external_link" v-if="project.frontmatter.external_link" target="_blank" class="mr-4 hidden lg:inline-flex items-center text-sm uppercase">{{project.frontmatter.external_link_name}}</a>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    props: ['project'],
    computed: {
        imgPath: function(){
            return require('../assets'+this.project.frontmatter.image);
        }
    }
}
</script>