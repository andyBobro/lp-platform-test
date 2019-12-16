<template>
  <div class="chat-message" :class="`${msgController.isMe ? 'chat-message--me' : ''}`">
    <div class="chat-message__inner">
      <div class="chat-message__msg">{{ data.text }}</div>
      <div class="chat-message__user">
        {{ msgController.user }}
        <span class="chat-message__date">{{ msgController.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "ChatMessage",
  computed: {
    msgController() {
      if (this.data.user === "__CURRENT_USER__") {
        return {
          user: "You",
          isMe: true,
          date: dayjs(this.data.date).format("DD.MM.YYYY HH.MM")
        };
      } else {
        return {
          user: this.data.user,
          isMe: false,
          date: dayjs(this.data.date).format("DD.MM.YYYY HH.MM")
        };
      }
    }
  },
  props: {
    data: {
      type: Object,
      default() {
        return {
          user: " ",
          text: " ",
          date: new Date()
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-message {
  display: flex;
  margin-top: $gutter-md;
  &--me {
    justify-content: flex-end;
    .chat-message__msg {
      border-radius: 8px 8px 8px 0px;
      background-color: $color-bg-msg-bubble-me;
    }
    .chat-message__user {
      justify-content: flex-end;
    }
    .chat-message__date {
    }
  }
  &__inner {
    width: 380px;
  }
  &__msg {
    margin-bottom: $gutter-xs;
    padding: $gutter-md;
    border-radius: 8px 8px 8px 0px;
    background-color: $color-bg-msg-bubble;
    line-height: 1.4;
  }
  &__user {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: bold;
    color: black;
  }
  &__date {
    margin-left: $gutter-xs;
    font-size: 10px;
    line-height: 1.4;
    font-weight: normal;
    color: $color-caption;
  }
}
</style>