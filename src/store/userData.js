import { getDatabase, ref, onValue } from "firebase/database"
import { getAuth } from 'firebase/auth'

export default {
  state: {
    userData: {}
  },
  mutations: {
    setUserData(state, userData) {
      const user = getAuth().currentUser
      state.userData = userData
      state.userData.avatar = user.photoURL
      state.userData.fullname = user.displayName
      state.userData.email = user.email
      state.userData.emailVerified = user.emailVerified
    },
    clearUserData(state) {
      state.userData = {}
    }
  },
  getters: {
    userData: s => s.userData
  },
  actions: {
    async getUserData({ dispatch, commit }) {
      try {
        const uid = await dispatch('getUid')
        onValue(ref(getDatabase(), `/users/${uid}/info`), (snapshot) => {
          commit('setUserData', snapshot.val())
        }, {
          onlyOnce: true
        })
      } catch (e) { }
    }
  }
}