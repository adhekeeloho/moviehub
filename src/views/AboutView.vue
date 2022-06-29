<template>
  <div class="about">
    <Header>
      <template #maincontent>
        <template v-for="result in movieTrailer.movieTrailers" :key="result._id">
          
          <!-- <div class="pb-10">
            <video
              id="my-video"
              class="video-js vjs-theme-fantasy"
              controls
              preload="auto"
              width="1000"
              height="464"
              
              data-setup="{}"
            >
              <source :src="result.url"  type="video/mp4" />
              
            </video>
            </div> -->

            <!-- <div class="flex flex-col items-center w-1/3 mx-auto"> -->
              
	<!-- <div 
    	class="relative h-0 overflow-hidden max-w-full w-full" 
		style="padding-bottom: 56.25%"
 	>
		<iframe
       		:src="result.url" 
            frameborder="0"
            allowfullscreen
            class="absolute top-0 left-0 w-full h-full"
        ></iframe>
	</div>
</div> -->
          
          
          <!-- <div class="pt-10">{{result.description}}</div> -->
        </template>

        <!-- <h1>This is an about page</h1> -->
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
import { onMounted } from "vue";
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
// const { movieTrailers, movieTrailersLoading, movieTrailersError } = storeToRefs(
//   useMovieTrailer()
// );

onMounted(() => {
  movieView.getMovieViews(route.params.id);
  movieTrailer.getMovieTrailers(props);
});

const props = route.params.id;
console.log(props);
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
