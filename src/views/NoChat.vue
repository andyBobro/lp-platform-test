<template>
  <div class="no-chat">
    <h3 class="no-chat__start">Select user to start chatting</h3>
  </div>
</template>

<style lang="scss" scoped>
.no-chat {
  @include flexCenter;
  height: 100%;
  &__start {
    max-width: 60%;
    padding: $gutter-md;
    border: 1px solid $color-border;
  }
}
</style>