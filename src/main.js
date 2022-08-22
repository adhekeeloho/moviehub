import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./index.css";

import App from './App.vue'
import router from './router'

AOS.init();

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnBNwvZM2RQ0fG_rxgCVm2kph6qrIrs04",
  authDomain: "movie-trailer-79ae1.firebaseapp.com",
  projectId: "movie-trailer-79ae1",
  storageBucket: "movie-trailer-79ae1.appspot.com",
  messagingSenderId: "917973424937",
  appId: "1:917973424937:web:0d4523a3c1a339404c3538"
};


initializeApp(firebaseConfig);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
