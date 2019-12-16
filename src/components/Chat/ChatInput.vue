<template>
  <div class="chat-input">
    <InputBlock></InputBlock>
  </div>
</template>

<script>
import InputBlock from "@/components/forms/InputBlock.vue";

export default {
  name: "ChatInput",
  components: {
    InputBlock
  }
};
</script>