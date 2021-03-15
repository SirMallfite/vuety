<template>
  <div :class="classes">
    <component :is="component"/>
  </div>
</template>

<script>
import {computed, defineAsyncComponent} from "vue";

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'small',
      validator: value => ['x-small', 'small', 'medium', 'large', 'x-large'].includes(value)
    }
  },
  setup(props) {
    const component = defineAsyncComponent(() => import(`@/assets/icons/${props.icon}.svg`))
    const classes = computed(() => `base-icon base-icon--${props.size}`)

    return {component, classes}
  }
}
</script>
<style scoped lang="scss">
.base-icon {
  display: inline-flex;

  &--x-small {
    svg {
      width: 16px;
      height: 16px;
    }
  }

  &--small {
    svg {
      width: 24px;
      height: 24px;
    }
  }

  &--medium {
    svg {
      width: 32px;
      height: 32px;
    }
  }

  &--large {
    svg {
      width: 40px;
      height: 40px;
    }

  }

  &--x-large {
    svg {
      width: 48px;
      height: 48px;
    }
  }
}
</style>
