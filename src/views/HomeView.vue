<script setup>
import { onMounted} from 'vue';
import Header from "../components/Header.vue";
import { useMovie } from "../stores/movie";

const movie = useMovie();


onMounted(() => {
  movie.getMovies();
});
</script>

<template>
  <main>
   <Header>
    <template #maincontent> 
      <div class="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10   justify-center">
    <div class="" v-for="result in movie.movies" :key="result._id">
    <div class="max-w-sm h-full  newsCard news-Slide-up bg-white rounded-lg overflow-hidden shadow-lg mt-10">
         <img class="w-full h-full" :src="result.image" alt="Sunset in the mountains">
       <div class="px-6 py-4 bg-gradient-to-l from-sky-900 to-slate-900  newsCaption ">
       <div class="font-bold text-xl mb-5  newsCaption-title">{{result.title}}</div>
         <p class="text-white-700  mt-3 overflow-auto text-xs newsCaption-content">
      <!-- {{result.description}} -->
        </p>
        <div class="mt-10 flex justify-between">
        <p> <b>Released:</b> {{result.year}} </p>
        <p> <b>Ratings:</b> {{result.rating}} </p>
        </div>
        <div class="mt-10 flex justify-end">
        <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-[#1A2A58] mr-2 mb-2">{{result.genres[0].name}}</span>
        </div>
        <div style="cursor: pointer;" 
                  @click="$router.push({name: 'about', params: { id: result._id}})"> <h1 >Play</h1></div>
  </div>
</div>
    </div>
    </div>
    </template>
   </Header>
  </main>
</template>

<style scoped>
.newsCard {
  position: relative;
  background-color: #fff;
  color:#fff;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.newsCaption {
  position: absolute;
  top: auto;
  bottom: 0;
  opacity: 6;
  left: 0;
  width: 100%;
  height: 60%;
  padding: 15px;
  -webkit-transform: translateY(80%);
          transform: translateY(80%);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transition: opacity 0.1s 0.3s, -webkit-transform 0.4s;
  transition: opacity 0.1s 0.3s, -webkit-transform 0.4s;
  transition: transform 0.4s, opacity 0.1s 0.3s;
  transition: transform 0.4s, opacity 0.1s 0.3s, -webkit-transform 0.4s;
}

.newsCaption-title {
  margin-top: 0px;
}

.newsCaption-content {
  margin: 0;
}

.newsCaption-link {
  color: #fff;
  text-decoration: underline;
  opacity: .8;
  -webkit-transition-property: opacity;
  transition-property: opacity;
  -webkit-transition-duration: 0.15s;
          transition-duration: 0.15s;
  -webkit-transition-timing-function: cubic-bezier(0.39, 0.58, 0.57, 1);
          transition-timing-function: cubic-bezier(0.39, 0.58, 0.57, 1);
}
.newsCaption-link:hover {
  opacity: 0.65;
}

.news-Slide-up:hover .newsCaption {
  opacity: 6;
  -webkit-transform: translateY(0px);
          transform: translateY(0px);
  -webkit-transition: opacity 0.1s, -webkit-transform 0.4s;
  transition: opacity 0.1s, -webkit-transform 0.4s;
  transition: transform 0.4s, opacity 0.1s;
  transition: transform 0.4s, opacity 0.1s, -webkit-transform 0.4s;
}

</style>