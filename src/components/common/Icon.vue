<template>
  <component :is="whatIcon"></component>
</template>

<script>
import IconSend from "@/components/icons/IconSend.vue";

const Icons = {
  IconSend
};

export default {
  name: "Icon",
  computed: {
    whatIcon() {
      return Icons[this.icon];
    }
  },
  props: {
    icon: {
      type: String,
      defailt: "IconSend"
    }
  },
  components: {
    IconSend
  }
};
</script>