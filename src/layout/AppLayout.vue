<template>
  <keep-alive>
    <component :is="layout">
      <router-view/>
    </component>
  </keep-alive>
</template>

<script>
const defaultLayout = "DefaultLayout"

export default {
  name: 'AppLayout',
  
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layout/${layout}.vue`);
    },
  
  },
};
</script>

<style lang="scss" scoped>

</style>