
<template>
  <component :is="layout">
    <RouterView/>
  </component>
</template>

<script>
import { useRoute } from 'vue-router';
import {computed} from 'vue'
import '../src/assets/tailwind.css';
export default {
  name: 'App',
  components:{

  },
  setup(){
  const route= useRoute()
  return {
    layout:computed(()=>route.meta.layout || 'DefaultLayout')
  }
  }
}
</script>

<style>
#app {
  margin:0;
  padding:0;
}
</style>
