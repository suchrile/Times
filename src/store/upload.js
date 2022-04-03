import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage"
import { getAuth, updateProfile } from "firebase/auth"

export default {
  actions: {
    async uploadAvatar({ commit, dispatch, getters }, file) {
      const uid = await dispatch('getUid')
      if (getters.userData.avatar !== "") {
        await deleteObject(ref(getStorage(), getters.userData.avatar))
        updateProfile(getAuth().currentUser, {
          photoURL: ""
        })
      }
      const avatarRef = ref(getStorage(), `users/${uid}/avatar.${file.name.split('.').pop()}`)
      uploadBytes(avatarRef, file)
      updateProfile(getAuth().currentUser, {
        photoURL: await getDownloadURL(avatarRef)
      })
      console.log(getAuth().currentUser)
    }
  }
}