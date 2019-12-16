<template>
  <div class="main-layout">
    <div class="main-layout__users">
      <Users />
      <div class="loader" id="userLoader">
        <div class="loader__spinner"></div>
      </div>
    </div>
    <div class="main-layout__chat">
      <router-view></router-view>
      <div class="loader" id="chatLoader">
        <div class="loader__spinner"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Users from "@/components/Users/index.vue";

export default {
  name: "AppMain",
  mounted() {
    document.dispatchEvent(new Event("userLoader:show"));
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