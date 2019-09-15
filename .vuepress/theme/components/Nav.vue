<template>
  <header>
    <nav
      class="font-sans bg-white text-center text-xl flex flex-wrap items-center justify-center lg:justify-between overflow-hidden lg:px-4 fixed w-full z-10 top-0"
      style="height: 80px;"
    >

      <ul class="text-xl text-grey-dark items-center flex">
        <li v-for="item in $site.themeConfig.nav.slice(0, 2)">
          <a
            :href="item.link"
            class="inline-block py-2 pr-3 text-grey-darkest hover:text-grey-dark"
          >{{item.text}}</a>
        </li>
      </ul>

      <a href="/" class="text-center font-thin no-underline text-black hidden lg:block">{{$site.title}}</a>

      <ul class="text-xl text-grey-dark items-center flex">
        <li v-for="item in $site.themeConfig.nav.slice(2, 4)">
          <a
            :href="item.link"
            class="inline-block py-2 pl-3 text-grey-darkest hover:text-grey-dark"
          >{{item.text}}</a>
        </li>
      </ul>

    </nav>
  </header>
</template>