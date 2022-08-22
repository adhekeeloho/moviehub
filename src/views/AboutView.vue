<template>
  <div class="about us">
    <Header>
      <template #maincontent>

        <template v-if="movieTrailersLoading"></template>
        <template v-else-if="!movieTrailersLoading && movieTrailers != null"
          ><iframe
            width="100%"
            height="600"
            :src="movieTrailers.embed"
            :title="movieTrailers.title"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </template>
        <template v-else></template>

        <template  v-if="movieDetailsLoading">
          <div data-aos="fade-up" data-aos-duration="3000" class="min-h-screen flex justify-center items-center bg-inherit">
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
          <section data-aos="fade-up" data-aos-duration="3000" class="px-2 py-10 bg-inherit md:px-0">
            <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
              <div class="flex flex-wrap items-center sm:-mx-3">
                <div class="w-full md:w-1/2 md:px-3">
                  <div
                    class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0"
                  >
                    <h1
                      class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl"
                    >
                      <span class="block xl:inline text-white">{{
                        movieDetails.title
                      }}</span>
                    </h1>
                    <p
                      class="mx-auto text-base text-gray-300 sm:max-w-md lg:text-xl md:max-w-3xl"
                    >
                      {{ movieDetails.description }}
                    </p>
                    <div
                      class="relative flex flex-col justify-center sm:flex-row sm:space-x-4"
                    >
                      <div class="flex justify-center mt-1">
                        <h6
                          class="inline-block justify-center bg-white rounded-full px-3 py-1 text-sm font-semibold text-[#1A2A58]"
                        >
                          {{ movieDetails.genres[0].name }}
                        </h6>
                      </div>
                    </div>
                    <div class="">
                      <div class="text-sm text-white">
                        <div class="flex justify-between">
                          <span class="text-white">
                            <b>Country: </b
                            >{{ movieDetails.countries[0].name }}</span
                          >
                          <p><b>Released:</b> {{ movieDetails.year }}</p>
                          <p><b>Ratings:</b> {{ movieDetails.rating }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2">
                  <div class="w-full h-auto overflow-hidden">
                    <img
                      class="w-96 rounded-md"
                      :src="movieDetails.image"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- content ends -->
        </template>
        <template v-else></template>
      </template>
    </Header>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
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
const { movieTrailers, movieTrailersLoading, movieTrailersError } = storeToRefs(
  useMovieTrailer()
);

onMounted(() => {
  movieView.getMovieViews(route.params.id);
  movieTrailer.getMovieTrailers(props);
});
// create moview computed props
// const movie = computed(() => {
//   return movieTrailer.movieTrailers;
// })

const props = route.params.id;
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.us {
  font-family: "Poppins", sans-serif;
}
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
