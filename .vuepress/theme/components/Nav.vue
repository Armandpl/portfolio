<template>
  <header>
    <nav
      class="font-sans bg-white text-center text-xl flex items-center justify-between overflow-hidden px-4"
      style="height: 80px"
    >
      <ul class="text-xl text-grey-dark list-reset flex items-center">
        <li v-for="item in $site.themeConfig.nav.slice(0, 2)">
          <a
            :href="item.link"
            class="inline-block py-2 px-3 text-grey-darkest hover:text-grey-dark no-underline"
          >{{item.text}}</a>
        </li>
      </ul>

      <a href="/" class="block text-center no-underline text-black">{{$site.title}}</a>

      <ul class="text-xl text-grey-dark list-reset flex items-center">
        <li v-for="item in $site.themeConfig.nav.slice(2, 4)">
          <a
            :href="item.link"
            class="inline-block py-2 px-3 text-grey-darkest hover:text-grey-dark no-underline"
          >{{item.text}}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>