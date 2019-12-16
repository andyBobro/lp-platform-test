<template>
  <div class="main-layout">
    <div class="main-layout__users">
      <Users />
    </div>
    <div class="main-layout__chat">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Users from "@/components/Users/index.vue";

export default {
  name: "AppMain",
  mounted() {
    this.$store.dispatch("userList/getUserList");
  },
  computed: {
    ...mapState("userList", ["list"])
  },
  components: {
    Users
  }
};
</script>