<template>
  <div class="app__sidebar">
    <router-link v-for="route in routes" :key="route.name" :to="route.path">
      {{ route.name }}
    </router-link>
  </div>
  <div class="app__body">
    <router-view/>
  </div>
</template>

<script>

import {computed} from 'vue'
import router from "@/router";

export default {
  name: 'App',
  setup() {
    const routes = computed(() => router.options.routes)
    routes.value.shift()

    return {
      routes
    }

  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: inline-flex;
}

.app__sidebar {
  width: 320px;
  height: 100%;

  background-color: $color-primary;

  padding: 24px;

  display: flex;
  flex-direction: column;

  a {
    line-height: 32px;
    color: $color-white;
  }
}

.app__body {
  width: calc(100vw - 320px);
  height: 100%;

  padding: 24px 48px;

  background-color: $color-background-root;
}
</style>
AZ