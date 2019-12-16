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
    <button class="btn login-form__login" @click="login">Login</button>
  </div>
</template>

<script>
import InputBlock from "@/components/forms/InputBlock.vue";
export default {
  name: "LoginForm",
  methods: {
    login() {
      document.dispatchEvent(new Event("pageLoader:show"));
      setTimeout(() => {
        document.dispatchEvent(new Event("pageLoader:hide"));
        this.$router.push("/app/main");
      }, 1000);
    }
  },
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
    margin-top: $gutter-md;
    padding: 0 $gutter-lg;
    font-size: $fs * 1.2;
    text-transform: uppercase;
  }
}
</style>