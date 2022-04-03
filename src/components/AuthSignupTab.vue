<template>
  <form class="auth__form">
    <base-text-field
      label="AUTH_FORM_FIRSTNAME"
      floating
      v-model.trim="firstname"
    />
    <base-text-field
      label="AUTH_FORM_LASTNAME"
      floating
      v-model.trim="lastname"
    />
    <base-text-field
      type="email"
      label="AUTH_FORM_EMAIL"
      floating
      v-model.trim="email"
    />
    <base-text-field
      type="password"
      label="AUTH_FORM_PASSWORD"
      floating
      v-model.trim="password"
    />
    <base-text-field
      type="password"
      label="AUTH_FORM_CONFIRM_PASSWORD"
      floating
    />
    <base-checkbox
      label="AUTH_FORM_AGREEMENT"
      class="auth__form-checkbox"
      @checked="agreementHandler($event)"
    />
    <base-button
      type="submit"
      text="AUTH_FORM_BUTTON_CONTINUE"
      :disabled="!agreement"
      class="auth__form-btn"
      @click.prevent="submitHandler"
    />
  </form>
</template>

<script>
import BaseTextField from '@/components/BaseTextField.vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
  components: {
    BaseTextField,
    BaseCheckbox,
    BaseButton,
  },
  data: () => ({
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    confirmPassword: null,
    agreement: false,
  }),
  methods: {
    agreementHandler(value) {
      this.agreement = value
    },
    async submitHandler() {
      const userData = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
      }
      try {
        await this.$store.dispatch('signup', userData)
        this.$router.push('/')
      } catch (e) {}
    },
  },
}
</script>

<style lang="scss" scoped>
.auth__form {
  & .text-field:not(:last-child) {
    margin-bottom: rem(10);
  }

  &-checkbox {
    padding-top: rem(15);
  }

  &-btn {
    margin-top: rem(30);
  }
}
</style>
