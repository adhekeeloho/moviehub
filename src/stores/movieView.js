import { defineStore } from "pinia";

export const useMovieView = defineStore("movieView", {
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      movieDetails: null,
      movieDetailsLoading: false,
      movieDetailsError: null,
    };
  },
  actions: {
    async getMovieViews(id) {

      var requestOptions = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "02b966095emshcbc7a3af74f3467p13c02djsn00b51e597cb1",
          "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
        },
      };
      try {
        this.movieDetailsLoading = true;
        const call = await fetch(
          "https://movies-app1.p.rapidapi.com/api/movie/" + id,
          requestOptions
        );

        const res = await call.json();

        console.log(res);
        this.movieDetails = res.result;
      } catch (error) {
        this.movieDetailsError = error;
      } finally {
        this.movieDetailsLoading = false;
      }
    },
  },
  getters: {},
  accounts: {},
});
