import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { getAuth, updateProfile } from "firebase/auth"

export default {
  actions: {
    async uploadAvatar({ commit, dispatch, getters }, file) {
      const uid = await dispatch('getUid')
      const avatarRef = ref(getStorage(), `users/${uid}/avatar.jpeg`)
      await uploadBytes(avatarRef, file)
      await updateProfile(getAuth().currentUser, {
        photoURL: await getDownloadURL(avatarRef)
      })
    }
  }
}