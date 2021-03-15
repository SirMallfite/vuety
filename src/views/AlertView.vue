<template>
  <h1>Alert</h1>
  <base-alert v-for="alert in alerts" :key="alert" :type="alert" :text="text"/>
</template>
<script>
import BaseAlert from "@/components/BaseAlert";

export default {
  components: {BaseAlert},
  setup() {
    const alerts = ['success', 'info', 'warning', 'error']
    const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    return {alerts, text}
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