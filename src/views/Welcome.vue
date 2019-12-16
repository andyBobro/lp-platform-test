<template>
  <div class="welcome-page">
    <div class="welcome-page__login-form">
      <h1 class="welcome-page__heading">MSGR.JS</h1>
      <p
        class="welcome-page__desc"
      >Just another messenger on web technogies. There are over 9k messengers like we and better us. Don't use us. But if you know what are you doing you can log in and enjoy...</p>
      <LoginForm />
    </div>
    <div class="loader" id="pageLoader">
      <div class="loader__spinner"></div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/Welcome/LoginForm.vue";

export default {
  name: "Welcome",
  components: {
    LoginForm
  }
};
</script>

<style lang="scss">
.welcome-page {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  &__login-form {
    width: 640px;
    padding: $gutter-lg;
    background-color: white;
    border: 1px solid $color-primary;
  }
  &__heading {
    font-weight: bold;
    color: $color-primary;
    // text-align: center;
  }
  &__desc {
    font-size: $fs-lg;
  }
}
</style>