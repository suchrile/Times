import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { getDatabase, ref, set } from 'firebase/database'

export default {
  actions: {
    getUid() {
      const user = getAuth().currentUser
      return user ? user.uid : null
    },
    async signup({ dispatch, commit }, { firstname, lastname, email, password }) {
      try {
        await createUserWithEmailAndPassword(getAuth(), email, password)
        updateProfile(getAuth().currentUser, {
          displayName: `${firstname} ${lastname}`
        })
        const uid = await dispatch('getUid')
        await set(ref(getDatabase(), `users/${uid}/info`), { firstname, lastname })
      } catch (e) {
        // commit('setError', e)
        throw e
      }
    },
    async login({ dispatch, commit }, { email, password }) {
      try {
        await signInWithEmailAndPassword(getAuth(), email, password)
      } catch (e) {
        // commit('setError', e)
        throw e
      }
    },
    async logout({ dispatch, commit }) {
      try {
        await signOut(getAuth())
      } catch (e) {
        // commit('setError', e)
        throw e
      }
    }
  }
}