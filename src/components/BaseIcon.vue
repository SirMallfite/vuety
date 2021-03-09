<template>
  <component :is="iconComponent"/>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
  props: {
    name: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const iconComponent = defineAsyncComponent(() => import(`@/assets/icons/${props.name}.svg`))

    return {iconComponent}
  }
}
</script>
