import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

const firebaseConfig = {

    apiKey: "AIzaSyBKhWZiD-Jq1euayTsy_PPwBgcd-C4Nh4I",

    authDomain: "sae203-da749.firebaseapp.com",

    projectId: "sae203-da749",

    storageBucket: "sae203-da749.appspot.com",

    messagingSenderId: "935795693762",

    appId: "1:935795693762:web:18223f897032da38cb835b"
};

const appFirebase = initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)

app.mount('#app')
