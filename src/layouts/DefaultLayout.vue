<template>
  <NavComponent />
  <slot />
</template>
<script>
import NavComponent from '@/components/homepagecomponents/NavComponent.vue';
export default{
  components: {
    NavComponent
  },
  setup() {},
};
</script>
