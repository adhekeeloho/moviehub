import { defineStore } from "pinia";
import movieServices from "../services/movieServices.Js";

export const useMovieTrailer = defineStore("movieTrailer", {
  state: () => {
    return {
      
      movieTrailers: null,
      movieTrailersLoading: false,
      movieTrailersError: null,
    };
  },
  actions: {
    async getMovieTrailers(id) {
      try {
        this.movieTrailersLoading = true;
        const movies = await movieServices.getMovieTrail(id)
        this.movieTrailers = movies.data.result[0];
          console.log(movies.data.result[0]);
      }  catch (error) {
        this.movieTrailersError = error;
      } finally {
        this.movieTrailersLoading = false;
      }
    },
  },
  getters: {},
  accounts: {},
});
