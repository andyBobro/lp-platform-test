<template>
  <nav class="user-list">
    <UsersHeader :msgCount="100" :chatCount="100" />
    <ul class="user-list__list">
      <li class="user-list__list-item">
        <UsersItem />
      </li>
    </ul>
  </nav>
</template>

<script>
import UsersHeader from "./UsersHeader.vue";
import UsersItem from "./UsersItem.vue";
export default {
  name: "Users",
  components: {
    UsersHeader,
    UsersItem
  }
};
</script>