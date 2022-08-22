<template>
  <div class="text-gray-700 us bg-white antialiased">
    <!--Nav-->
    <LandingHeader />
    <div class="py-20 bg-top bg-cover bg-no-repeat bg-fixed ok">
      <div class="container m-auto text-center px-6 opacity-100">
        <h2 class="text-4xl font-bold mb-2 text-white">
          Movie Hub...We have got something for everyone.
        </h2>
        <h3 class="text-2xl mb-8 text-white">
          Are you spending time at home looking for some new sources of
          entertainment? No need to worry we have got movies stacked up for you.
          Register or login to see our Movies.
        </h3>
      </div>
    </div>

    <!-- Features -->
    <div class="bg-gradient-to-l from-sky-900 to-slate-900">
      <section class="container mx-auto px-6 p-10">
        <h2 class="text-4xl font-bold text-center text-white mb-8">
          Movies Hub
        </h2>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          class="flex items-center flex-wrap mb-20"
        >
          <div class="w-full md:w-1/2">
            <img
              class="rounded-lg"
              src="../assets/villain-5367336_1920.jpg"
              alt="movie poster"
            />
          </div>
          <div class="w-full md:w-1/2 pl-10">
            <h4 class="text-3xl mt-3 text-white font-bold mb-3">
              Use Movie Hub Today.
            </h4>
            <p class="text-white mb-3">
              Whether you prefer undiscovered indie gems, gripping
              documentaries, sentimental classics or recent hits, movie hub is
              truly the platform for every genre, taste and streaming option.
              Browse through these free movies list, you are sure to find one or
              more that will provide hours of enjoyment from the comfort of your
              couch or wherever you feel like losing yourself in an engaging
              film.
            </p>
          </div>
        </div>
      </section>
    </div>

    <div>
      <img
        class="h-[400px] w-full"
        src="../assets/fantasy-4126847_1920.jpg"
        alt="movie poster"
      />
    </div>

    <!--Call to Action-->
    <section class="bg-gradient-to-l from-sky-900 to-slate-900">
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        class="container mx-auto px-6 text-center py-10"
      >
        <h2 class="mb-6 text-4xl font-bold text-center text-white">
          Movie Hub
        </h2>
        <h3 class="my-4 text-2xl text-white">
          Want to see amazing movie collections then register or login below.
        </h3>
        <div
         
          class="flex justify-center"
        >
          <button
           style="cursor: pointer"
          @click="
            $router.push({
              name: 'signup',
            })
          "
            class="bg-sky-100 font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-sky-900 hover:text-white hover:bg-sky-900"
          >
            SignUp
          </button>
          <button
            style="cursor: pointer"
            @click="
              $router.push({
                name: 'login',
              })
            "
            class="bg-sky-100 font-bold rounded-full ml-3 mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-sky-900 hover:bg-sky-900 hover:text-white"
          >
            Login
          </button>
        </div>
      </div>
    </section>

    <!--Footer-->
    <Footer />
  </div>
</template>

<script setup>
import LandingHeader from "../components/LandingHeader.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.us {
  font-family: "Poppins", sans-serif;
}
.ok {
  background-image: url(../assets/film-1668918_1920.jpg);
}
</style>