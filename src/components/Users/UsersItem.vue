<template>
  <router-link :to="`/app/${data.id}`" class="user-link">
    <header class="user-link__header">
      <div class="user-link__theme">{{data.name}}</div>
      <div class="user-link__date">{{ data.date }}</div>
    </header>
    <div class="user-link__msg">{{ data.msg }}</div>
  </router-link>
</template>

<script>
export default {
  name: "UsersItem",
  props: {
    data: {
      type: Object,
      default() {
        return {
          id: "1231232",
          name: "Vasya",
          // theme: " ",
          date: new Date(),
          msg: "bla bla bla bla bla "
        };
      }
    }
  }
};
</script>