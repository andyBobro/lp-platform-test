<template>
  <header class="user-header">
    Messages:&nbsp;
    <span class="user-header__caption">&nbsp;{{ msgCount }}&nbsp;</span>
    in
    <span class="user-header__caption">&nbsp;{{ chatCount }}&nbsp;</span>
    chats
  </header>
</template>

<script>
export default {
  name: "UsersHeader",
  props: {
    msgCount: {
      type: Number,
      default: 1
    },
    chatCount: {
      type: Number,
      default: 1
    }
  }
};
</script>

<style lang="scss" scoped>
.user-header {
  padding: $gutter-md;
  border-bottom: 1px solid $color-border;
  color: $color-text;
  &__caption {
    color: $color-caption;
  }
}
</style>