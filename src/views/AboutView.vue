<template>
  <div class="about">
    <Header>
      <template #maincontent>
        <!-- i added youtube iframe here -->
        <iframe width="727" height="409" :src="movie.embed" :title="movie.title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <template v-if="movieDetailsLoading">
          <div class="min-h-screen flex justify-center items-center bg-inherit">
            <div class="loader bg-white p-5 rounded-full flex space-x-3">
              <div
                class="w-5 h-5 bg-[#1A2A58] rounded-full animate-bounce"
              ></div>
              <div
                class="w-5 h-5 bg-[#1A2A58] rounded-full animate-bounce"
              ></div>
              <div
                class="w-5 h-5 bg-[#1A2A58] rounded-full animate-bounce"
              ></div>
            </div>
          </div>
        </template>
        <template v-else-if="!movieDetailsLoading && movieDetails != null">

          <!-- content start -->
          <div class="max-w-sm w-full lg:max-w-full lg:flex">
            <div
              class="lg:h-auto lg:w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center"
            >
              <img class="w-full h-full" :src="movieDetails.image" alt="" />
            </div>
            <div
              class="bg-inherit rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
            >
              <div class="">
                <div class="text-white font-bold text-xl mb-2">
                  {{ movieDetails.title }}
                </div>
                <p class="text-white text-base">
                  {{ movieDetails.description }}
                </p>
                <h5 class="text-white font-bold mt-10 text-center">Genre</h5>
                <div class="flex justify-center mt-1">
                <h6
                  class="inline-block justify-center bg-white rounded-full px-3 py-1 text-sm font-semibold text-[#1A2A58] "
                  >  {{ movieDetails.genres[0].name }}</h6
                >
                </div>
              </div>
              <span class="text-white">
                <b>Country: </b>{{ movieDetails.countries[0].name }}</span
              >
              <div class="">
                <div class="text-sm text-white">
                  <div class="flex justify-between">
                    <p><b>Released:</b> {{ movieDetails.year }}</p>
                    <p><b>Ratings:</b> {{ movieDetails.rating }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- content ends -->
        </template>
        <template v-else></template>
      </template>
    </Header>
  </div>
</template>

<script setup>

/*
* Try to refactor the entire code and write lesser lines by following DRY 
* (Do not Repeat Yourself) coding standard. Your naming convention is
* also very weird and i think you should really improve on that.
*/

import { onMounted, computed } from "vue";
import Header from "../components/Header.vue";
import { useMovieView } from "../stores/movieView";
import { useMovieTrailer } from "../stores/movieTrailer";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

const route = useRoute();

const movieView = useMovieView();
const { movieDetails, movieDetailsLoading, movieDetailsError } = storeToRefs(
  useMovieView()
);
const movieTrailer = useMovieTrailer();

onMounted(() => {
  movieView.getMovieViews(route.params.id);
  movieTrailer.getMovieTrailers(props);
});
// create moview computed props
const movie = computed(() => {
  return movieTrailer.movieTrailers;
})

const props = route.params.id;

</script>

<style scoped>
.loader div {
  animation-duration: 0.5s;
}

.loader div:first-child {
  animation-delay: 0.1s;
}

.loader div:nth-child(2) {
  animation-delay: 0.3s;
}

.loader div:nth-child(3) {
  animation-delay: 0.6s;
}
</style>
