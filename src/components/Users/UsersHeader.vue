<template>
  <header class="user-header">Messages: {{ msgCount }} in {{ chatCount }} chats</header>
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