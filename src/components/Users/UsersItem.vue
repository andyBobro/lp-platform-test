<template>
  <router-link :to="`/app/${data.id}`" active-class="user-link--active" class="user-link">
    <header class="user-link__header">
      <div class="user-link__name">{{data.name}}</div>
      <div class="user-link__date">{{ dateFormatter }}</div>
    </header>
    <div class="user-link__msg">{{ data.msg.substring(0, 120) }}</div>
  </router-link>
</template>

<script>
import dayjs from "dayjs";
// eslint-disable-next-line
import ru from "dayjs/locale/ru";

dayjs.locale("ru");

export default {
  name: "UsersItem",
  computed: {
    dateFormatter() {
      return dayjs(this.data.date).format("DD.MMMM.YYYY");
    }
  },
  props: {
    data: {
      type: Object,
      default() {
        return {
          id: "1231232",
          name: "Vasya",
          // theme: " ",
          date: new Date(),
          msg: "bla bla bla bla bla "
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.user-link {
  display: block;
  padding: $gutter-md;
  text-decoration: none;
  border-bottom: 1px solid $color-border;
  border-left: 2px solid transparent;
  transition: all ease 0.3s;
  &:hover {
    background-color: lighten($color-chatlist-bg, 10%);
  }
  &--active {
    border-left: 2px solid $color-primary;
    background-color: lighten($color-chatlist-bg, 10%);
  }
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
  }
  &__name {
    color: $color-msg-user;
  }
  &__date {
    font-size: 10px;
    color: $color-msg-date;
  }
  &__msg {
    position: relative;
    font-size: 13px;
    color: $color-msg;
    max-height: 40px;
    overflow: hidden;
  }
}
</style>