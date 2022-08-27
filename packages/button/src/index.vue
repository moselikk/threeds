<template>
  <button
  class="tds-button"
    @click="handleClick"
    :autofocus="autofocus"
    :class="[
      type ? 'tds-button--' + type : '',
      size ? 'tds-button--' + size : ''
    ]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'TdsButton',
  props: {
    size: String,
    type: {
      type: String,
      default: 'default'
    },
    autofocus: Boolean,
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>

<style lang="scss">
.tds-button{
  margin: 5px;
}

.tds-button--default,
.tds-button--primary
{
  background-color: skyblue;
}
.tds-button--waning{
  background-color: rgba(255, 0, 0, 0.512);
}
.tds-button--success{
  background-color: yellowgreen
}
.tds-button--medium{
  height: 35px;
  font-size: 25px;
  line-height: 25px;
}
.tds-button--big{
  height: 50px;
  font-size: 35px;
  line-height: 35px;
}

</style>