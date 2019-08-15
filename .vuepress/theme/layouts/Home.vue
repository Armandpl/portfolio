<template>
  <div>
    <section>
      <div class="flex first_section">
        <div class="sm:w-full md:w-1/2 flex flex-col justify-center items-center">
          <h1 class="font-sans font-bold text-5xl w-4/5">
            -Hi, my name is Armand.
          </h1>

          <p class="font-sans text-2xl w-4/5 px-4">
            I am a computer engineering student, freelance developper and machine learning enthusiast.
          </p>
        </div>

        <div class="md:w-1/2 sm:invisible md:visible" id="right"></div>
      </div>

      <div class="flex justify-center" style="margin-top: -180px;">
        <a href="#">          
          <svg class="w-20 h-20" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M51 101c27.614 0 50-22.386 50-50S78.614 1 51 1 1 23.386 1 51s22.386 50 50 50z" fill="#fff" stroke="#2C3E50" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28.658 46.748a2.034 2.034 0 0 0 0 2.995L47.25 67.258c1.756 1.656 4.605 1.656 6.36 0l18.731-17.642c.868-.82.88-2.143.022-2.974-.874-.847-2.316-.858-3.204-.023L52.022 62.765a2.348 2.348 0 0 1-3.182 0L31.837 46.748c-.877-.828-2.3-.828-3.18 0" fill="#2C3E50"/></svg>
        </a>
      </div>
    </section>

    <Content />
  </div>
</template>

<style>
#right {
  background-image: url("../assets/bg_home.jpg");
  background-size: cover;
}

.first_section {
  height: calc(100vh - 80px);
}

h1{
  color: #2C3E50; 
}
</style>