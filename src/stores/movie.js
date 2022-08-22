import { defineStore } from "pinia";

export const useMovie = defineStore({
  id: 'movie',
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      movieLoading: false,
      movieErrors: null,
      movies: [],
    };
  },
  actions: {
    async getMovies() {

      var requestOptions = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "02b966095emshcbc7a3af74f3467p13c02djsn00b51e597cb1",
          "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
        },
      };
      try {
        this.movieLoading = true;
        const call = await fetch(
          "https://movies-app1.p.rapidapi.com/api/movies?page=3",
          requestOptions
        );

        const res = await call.json();
        this.movies = res.results;
        console.log(res.results);
        
      } catch (error) {
        this.movieError = error;
      } finally {
        this.movieLoading = false;
      }
    },
  },
  getters: {},
  accounts: {},
});
