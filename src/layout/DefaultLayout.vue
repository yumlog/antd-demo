<template>
  <a-layout>
    <Header/>
    <a-layout-content>
      <router-view/>
    </a-layout-content>
    <Footer/>
  </a-layout>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'DefaultLayout',

  components: {
    Header,
    Footer,
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