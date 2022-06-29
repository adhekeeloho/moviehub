import axios from 'axios'

var apiClient = axios.create({
  baseURL: "https://movies-app1.p.rapidapi.com/api/",
  headers: {
    "access-control-allow-credentials": "true",
    "access-control-allow-origin": "*",
    "Content-Type": "application/json; charset=utf-8",
    "X-RapidAPI-Key": "02b966095emshcbc7a3af74f3467p13c02djsn00b51e597cb1",
    "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
  },
});

export default {
  //   getMovies(perPage, page) {
  //     return apiClient.get("/events?_limit=" + perPage + "&_page=" + page);
  //   },
  getMovieTrail(id) {
    return apiClient.get("trailers/" + id);
  },
//   postEvent(event) {
//     return apiClient.post("/events", event);
//   },
};