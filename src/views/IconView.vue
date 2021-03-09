<template>
  <h1>Icon</h1>
  <div v-for="icon in icons" :key="icon">
    <p>{{ icon }}</p>
    <base-icon :icon="icon" size="x-large"/>
    <base-icon :icon="icon" size="large"/>
    <base-icon :icon="icon" size="medium"/>
    <base-icon :icon="icon" size="small"/>
    <base-icon :icon="icon" size="x-small"/>
  </div>
</template>
<script>
import BaseIcon from "@/components/BaseIcon";

export default {
  components: {BaseIcon},
  setup() {
    const icons = ['home', 'info', 'padlock', 'pencil', 'trash']
    return {icons}
  }
}
</script>
<style scoped lang="scss">
div {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;

  p {
    width: 100px;
  }

  .base-icon {
    margin-left: 24px;
  }
}

</style>