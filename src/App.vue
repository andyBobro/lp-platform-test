<template>
  <Wrapper>
    <router-view />
  </Wrapper>
</template>

<script>
import Wrapper from "@/components/common/Wrapper.vue";

export default {
  name: "App",
  components: {
    Wrapper
  }
};
</script>

<style lang="scss">
@import "@/styles/reset";
@import "@/styles/fonts";
@import "@/styles/layout";
@import "@/styles/typo";
@import "@/styles/btns";
</style>
