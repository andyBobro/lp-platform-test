<template>
  <div class="input-block">
    <label v-if="!label" :for="id" class="input-block__label">{{label}}</label>
    <input
      v-if="whatInput.type === 'text'"
      :placeholder="placeholder"
      :id="id"
      :type="type"
      :name="name"
      :value="value"
      @keyup.enter="inputHandler"
      @input="inputHandler"
      :class="`input-block__text-input input-block__text-input--${size}`"
    />
    <p v-else class="error-msg">{{ whatInput.msg }}</p>
  </div>
</template>

<script>
export default {
  name: "InputBlock",
  methods: {
    inputHandler(e) {
      this.$emit("input", e.target.value);
    }
  },
  computed: {
    whatInput() {
      console.log(this);
      if (this.type === "text" || this.type === "password") {
        return {
          type: "text"
        };
      } else {
        return {
          type: "error",
          msg: "This type of input is not exits yet..."
        };
      }
    }
  },
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    id: {
      type: String,
      default: "input-block-000"
    },
    name: {
      type: String,
      default: "input-block"
    },
    label: {
      type: String,
      default: "Label"
    },
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Enter data..."
    },
    size: {
      type: String,
      default: "lg"
    }
  }
};
</script>

<style lang="scss">
.input-block {
  margin-bottom: $gutter-md;
  &:last-of-type {
    margin-bottom: 0;
  }

  &__label {
    display: block;
    margin-bottom: $gutter-xs / 2;
    color: $color-placeholder;
  }
  &__text-input {
    display: block;
    width: 100%;
    height: 80px;
    margin-bottom: 0;
    padding: 0 $gutter-md;
    border: 1px solid $color-border;
    font-size: $fs;
    line-height: 78px;
    transition: all ease 0.3s;
    &:focus {
      outline: none;
      border-color: $color-primary;
    }
    @include placeholder {
      line-height: 78px;
      color: $color-placeholder;
      font-weight: thin;
    }
    &--md {
      padding: 0 20px;
      font-size: $fs * 1.2;
      line-height: 78px;
    }
  }
}
</style>