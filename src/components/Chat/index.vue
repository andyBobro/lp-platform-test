<template>
  <div class="chat-wrapper">
    <div class="chat-wrapper__msgs" :ref="'msgWrap'">
      <div class="chat-wrapper__msgs-inner">
        <ChatMessage
          v-for="item in $store.state.chat.selected.history"
          :key="item.id"
          :data="{
          user: item.author,
          date: item.date,
          id: item.id,
          text: item.text
        }"
        />
      </div>
    </div>
    <div class="chat-wrapper__input">
      <ChatInput />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ChatMessage from "./ChatMessage.vue";
import ChatInput from "./ChatInput.vue";

export default {
  name: "Chat",
  mounted() {
    this.$store.dispatch("chat/getChat", {
      id: this.$route.params.userId
    });
  },
  updated() {
    this.$refs.msgWrap.scroll(0, this.$refs.msgWrap.scrollHeight);
  },
  computed: {
    ...mapState("chat", ["selected"])
  },
  components: {
    ChatMessage,
    ChatInput
  }
};
</script>

<style lang="scss" scoped>
.chat-wrapper {
  height: 100%;
  overflow: hidden;
  &__msgs {
    max-height: calc(100% - 100px);
    padding: 0 $gutter-xs $gutter-lg $gutter-md;
    overflow-y: auto;
  }
  &__msgs-inner {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: flex-end;
  }
}
</style>