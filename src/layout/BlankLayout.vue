<template>
  <TransitionPage>
    <router-view/>
  </TransitionPage>
</template>

<script>
import TransitionPage from '@/components/TransitionPage'

export default {
  name: 'BlankLayout',

  components: {
    TransitionPage,
  },

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>