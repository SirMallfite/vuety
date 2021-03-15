<template>
  <div :class="classes">
    <base-icon :icon="type" size="large"/>
    <div>{{ text }}</div>
  </div>
</template>
<script>
import {computed} from "vue";
import BaseIcon from "@/components/BaseIcon";

export default {
  components: {BaseIcon},
  props: {
    type: {
      type: String,
      default: 'info',
      validator: value => ['success', 'info', 'warning', 'error'].includes(value)
    },
    text: {
      type: String,
      default: null
    }
  },

  setup(props) {
    const classes = computed(() => `base-alert base-alert--${props.type}`)

    return {classes}
  }
}
</script>
<style scoped lang="scss">
.base-alert {

  padding: 24px;
  display: inline-flex;
  border-left: 12px solid;
  border-radius: 4px;

  .base-icon {
    margin-right: 24px;
  }

  &--success {
    background: $background-success;
    color: $color-success;
    border-color: $color-success;


    .base-icon ::v-deep svg {
      fill: $color-success;
    }
  }

  &--info {
    background: $background-info;
    color: $color-info;
    border-color: $color-info;

    .base-icon ::v-deep svg {
      fill: $color-info;
    }
  }

  &--warning {
    background: $background-warning;
    color: $color-warning;
    border-color: $color-warning;

    .base-icon ::v-deep svg {
      fill: $color-warning;
    }
  }

  &--error {
    background: $background-error;
    color: $color-error;
    border-color: $color-error;

    .base-icon ::v-deep svg {
      fill: $color-error;
    }
  }
}
</style>