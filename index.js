import { } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-SERVICE.js'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyD9AEAMLmm4BwkhcMcRKbu5ACXHZhnQ7Ek",
    authDomain: "ilb-leadgen-60c35.firebaseapp.com",
    projectId: "ilb-leadgen-60c35",
    storageBucket: "ilb-leadgen-60c35.appspot.com",
    messagingSenderId: "368290365052",
    appId: "1:368290365052:web:d2af47ccabfd154cc113f9",
    measurementId: "G-PMWES1K6KR"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);