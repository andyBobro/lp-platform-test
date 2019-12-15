<template>
  <div class="login-form">
    <InputBlock
      :id="'app-login-form-email'"
      :label="'Enter email'"
      :name="'appLoginFormEmail'"
      :placeholder="'name@emailservice.com'"
      :size="'md'"
    />
    <InputBlock
      :id="'app-login-form-password'"
      :label="'Enter password'"
      :name="'appLoginFormPassword'"
      :placeholder="'Your password'"
      :size="'md'"
      :type="'password'"
    />
    <button class="btn login-form__login">Login</button>
  </div>
</template>

<script>
import InputBlock from "@/components/forms/InputBlock.vue";
export default {
  name: "LoginForm",
  data() {
    return {};
  },
  components: {
    InputBlock
  }
};
</script>

<style lang="scss">
.login-form {
  &__login {
    height: 80px;
    padding: 0 $gutter-lg;
    font-size: $fs * 1.2;
    text-transform: uppercase;
  }
}
</style>