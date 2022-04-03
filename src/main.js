import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import lang from '@/filters/language.filter'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_CONFIG_API_KEY,
  authDomain: "timestodos.firebaseapp.com",
  databaseURL: "https://timestodos-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "timestodos",
  storageBucket: "timestodos.appspot.com",
  messagingSenderId: process.env.VUE_APP_FIREBASE_CONFIG_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_CONFIG_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_CONFIG_MEASUREMENT_ID
}

const firebaseApp = initializeApp(firebaseConfig)
getAnalytics(firebaseApp)

let app

onAuthStateChanged(getAuth(), () => {
  if (!app) {
    app = createApp(App)
    app.config.globalProperties.$filters = { lang }
    app.use(store).use(router).mount('#app')
  }
})