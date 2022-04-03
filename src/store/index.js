import { createStore } from 'vuex'
import auth from '@/store/auth'
import userData from '@/store/userData'
import upload from '@/store/upload'

export default createStore({
  state: {
    language: null,
  },
  getters: {
    language: s => s.language
  },
  mutations: {
    setLanguage(state, language) {
      state.language = language
    },
  },
  actions: {
    setLanguage({ dispatch, commit }, lang) {
      localStorage.setItem('lang', lang)
      commit('setLanguage', lang)
    }
  },
  modules: {
    auth, userData, upload
  }
})
