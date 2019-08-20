<template>
  <header>
    <nav
      class="font-sans bg-white text-center text-xl flex items-center justify-between overflow-hidden px-4 fixed w-full z-10 top-0"
      style="height: 80px;"
    >
      <ul class="text-xl text-grey-dark list-reset items-center hidden lg:flex">
        <li v-for="item in $site.themeConfig.nav.slice(0, 2)"">
          <a
            :href="item.link"
            class="inline-block py-2 px-3 text-grey-darkest hover:text-grey-dark hover:border-b hover:pb-2"
          >{{item.text}}</a>
        </li>
      </ul>

      <a href="/" class="text-center font-thin no-underline text-black hidden lg:block">{{$site.title}}</a>

      <ul class="text-xl text-grey-dark list-reset items-center hidden lg:flex">
        <li v-for="item in $site.themeConfig.nav.slice(2, 4)">
          <a
            :href="item.link"
            class="inline-block py-2 px-3 text-grey-darkest hover:text-grey-dark hover:underline"
          >{{item.text}}</a>
        </li>
      </ul>

      <!--MOBILE-->
      <a href="/" class="font-thin no-underline text-black ml-4 lg:hidden">Armand</a>

      <div class="lg:hidden">
        <button class="flex items-center px-3 py-2">
          <svg class="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
    </nav>
  </header>
</template>