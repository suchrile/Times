<template>
  <form class="auth__form">
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
    <base-button
      type="submit"
      text="AUTH_FORM_BUTTON_CONTINUE"
      view="filled"
      size="full"
      class="auth__form-btn"
      :loading="buttonLoading"
      @click.prevent="submitHandler"
    />
    <router-link to="#" class="auth__form-forgot-password">
      {{ $filters.lang('AUTH_FORM_FORGOT_PASSWORD') }}
    </router-link>
  </form>
</template>

<script>
import BaseTextField from '@/components/BaseTextField.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
  components: {
    BaseTextField,
    BaseButton,
  },
  data: () => ({
    email: null,
    password: null,
    buttonLoading: false,
  }),
  methods: {
    async submitHandler() {
      this.buttonLoading = true
      const userData = {
        email: this.email,
        password: this.password,
      }
      try {
        await this.$store.dispatch('login', userData)
        this.$router.push(this.$route.query.to || '/')
      } catch (e) {
        this.buttonLoading = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.auth__form {
  & .text-field:not(:last-child) {
    margin-bottom: rem(10);
  }

  &-btn {
    margin-top: rem(20);
  }

  &-forgot-password {
    display: block;
    margin-top: rem(25);
    text-align: center;
    color: $blue;
  }

  body[theme='dark'] & {
    &-forgot-password {
      color: $darkblue;
    }
  }
}
</style>
