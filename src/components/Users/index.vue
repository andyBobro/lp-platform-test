<template>
  <nav class="user-list">
    <UsersHeader :msgCount="100" :chatCount="100" />
    <ul class="user-list__list">
      <li class="user-list__list-item" v-for="user in getUsers" :key="user.id">
        <UsersItem
          :data="{
            id: user.id,
            date: user.lastMsg.date,
            msg: user.lastMsg.msg,
            name: user.name
        }"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import UsersHeader from "./UsersHeader.vue";
import UsersItem from "./UsersItem.vue";

export default {
  name: "Users",
  computed: {
    ...mapGetters("userList", ["getUsers"])
  },
  components: {
    UsersHeader,
    UsersItem
  }
};
</script>