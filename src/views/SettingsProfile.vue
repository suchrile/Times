<template>
  <section class="settings-profile">
    <div class="settings-profile__avatar">
      <div class="settings-profile__avatar-preview" @click="isPopupOpen = true">
        <img :src="userData.avatar" :style="randomBackground" />
      </div>
      <!-- <base-upload-button
        text="SETTINGS_PROFILE_CHANGE_PHOTO"
        accept=".png, .jpg, .jpeg"
        @upload="upload"
      /> -->
      <div class="settings-profile__change-avatar">
        <base-button
          text="SETTINGS_PROFILE_CHANGE_AVATAR"
          view="plain"
          size="medium"
          @click="isActionSheetOpen = true"
        />
      </div>
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
    <base-note text="SETTINGS_PROFILE_NAME_NOTE" />
    <div class="settings-profile__logout">
      <base-button
        text="SETTINGS_PROFILE_LOGOUT"
        view="grey"
        size="full"
        @click.prevent="logout"
      />
    </div>
    <base-action-sheet
      v-if="isActionSheetOpen"
      :actions="actions"
      @choose="chooseHandler($event)"
      @cancel="isActionSheetOpen = false"
    />
    <base-popup v-if="isPopupOpen" @close="isPopupOpen = false">
      <h2>Hello</h2>
      <br />
      <div>
        <base-button text="SETTINGS_PROFILE_LASTNAME" view="grey" size="full" />
      </div>
    </base-popup>
  </section>
</template>

<script>
import BaseTextField from '@/components/BaseTextField.vue'
import BaseNote from '@/components/BaseNote.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseUploadButton from '@/components/BaseUploadButton.vue'
import BaseActionSheet from '@/components/BaseActionSheet.vue'
import BasePopup from '@/components/BasePopup.vue'

export default {
  components: {
    BaseTextField,
    BaseNote,
    BaseButton,
    BaseUploadButton,
    BaseActionSheet,
    BasePopup,
  },
  data: () => ({
    isPopupOpen: false,
    isActionSheetOpen: false,
    buttonLoading: false,
  }),
  computed: {
    actions() {
      const actionsArr = [
        { title: 'SETTINGS_PROFILE_CHANGE_AVATAR', value: 'change' },
        { title: 'SETTINGS_PROFILE_CHOOSE_MEMOJI', value: 'choose-memoji' },
      ]
      if (this.userData.avatar) {
        actionsArr.push({
          title: 'SETTINGS_PROFILE_DELETE_AVATAR',
          value: 'delete',
          danger: true,
        })
      }
      return actionsArr
    },
    userData() {
      return this.$store.getters.userData
    },
    randomBackground() {
      const colors = [
        'F5B9C6',
        'F5AAA4',
        'F3CEA7',
        'F3DBA3',
        'BDE7C1',
        'B6DDF0',
        'CBBFF0',
      ]
      return `background-color: #${colors[Math.floor(Math.random() * 7)]};`
    },
  },
  methods: {
    upload(files) {
      files.forEach((file) => {
        this.$store.dispatch('uploadAvatar', file)
      })
    },
    chooseHandler(action) {
      this.isActionSheetOpen = false
      console.log(action)
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
      width: rem(110);
      height: rem(110);
      margin: 0 auto;
      border-radius: 50%;
      overflow: hidden;

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  &__change-avatar {
    margin-top: rem(6);
    text-align: center;
  }

  & .text-field {
    &:not(:last-child) {
      margin-bottom: rem(4);
    }
  }

  &__logout {
    margin-top: rem(35);
  }
}
</style>
