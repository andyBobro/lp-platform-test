<template>
  <div class="chat-input">
    <div class="chat-input__input">
      <InputBlock v-model="msg" :placeholder="'Enter message'" />
    </div>
    <div class="chat-input__btn-wrap">
      <button class="chat-input__btn" @click="send">
        <span class="chat-input__btn-icon">
          <Icon :icon="'IconSend'" />
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { postData } from "@/store/api";
import InputBlock from "@/components/forms/InputBlock.vue";
import Icon from "@/components/common/Icon.vue";

export default {
  name: "ChatInput",
  methods: {
    ...mapMutations("chat", ["UPDATE_CHAT"]),
    send() {
      document.dispatchEvent(new Event("chatLoader:show"));
      postData("http://localhost:9000/api/send", {
        msg: this.msg
      }).then(() => {
        this.UPDATE_CHAT({
          author: "__CURRENT_USER__",
          date: new Date(),
          id: this.makeid(16),
          text: this.msg
        });

        this.msg = "";
      });
    },
    makeid(length) {
      let result = "";
      let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }
  },
  data() {
    return {
      msg: ""
    };
  },
  components: {
    InputBlock,
    Icon
  }
};
</script>

<style lang="scss" scoped>
.chat-input {
  display: flex;
  &__input {
    width: calc(100% - 80px);
  }
  &__btn-wrap {
    width: 80px;
  }
  &__btn {
    @include flexCenter;
    width: 100%;
    height: 100%;
    border: 0;
    background-color: $color-primary;
    transition: all ease 0.3s;
    cursor: pointer;
    &:hover {
      background-color: darken($color-primary, 10%);
    }
  }
  &__btn-icon {
    margin-bottom: -8px;
    margin-right: -6px;
  }
}
</style>