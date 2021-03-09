<template>
  <h1>Text Field</h1>

  <base-text-field label="Simple" />

  <base-text-field label="With placeholder" placeholder="Placeholder"/>

  <base-text-field label="With value" value="Value"/>

  <base-text-field label="Type number" type="number"/>

  <base-text-field label="Type password" type="password"/>


  <base-icon name="padlock" />
</template>
<script>
import BaseTextField from "@/components/TextField";
import BaseIcon from "@/components/BaseIcon";
export default {
  components: {BaseIcon, BaseTextField}
}
</script>
<style scoped lang="scss">
.base-text-field {
  margin-bottom: 24px;
}
</style>