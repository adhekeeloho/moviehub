import { defineStore } from "pinia";
import movieServices from "../services/movieServices.Js";

export const useMovieTrailer = defineStore("movieTrailer", {
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      movieTrailers: null,
      movieTrailersLoading: false,
      movieTrailersError: null,
    };
  },
  actions: {
    async getMovieTrailers(id) {
      const movies = await movieServices.getMovieTrail(id)
        this.movieTrailers = movies.data.result[0];
      
    },
  },
  getters: {},
  accounts: {},
});
