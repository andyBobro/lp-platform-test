<template>
  <nav class="user-list">
    <UsersHeader :msgCount="getUsersData.msgCount" :chatCount="getUsersData.list.length" />
    <ul class="user-list__list">
      <li class="user-list__list-item" v-for="user in getUsersData.list" :key="user.id">
        <UsersItem
          :data="{
            id: user.id,
            date: user.lastMsg.date,
            msg: user.lastMsg.text,
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
    ...mapGetters("userList", ["getUsersData"])
  },
  components: {
    UsersHeader,
    UsersItem
  }
};
</script>

<style lang="scss" scoped>
.user-list {
  width: calc(100% + 15px);
  max-height: 100vh; //calc(100vh - 60px);
  margin-right: -15px;
  overflow-y: auto;
}
</style>