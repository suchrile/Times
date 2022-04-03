<template>
  <div class="settings-profile">
    <div class="settings-profile__avatar">
      <div class="settings-profile__avatar-preview">
        <img :src="userData.avatar" alt="" />
      </div>
      <base-upload-button
        text="Изменить фото"
        accept=".png, .jpg, .jpeg"
        @upload="upload"
      />
    </div>

    <base-text-field
      type="text"
      label="SETTINGS_PROFILE_FIRSTNAME"
      v-model="userData.firstname"
    />
    <base-text-field
      type="text"
      label="SETTINGS_PROFILE_LASTNAME"
      v-model="userData.lastname"
    />
    <base-note text="Укажите свое имя и фамилию." />
    <base-button text="SETTINGS_PROFILE_LOGOUT" @click.prevent="logout" />
  </div>
</template>

<script>
import BaseTextField from '@/components/BaseTextField.vue'
import BaseNote from '@/components/BaseNote.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseUploadButton from '@/components/BaseUploadButton.vue'

export default {
  components: {
    BaseTextField,
    BaseNote,
    BaseButton,
    BaseUploadButton,
  },
  computed: {
    userData() {
      return this.$store.getters.userData
    },
  },
  methods: {
    upload(files) {
      files.forEach((file) => {
        this.$store.dispatch('uploadAvatar', file)
      })

      // img[0].name.split('.').pop()
    },
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/auth')
    },
  },
}
</script>

<style lang="scss" scoped>
.settings-profile {
  margin-top: rem(10);

  &__avatar {
    margin-bottom: rem(15);

    &-preview {
      width: rem(100);
      height: rem(100);
      margin: 0 auto;
      border-radius: 50%;
      overflow: hidden;

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    & .upload {
      display: block;
      text-align: center;
      margin-top: rem(8);
    }
  }

  &__change-avatar {
    display: block;
    margin: 0 auto;
    margin-top: rem(8);
    font-size: rem(16);
    color: $blue;
    border: none;
    background: none;
  }

  & .text-field:not(:last-child) {
    margin-bottom: rem(4);
  }

  & .button__wrapper {
    margin-top: rem(35);
  }
}
</style>
